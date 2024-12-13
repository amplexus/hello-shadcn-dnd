import React, { createContext, useContext, useMemo } from "react";
import type { CSSProperties, PropsWithChildren } from "react";
import type {
  DraggableAttributes,
  DraggableSyntheticListeners,
  UniqueIdentifier
} from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { Grip } from "lucide-react";

interface Props {
  id: UniqueIdentifier;
}

interface Context {
  attributes: DraggableAttributes | {};
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
}

const SortableItemContext = createContext<Context>({
  attributes: {},
  listeners: undefined,
  ref() { }
});

export function SortableItem({ children, id }: PropsWithChildren<Props>) {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition
  } = useSortable({ id });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef
    }),
    [attributes, listeners, setActivatorNodeRef]
  );
  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition // transition: transform 200ms ease is identical to tailwindcss transition duration-200 ease
  };

  // console.log("SortableItem::isDragging", isDragging);
  // console.log("SortableItem::style", JSON.stringify(style));
  return (
    <SortableItemContext.Provider value={context}>
      <li className={`flex justify-between grow-1 items-center bg-[#fff] text-[#333] p-0 ${isDragging ? "opacity-40" : ""}`} ref={setNodeRef} style={style}>
        {children}
      </li>
    </SortableItemContext.Provider>
  );
}

export function DragHandle() {
  const { attributes, listeners, ref } = useContext(SortableItemContext);

  return (
    <Button variant="ghost" {...attributes} {...listeners} className="hover:bg-gray-300 touch-none" ref={ref}>
      <Grip />
    </Button>
  );
}

