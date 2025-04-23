import React from 'react';
import { Layout } from './components/Layout';
import { NotesProvider } from './contexts/NotesContext';
import { ThemeProvider } from './components/ui/theme-provider';
import { LayoutProvider } from './contexts/LayoutContext';
export function App() {
  return <ThemeProvider defaultTheme="dark">
      <LayoutProvider>
        <NotesProvider>
          <Layout />
        </NotesProvider>
      </LayoutProvider>
    </ThemeProvider>;
}