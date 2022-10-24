import { addNumberSelector } from "@/store/buttonAtom";
import { useRecoilValue } from "recoil";
import { Icon } from "@/assets/svgs";

export default function Button() {
  const number = useRecoilValue(addNumberSelector);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {import.meta.env.VITE_TEST}
      {number}
      <Icon name="facebook" width="1.5rem" height="1.5rem" />
      <Icon name="vite" width="1.5rem" height="1.5rem" />
    </div>
  );
}
