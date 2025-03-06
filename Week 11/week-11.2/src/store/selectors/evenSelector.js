import { selector } from "recoil";
import { counterAtom } from "../atoms/counter";

export const evenSelector = selector({
  key: "isEvenSelector",
  get: ({ get }) => {
    // a function to get the atom with get as an argument
    const currentCount = get(counterAtom); // get the current state form the atom
    return currentCount % 2 == 0;
  },
});
