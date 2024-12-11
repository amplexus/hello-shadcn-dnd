import { MenuEditorPanel } from "./_components/dnd-section";

// https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/docs/examples-tree-sortable--all-features
export default function DndPage() {
  return (
    <div className="bg-muted/60
      min-h-screen 
      flex flex-col items-center justify-center text-center text-balance gap-8 px-4">
      <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">Menu Editor</h1>
      <p className="text-lg lg:text-3xl max-w-screen-xl">
        A demonstration of drag and drop hierarchical menu editing using dnd-kit.
      </p>
      <div className="w-full">
        <MenuEditorPanel />
      </div>
    </div>
  );
}
