import React, { useState, createContext, useContext } from 'react';
import { notes } from '../data/notes';
export type Note = {
  id: string;
  title: string;
  content: string;
  metadata: {
    uid: string;
    noteType: string;
    sigil: string;
    tags: string[];
    linkedTo: string[];
    doctrineVolume: string;
    created: string;
    updated: string;
  };
};
type Panel = {
  id: string;
  noteId: string | null;
  isPinned?: boolean;
};
type NotesContextType = {
  notes: Note[];
  openNotes: Panel[];
  activePanel: string | null;
  getNote: (id: string) => Note | undefined;
  openNote: (noteId: string, panelId?: string, insertAfter?: boolean) => void;
  closePanel: (panelId: string) => void;
  setActivePanel: (panelId: string) => void;
  createNewPanel: () => void;
  getLinkedNotes: (noteId: string) => Note[];
  togglePinPanel: (panelId: string) => void;
  isPanelPinned: (panelId: string) => boolean;
};
const NotesContext = createContext<NotesContextType | undefined>(undefined);
export const NotesProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [openNotes, setOpenNotes] = useState<Panel[]>([{
    id: 'panel-1',
    noteId: 'welcome',
    isPinned: false
  }]);
  const [activePanel, setActivePanel] = useState<string>('panel-1');
  const maxPanels = 4; // This could be made configurable
  const getNote = (id: string) => {
    return notes.find(note => note.id === id);
  };
  const findPanelIndex = (panelId: string) => {
    return openNotes.findIndex(p => p.id === panelId);
  };
  const getNextAvailablePanel = (currentPanelId: string) => {
    const currentIndex = findPanelIndex(currentPanelId);
    const unpinnedPanels = openNotes.filter(p => !p.isPinned && p.id !== currentPanelId);
    // If we have unpinned panels, use the next one in rotation
    if (unpinnedPanels.length > 0) {
      const nextIndex = (currentIndex + 1) % openNotes.length;
      return openNotes[nextIndex].id;
    }
    // If we haven't reached max panels, create a new one
    if (openNotes.length < maxPanels) {
      return null; // Signals to create new panel
    }
    // Otherwise, find the first unpinned panel to reuse
    const firstUnpinned = openNotes.find(p => !p.isPinned);
    return firstUnpinned?.id;
  };
  const openNote = (noteId: string, panelId?: string, insertAfter = false) => {
    const sourcePanelId = panelId || activePanel;
    const panel = openNotes.find(p => p.id === sourcePanelId);
    if (panel?.isPinned || insertAfter) {
      const targetPanelId = getNextAvailablePanel(sourcePanelId);
      if (!targetPanelId) {
        // Create new panel if under max
        if (openNotes.length < maxPanels) {
          const newPanelId = `panel-${Date.now()}`;
          setOpenNotes(prev => [...prev, {
            id: newPanelId,
            noteId,
            isPinned: false
          }]);
          setActivePanel(newPanelId);
        } else {
          // Find first unpinned panel to reuse
          const firstUnpinned = openNotes.find(p => !p.isPinned);
          if (firstUnpinned) {
            setOpenNotes(prev => prev.map(p => p.id === firstUnpinned.id ? {
              ...p,
              noteId
            } : p));
            setActivePanel(firstUnpinned.id);
          }
        }
      } else {
        // Use existing panel
        setOpenNotes(prev => prev.map(p => p.id === targetPanelId ? {
          ...p,
          noteId
        } : p));
        setActivePanel(targetPanelId);
      }
    } else {
      // Normal behavior for unpinned panels
      setOpenNotes(prev => prev.map(p => p.id === sourcePanelId ? {
        ...p,
        noteId
      } : p));
      setActivePanel(sourcePanelId);
    }
  };
  const togglePinPanel = (panelId: string) => {
    setOpenNotes(prev => prev.map(panel => panel.id === panelId ? {
      ...panel,
      isPinned: !panel.isPinned
    } : panel));
  };
  const isPanelPinned = (panelId: string) => {
    return openNotes.find(p => p.id === panelId)?.isPinned || false;
  };
  const closePanel = (panelId: string) => {
    setOpenNotes(prev => prev.filter(panel => panel.id !== panelId));
    if (activePanel === panelId) {
      setActivePanel(openNotes[0]?.id || null);
    }
  };
  const createNewPanel = () => {
    const newPanelId = `panel-${Date.now()}`;
    setOpenNotes(prev => [...prev, {
      id: newPanelId,
      noteId: null
    }]);
    setActivePanel(newPanelId);
  };
  const getLinkedNotes = (noteId: string) => {
    const note = getNote(noteId);
    if (!note) return [];
    return notes.filter(n => note.metadata.linkedTo.includes(n.metadata.uid));
  };
  return <NotesContext.Provider value={{
    notes,
    openNotes,
    activePanel,
    getNote,
    openNote,
    closePanel,
    setActivePanel,
    createNewPanel,
    getLinkedNotes,
    togglePinPanel,
    isPanelPinned
  }}>
      {children}
    </NotesContext.Provider>;
};
export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};