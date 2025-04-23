import React, { useState, Fragment } from 'react';
import { Sidebar } from './Sidebar';
import { NotePanel } from './NotePanel';
import { useNotes } from '../contexts/NotesContext';
import { useLayout } from '../contexts/LayoutContext';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import { LayoutSelector } from './LayoutSelector';
const GridLayout: React.FC<{
  panels: React.ReactNode[];
  cols: number;
}> = ({
  panels,
  cols
}) => {
  const rows = Math.ceil(panels.length / cols);
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = panels.slice(i * cols, (i + 1) * cols);
    grid.push(<ResizablePanelGroup key={i} direction="horizontal">
        {row.map((panel, j) => <Fragment key={j}>
            {j > 0 && <ResizableHandle withHandle className="bg-primary/30 hover:bg-primary/50" />}
            <ResizablePanel defaultSize={100 / cols}>{panel}</ResizablePanel>
          </Fragment>)}
      </ResizablePanelGroup>);
  }
  return <ResizablePanelGroup direction="vertical">
      {grid.map((row, i) => <Fragment key={i}>
          {i > 0 && <ResizableHandle withHandle className="bg-primary/30 hover:bg-primary/50" />}
          <ResizablePanel defaultSize={100 / rows}>{row}</ResizablePanel>
        </Fragment>)}
    </ResizablePanelGroup>;
};
const MainAndStackLayout: React.FC<{
  panels: React.ReactNode[];
  vertical?: boolean;
}> = ({
  panels,
  vertical
}) => {
  if (panels.length === 0) return null;
  if (panels.length === 1) return <>{panels[0]}</>;
  const mainPanel = panels[0];
  const stackPanels = panels.slice(1);
  return <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={60}>{mainPanel}</ResizablePanel>
      <ResizableHandle withHandle className="bg-primary/30 hover:bg-primary/50" />
      <ResizablePanel defaultSize={40}>
        <ResizablePanelGroup direction={vertical ? 'vertical' : 'horizontal'}>
          {stackPanels.map((panel, i) => <Fragment key={i}>
              {i > 0 && <ResizableHandle withHandle className="bg-primary/30 hover:bg-primary/50" />}
              <ResizablePanel defaultSize={100 / stackPanels.length}>
                {panel}
              </ResizablePanel>
            </Fragment>)}
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>;
};
const CenterMainLayout: React.FC<{
  panels: React.ReactNode[];
  balanced?: boolean;
}> = ({
  panels,
  balanced
}) => {
  if (panels.length === 0) return null;
  if (panels.length === 1) return <>{panels[0]}</>;
  if (panels.length === 2) {
    return <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>{panels[0]}</ResizablePanel>
        <ResizableHandle withHandle className="bg-primary/30 hover:bg-primary/50" />
        <ResizablePanel defaultSize={50}>{panels[1]}</ResizablePanel>
      </ResizablePanelGroup>;
  }
  const leftSize = balanced ? 33 : 25;
  const centerSize = balanced ? 34 : 50;
  const rightSize = balanced ? 33 : 25;
  return <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={leftSize}>
        <ResizablePanelGroup direction="vertical">
          {panels.slice(2).map((panel, i) => <Fragment key={i}>
              {i > 0 && <ResizableHandle withHandle className="bg-primary/30 hover:bg-primary/50" />}
              <ResizablePanel>{panel}</ResizablePanel>
            </Fragment>)}
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle className="bg-primary/30 hover:bg-primary/50" />
      <ResizablePanel defaultSize={centerSize}>{panels[0]}</ResizablePanel>
      <ResizableHandle withHandle className="bg-primary/30 hover:bg-primary/50" />
      <ResizablePanel defaultSize={rightSize}>{panels[1]}</ResizablePanel>
    </ResizablePanelGroup>;
};
export const Layout = () => {
  const {
    openNotes
  } = useNotes();
  const {
    layout
  } = useLayout();
  const [sidebarSize, setSidebarSize] = useState(20);
  const panels = openNotes.map(panel => <NotePanel key={panel.id} panelId={panel.id} noteId={panel.noteId} />);
  const renderPanels = () => {
    switch (layout) {
      case 'monocle':
        return panels[0] || null;
      case 'evenHorizontal':
        return <ResizablePanelGroup direction="horizontal">
            {panels.map((panel, i) => <Fragment key={i}>
                {i > 0 && <ResizableHandle withHandle className="bg-primary/30 hover:bg-primary/50" />}
                <ResizablePanel defaultSize={100 / panels.length}>
                  {panel}
                </ResizablePanel>
              </Fragment>)}
          </ResizablePanelGroup>;
      case 'evenVertical':
        return <ResizablePanelGroup direction="vertical">
            {panels.map((panel, i) => <Fragment key={i}>
                {i > 0 && <ResizableHandle withHandle className="bg-primary/30 hover:bg-primary/50" />}
                <ResizablePanel defaultSize={100 / panels.length}>
                  {panel}
                </ResizablePanel>
              </Fragment>)}
          </ResizablePanelGroup>;
      case 'grid':
        const cols = Math.ceil(Math.sqrt(panels.length));
        return <GridLayout panels={panels} cols={cols} />;
      case 'mainAndDeck':
        return <MainAndStackLayout panels={panels} />;
      case 'mainAndVertStack':
        return <MainAndStackLayout panels={panels} vertical />;
      case 'centerMain':
        return <CenterMainLayout panels={panels} />;
      case 'centerMainBalanced':
        return <CenterMainLayout panels={panels} balanced />;
      default:
        return null;
    }
  };
  return <div className="h-screen w-full flex flex-col bg-background text-foreground font-mono">
      <header className="h-12 border-b border-primary/30 flex items-center px-4 bg-card/50 backdrop-blur">
        <h1 className="text-lg font-bold text-primary glitch" data-text="[FLOAT BBS]">
          [FLOAT BBS]
        </h1>
        <div className="ml-4">
          <LayoutSelector />
        </div>
        <div className="ml-auto flex items-center gap-2 text-xs">
          <span className="text-muted-foreground">
            Connection: 2400 baud | parity: none
          </span>
          <span className="flex items-center gap-1">
            Status: <span className="text-green-400">● Active</span>
          </span>
        </div>
      </header>
      <div className="terminal-window flex-1 m-2 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={sidebarSize} onResize={size => setSidebarSize(size)} minSize={15} maxSize={30} className="bg-card/50">
            <Sidebar />
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-primary/30 hover:bg-primary/50" />
          <ResizablePanel defaultSize={100 - sidebarSize}>
            {renderPanels()}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <footer className="h-6 border-t border-primary/30 flex items-center justify-between px-4 text-xs text-primary/60 bg-card/50">
        <span>FLOAT System v0.1 | float.documentation.v1</span>
        <span className="terminal-cursor">YOU ARE THE THREAD NOW</span>
      </footer>
    </div>;
};