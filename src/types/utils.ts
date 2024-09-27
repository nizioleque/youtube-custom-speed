import { Dispatch, SetStateAction } from "react";

export type PickByType<T, Value> = {
  [P in keyof T as T[P] extends Value ? P : never]: T[P];
};

export type SetValue<T> = Dispatch<SetStateAction<T>>;
