import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 100,
});
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 2,
});
export const messagesAtom = atom({
  key: "messagesAtom",
  default: 4,
});

export const totalnotificationSelector = selector({
  key: "totalnotificationSelector",
  get: ({ get }) => {
    const networkCount = get(networkAtom);
    const notificationCount = get(notificationAtom);
    const jobsCount = get(jobsAtom);
    const messagesCount = get(messagesAtom);
    return networkCount + notificationCount + jobsCount + messagesCount;
  },
});
