/*eslint no-unused-vars: "off"*/
import { create } from "zustand";

type State = {
  isShowPopup: boolean;
  content: React.ReactNode | null;
};

type Actions = {
  showPopup: (content: React.ReactNode) => void;
  hidePopup: () => void;
};

export const usePopup = create<State & Actions>((set) => ({
  isShowPopup: false,
  content: null,
  showPopup: (content) => set(() => ({ isShowPopup: true, content })),
  hidePopup: () => set(() => ({ isShowPopup: false, content: null })),
}));
