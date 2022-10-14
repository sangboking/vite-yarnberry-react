import { addNumberSelector, numberAtom } from "atom/buttonAtom";
import React from "react";
import { useRecoilValue } from "recoil";

export default function Button() {
  const number = useRecoilValue(addNumberSelector);
  return <div>{number}</div>;
}
