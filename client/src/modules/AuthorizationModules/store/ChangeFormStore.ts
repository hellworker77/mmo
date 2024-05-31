import create from "zustand";

type FormType = "authorization" | "registration";

interface FormState {
  formType: FormType;
  // eslint-disable-next-line no-unused-vars
  setFormType: (formType: FormType) => void;
}

export const useFormStore = create<FormState>((set) => ({
  formType: "authorization",
  setFormType: (formType) => set({ formType }),
}));
