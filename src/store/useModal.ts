/*eslint no-unused-vars: "off"*/
import { create } from "zustand";

type State = {
  isShowModal: boolean;
  content: React.ReactNode | null;
};

type Actions = {
  showModal: (content: React.ReactNode) => void;
  hideModal: () => void;
};

export const useModal = create<State & Actions>((set) => ({
  isShowModal: false,
  content: null,
  showModal: (content) => set(() => ({ isShowModal: true, content })),
  hideModal: () => set(() => ({ isShowModal: false, content: null })),
}));
