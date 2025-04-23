import React, { useState } from 'react';
import { useNotes } from '../contexts/NotesContext';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { SearchIcon, FileTextIcon, TagIcon } from 'lucide-react';
export const Sidebar = () => {
  const {
    notes,
    openNote
  } = useNotes();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'notes' | 'tags'>('notes');
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.metadata.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
  const uniqueTags = Array.from(new Set(notes.flatMap(note => note.metadata.tags))).sort();
  return <div className="h-full flex flex-col terminal-window border-0">
      <div className="terminal-header">
        <div className="relative">
          <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-primary/60" />
          <Input placeholder="Search nodes..." className="pl-8 bg-transparent border-primary/30 text-primary placeholder:text-primary/40" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>
      </div>
      <div className="flex border-b border-primary/30">
        <Button variant={activeTab === 'notes' ? 'default' : 'ghost'} size="sm" className="flex-1 rounded-none text-xs" onClick={() => setActiveTab('notes')}>
          <FileTextIcon className="h-4 w-4 mr-1" />
          NODES
        </Button>
        <Button variant={activeTab === 'tags' ? 'default' : 'ghost'} size="sm" className="flex-1 rounded-none text-xs" onClick={() => setActiveTab('tags')}>
          <TagIcon className="h-4 w-4 mr-1" />
          TAGS
        </Button>
      </div>
      <div className="flex-1 overflow-auto p-2">
        {activeTab === 'notes' ? <div className="space-y-1">
            {filteredNotes.map(note => <Button key={note.id} variant="ghost" size="sm" className="w-full justify-start text-sm font-normal hover:bg-primary/20" onClick={() => openNote(note.id)}>
                <span className="mr-2 text-primary/80">
                  {note.metadata.sigil}
                </span>
                <span className="truncate">{note.title}</span>
              </Button>)}
          </div> : <div className="space-y-1">
            {uniqueTags.map(tag => <Button key={tag} variant="ghost" size="sm" className="w-full justify-start text-sm font-normal hover:bg-primary/20" onClick={() => setSearchQuery(tag)}>
                <TagIcon className="h-3 w-3 mr-1 text-primary/80" />
                <span className="truncate">{tag}</span>
              </Button>)}
          </div>}
      </div>
    </div>;
};