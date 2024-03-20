import create from "zustand";

const useStore = create((set) => ({
  language: "es-CO",
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "es-CO" ? "en" : "es-CO",
    })),
}));

export default useStore;
