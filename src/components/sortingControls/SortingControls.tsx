import { MenuLeft } from "@boxicons/react";
import ButtonComponent from "../button/ButtonComponent";

function SortingControls() {
  return (
    <section className="flex gap-2 p-4 items-center">
      <MenuLeft pack="filled" fill="gray" flip="vertical" />
      <ButtonComponent variant="secondary-active">Relevent</ButtonComponent>
      <ButtonComponent variant="secondary">Recent</ButtonComponent>
    </section>
  );
}

export default SortingControls;
