import { addNumberSelector } from "store/buttonAtom";
import React from "react";
import { useRecoilValue } from "recoil";

export default function Button() {
  const number = useRecoilValue(addNumberSelector);

  return (
    <div>
      {import.meta.env.VITE_TEST}
      {number}
    </div>
  );
}
