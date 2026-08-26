import { MenuLeft } from "@boxicons/react";

function SortingControls() {
  return (
    <section className="flex gap-2 p-4 items-center">
      <MenuLeft pack="filled" fill="gray"  flip="vertical" />
      <button className="bg-secondary font-light text-xs text-white py-1.5 px-3 rounded uppercase">Relevent</button>
      <button className="bg-muted text-xs text-white py-1.5 px-3 rounded uppercase">Recent</button>
    </section>
  );
}

export default SortingControls;
