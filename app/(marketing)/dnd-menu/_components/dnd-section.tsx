"use client"
import { useState } from 'react';
import { SortableList } from './sortable-list';
import { DragHandle, SortableItem } from './sortable-item';

function createRange<T>(
  length: number,
  initializer: (index: number) => T
): T[] {
  return [...new Array(length)].map((_, index) => initializer(index));
}

function getMockItems() {
  return createRange(50, (index) => ({ id: index + 1 }));
}

export function MenuEditorPanel() {
  const [items, setItems] = useState(getMockItems);
  return (
    <div className="max-w-[400px] my-30 mx-auto">
      <SortableList
        items={items}
        onChange={setItems}
        renderItem={(item) => (
          <SortableItem id={item.id}>
            <div className="flex w-full items-center justify-between bg-gray-50 ml-4">
              {item.id}
              <DragHandle />
            </div>
          </SortableItem>
        )}
      />
    </div>
  )
}

