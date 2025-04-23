import React, { Fragment } from 'react';
import { Note, useNotes } from '../contexts/NotesContext';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { TagIcon, CalendarIcon, BookIcon } from 'lucide-react';
export const NoteContent: React.FC<{
  note: Note;
  panelId: string;
}> = ({
  note,
  panelId
}) => {
  const {
    openNote,
    getNote,
    getLinkedNotes
  } = useNotes();
  const handleNoteClick = (linkedNoteId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const linkedNote = getNote(linkedNoteId) || notes.find(n => n.metadata.uid === linkedNoteId);
    if (!linkedNote) return;
    // Check for modifier key (Command on Mac, Control on others)
    const isModifierPressed = event.metaKey || event.ctrlKey;
    openNote(linkedNote.id, panelId, isModifierPressed);
  };
  const renderContent = (content: string) => {
    const wikiLinkRegex = /\[\[(.*?)\]\]/g;
    const parts = content.split(wikiLinkRegex);
    return parts.map((part, index) => {
      if (index % 2 === 0) {
        return <Fragment key={index}>{part}</Fragment>;
      }
      const linkedNoteId = part;
      const linkedNote = getNote(linkedNoteId) || notes.find(n => n.metadata.uid === linkedNoteId);
      if (!linkedNote) {
        return <span key={index} className="text-muted-foreground underline cursor-pointer">
            {part}
          </span>;
      }
      return <span key={index} className="text-primary underline cursor-pointer hover:text-primary/80" onClick={e => handleNoteClick(linkedNote.id, e)}>
          {linkedNote.title}
        </span>;
    });
  };
  const linkedNotes = getLinkedNotes(note.id);
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">{note.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {note.metadata.tags.map(tag => <Badge key={tag} variant="outline" className="text-xs">
              <TagIcon className="h-3 w-3 mr-1" />
              {tag}
            </Badge>)}
        </div>
        <div className="text-sm text-muted-foreground mb-6 flex items-center gap-4">
          <span className="flex items-center">
            <BookIcon className="h-3 w-3 mr-1" />
            {note.metadata.doctrineVolume}
          </span>
          <span className="flex items-center">
            <CalendarIcon className="h-3 w-3 mr-1" />
            {new Date(note.metadata.updated).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="prose prose-sm dark:prose-invert max-w-none">
        {renderContent(note.content)}
      </div>
      {linkedNotes.length > 0 && <Card className="p-4 mt-6">
          <h3 className="text-sm font-medium mb-2">Linked Notes</h3>
          <div className="space-y-1">
            {linkedNotes.map(linkedNote => <div key={linkedNote.id} className="flex items-center text-sm cursor-pointer hover:bg-muted p-1 rounded" onClick={e => handleNoteClick(linkedNote.id, e)}>
                <span className="mr-2">{linkedNote.metadata.sigil}</span>
                {linkedNote.title}
              </div>)}
          </div>
        </Card>}
      {note.id === 'welcome' && <Card className="p-4 mt-6 bg-primary/5 border-primary/20">
          <h3 className="text-sm font-medium mb-2">How to Use This Vault</h3>
          <ul className="text-sm space-y-2">
            <li>Click on links to navigate between notes</li>
            <li>
              Hold {navigator.platform.includes('Mac') ? 'Command' : 'Ctrl'} and
              click links to open in adjacent panel
            </li>
            <li>Search for notes or filter by tags using the sidebar</li>
            <li>Resize panels by dragging the handles between them</li>
          </ul>
        </Card>}
    </div>;
};