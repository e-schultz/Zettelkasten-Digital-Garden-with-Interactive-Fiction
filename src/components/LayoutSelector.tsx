import React from 'react';
import { Button } from './ui/button';
import { useLayout } from '../contexts/LayoutContext';
import { LayoutGrid, LayoutTemplate, LayoutDashboard, Maximize2, Columns, Rows } from 'lucide-react';
const layouts = [{
  id: 'monocle',
  icon: Maximize2,
  label: 'Monocle'
}, {
  id: 'evenHorizontal',
  icon: Columns,
  label: 'Even Horizontal'
}, {
  id: 'evenVertical',
  icon: Rows,
  label: 'Even Vertical'
}, {
  id: 'grid',
  icon: LayoutGrid,
  label: 'Grid'
}, {
  id: 'mainAndDeck',
  icon: LayoutTemplate,
  label: 'Main and Deck'
}, {
  id: 'mainAndVertStack',
  icon: LayoutDashboard,
  label: 'Main and Stack'
}, {
  id: 'centerMain',
  icon: LayoutTemplate,
  label: 'Center Main'
}, {
  id: 'centerMainBalanced',
  icon: LayoutTemplate,
  label: 'Center Balanced'
}];
export const LayoutSelector = () => {
  const {
    layout,
    setLayout
  } = useLayout();
  return <div className="flex items-center gap-1">
      <span className="text-xs text-primary/60 mr-2">Layout:</span>
      <div className="flex gap-1">
        {layouts.map(({
        id,
        icon: Icon,
        label
      }) => <Button key={id} variant={layout === id ? 'default' : 'ghost'} size="icon" className="h-8 w-8" onClick={() => setLayout(id as any)} title={label}>
            <Icon className="h-4 w-4" />
          </Button>)}
      </div>
    </div>;
};