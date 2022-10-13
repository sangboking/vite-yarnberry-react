import React from "react";
import { useRecoilValue } from "recoil";
import { addNumberSelector } from "@/atom/buttonAtom";

export default function Button() {
  const changeNumber = useRecoilValue<number>(addNumberSelector);
  return <div>{changeNumber}</div>;
}
