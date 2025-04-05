import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TemaStore = {
  temEscuro: boolean;
  alternarTema: () => void;
  setTemEscuro: (valor: boolean) => void;
};

const useTemaStore = create<TemaStore>()(
  persist(
    (set) => ({
      temEscuro: false,
      alternarTema: () => set((state) => ({ temEscuro: !state.temEscuro })),
      setTemEscuro: (valor) => set({ temEscuro: valor })
    }),
    {
      name: 'tema-storage'
    }
  )
);

export default useTemaStore;
