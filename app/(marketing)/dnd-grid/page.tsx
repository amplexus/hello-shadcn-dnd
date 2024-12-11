// import { MenuEditorPanel } from "./_components/dnd-section";

// https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/docs/presets-sortable-grid--removable-items
export default function DndPage() {
  return (
    <div className="bg-muted/60
      min-h-screen 
      flex flex-col items-center text-center text-balance gap-8 px-4 pt-8">
      <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">Product Collection Position Editor</h1>
      <p className="text-lg lg:text-3xl max-w-screen-xl">
        A demonstration of drag and drop to reorder the cards in a product grid / product collection page. All using dnd-kit.
      </p>
      <div className="w-full">
        {/* <MenuEditorPanel /> */}
      </div>
    </div>
  );
}
