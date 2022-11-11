import { atom, useAtom } from "jotai";

export const nation = atom<string | undefined>(" ");

export const ModalOpen = atom<boolean>(true);



