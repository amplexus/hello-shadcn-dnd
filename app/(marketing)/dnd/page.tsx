import { DndDemo } from "./_components/dnd-section";

export default function DndPage() {
  return (
    <div className="bg-muted/60
      min-h-screen 
      flex flex-col items-center justify-center text-center text-balance gap-8 px-4">
      <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">Drag &amp; Drop</h1>
      <p className="text-lg lg:text-3xl max-w-screen-xl">
        A demonstration of drag and drop using dnd-kit
      </p>
      <div className="w-full">
        <DndDemo />
      </div>
    </div>
  );
}
