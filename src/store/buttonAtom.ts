import { atom, selector } from "recoil";

export const numberAtom = atom<number>({
  key: "number",
  default: 0,
});

export const addNumberSelector = selector({
  key: "addNumber",
  get: ({ get }) => {
    const changeNumber = get(numberAtom);

    return changeNumber + 3;
  },
});
