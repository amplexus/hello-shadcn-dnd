"use client"
import { useState } from 'react';
import { SortableList } from './sortable-list';
import { createRange } from '../utils';

function getMockItems() {
  return createRange(50, (index) => ({ id: index + 1 }));
}

export function DndDemo() {
  const [items, setItems] = useState(getMockItems);
  return (
    <div style={{ maxWidth: 400, margin: "30px auto" }}>
      <SortableList
        items={items}
        onChange={setItems}
        renderItem={(item) => (
          <SortableList.Item id={item.id}>
            {item.id}
            <SortableList.DragHandle />
          </SortableList.Item>
        )}
      />
    </div>
  )
}

