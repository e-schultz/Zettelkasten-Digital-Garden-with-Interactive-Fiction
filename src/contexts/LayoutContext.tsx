import React, { useState, createContext, useContext } from 'react';
export type LayoutType = 'monocle' | 'evenHorizontal' | 'evenVertical' | 'grid' | 'mainAndDeck' | 'mainAndVertStack' | 'centerMain' | 'centerMainBalanced';
type LayoutContextType = {
  layout: LayoutType;
  setLayout: (layout: LayoutType) => void;
  getPanelSizes: (totalPanels: number) => number[];
};
const LayoutContext = createContext<LayoutContextType | undefined>(undefined);
const calculatePanelSizes = (layout: LayoutType, totalPanels: number): number[] => {
  switch (layout) {
    case 'monocle':
      return [100];
    case 'evenHorizontal':
      return Array(totalPanels).fill(100 / totalPanels);
    case 'evenVertical':
      return Array(totalPanels).fill(100);
    case 'grid':
      {
        const cols = Math.ceil(Math.sqrt(totalPanels));
        return Array(totalPanels).fill(100 / cols);
      }
    case 'mainAndDeck':
      return [60, 40];
    case 'mainAndVertStack':
      return [60, 40];
    case 'centerMain':
      return totalPanels === 1 ? [100] : totalPanels === 2 ? [50, 50] : [25, 50, 25];
    case 'centerMainBalanced':
      return totalPanels === 1 ? [100] : totalPanels === 2 ? [50, 50] : [33, 34, 33];
    default:
      return Array(totalPanels).fill(100 / totalPanels);
  }
};
export const LayoutProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [layout, setLayout] = useState<LayoutType>('evenHorizontal');
  const getPanelSizes = (totalPanels: number) => {
    return calculatePanelSizes(layout, totalPanels);
  };
  return <LayoutContext.Provider value={{
    layout,
    setLayout,
    getPanelSizes
  }}>
      {children}
    </LayoutContext.Provider>;
};
export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};