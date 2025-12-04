import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  deliveryMethod: null,
  paymentMethod: null,
  phoneNumber: "",

  addItem: (item) => set((s) => ({ items: [...s.items, item] })),
  removeItem: (id) =>
    set((s) => ({ items: s.items.filter((i) => i.id !== id) })),

  setDelivery: (method) => set({ deliveryMethod: method }),
  setPayment: (method) => set({ paymentMethod: method }),
  setPhone: (num) => set({ phoneNumber: num }),

  clearCart: () =>
    set({
      items: [],
      deliveryMethod: null,
      paymentMethod: null,
      phoneNumber: "",
    }),
}));
