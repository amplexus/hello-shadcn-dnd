// import { MenuEditorPanel } from "./_components/dnd-section";

import { SortableTree } from "./_components/sortable-tree";

// https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/docs/examples-tree-sortable--all-features
export default function DndPage() {
  return (
    <div className="bg-muted/60
      min-h-screen 
      flex flex-col items-center justify-center text-center text-balance gap-8 px-4">
      <h1 className="text-4xl font-bold tracking-tight m-4">Menu Editor</h1>
      <p className="text-lg lg:text-2xl max-w-screen-xl">
        A demonstration of drag and drop menu editing using dnd-kit.
      </p>
      <div className="grid grid-cols-2 bg-slate-200 gap-2 min-h-[600px]">
        <div className="w-[400px] mx-4 my-4 border-2 p-4 border-slate-400">
          <SortableTree indicator removable />
        </div>
        <div className="w-[400px] mx-4 my-4 border-2 p-4 border-slate-400">
        </div>
      </div>
    </div>
  );
}
