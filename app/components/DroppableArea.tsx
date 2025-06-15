import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DroppableAreaProps {
  id: string;
  children: React.ReactNode;
}

export function DroppableArea({ id, children }: DroppableAreaProps) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className="min-h-[100px] border-2 border-dashed border-border rounded-md p-4 mb-4"
    >
      {children}
    </div>
  );
} 