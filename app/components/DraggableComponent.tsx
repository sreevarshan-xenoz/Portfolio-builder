import React from 'react';
import { useDraggable } from '@dnd-kit/core';

interface DraggableComponentProps {
  id: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function DraggableComponent({ id, title, description, children }: DraggableComponentProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-3 bg-secondary rounded-md cursor-move"
    >
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      {children}
    </div>
  );
} 