import React from 'react';
import { useNotes } from '../contexts/NotesContext';
import { NoteContent } from './NoteContent';
import { Button } from './ui/button';
import { XIcon, PlusCircleIcon, PinIcon } from 'lucide-react';
export const NotePanel: React.FC<{
  panelId: string;
  noteId: string | null;
}> = ({
  panelId,
  noteId
}) => {
  const {
    getNote,
    closePanel,
    openNote,
    activePanel,
    setActivePanel,
    togglePinPanel,
    isPanelPinned
  } = useNotes();
  const note = noteId ? getNote(noteId) : null;
  const isActive = activePanel === panelId;
  const isPinned = isPanelPinned(panelId);
  if (!note) {
    return <div className={`h-full flex flex-col terminal-window ${isActive ? 'border-primary/50' : 'border-primary/20'}`} onClick={() => setActivePanel(panelId)}>
        <div className="terminal-header flex items-center justify-between">
          <span className="text-sm">No node selected</span>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className={`text-primary hover:text-primary/80 ${isPinned ? 'bg-primary/20' : ''}`} onClick={e => {
            e.stopPropagation();
            togglePinPanel(panelId);
          }} title={isPinned ? 'Unpin Panel' : 'Pin Panel'}>
              <PinIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80" onClick={() => closePanel(panelId)}>
              <XIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="terminal-content flex-1 flex items-center justify-center">
          <div className="text-center">
            <PlusCircleIcon className="h-10 w-10 mx-auto text-primary/40" />
            <p className="mt-2 text-primary/60">
              Select a node from navigation
            </p>
          </div>
        </div>
      </div>;
  }
  return <div className={`h-full flex flex-col terminal-window ${isActive ? 'border-primary/50' : 'border-primary/20'}`} onClick={() => setActivePanel(panelId)}>
      <div className="terminal-header flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-sm font-medium">{note.title}</span>
          <span className="ml-2 text-xs opacity-60">{note.metadata.sigil}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className={`text-primary hover:text-primary/80 ${isPinned ? 'bg-primary/20' : ''}`} onClick={e => {
          e.stopPropagation();
          togglePinPanel(panelId);
        }} title={isPinned ? 'Unpin Panel' : 'Pin Panel'}>
            <PinIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80" onClick={() => closePanel(panelId)}>
            <XIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="terminal-content flex-1 overflow-auto">
        <NoteContent note={note} panelId={panelId} />
      </div>
    </div>;
};