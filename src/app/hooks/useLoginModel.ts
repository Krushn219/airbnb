import { create } from "zustand";

interface LogInStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLogInModel = create<LogInStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLogInModel;
