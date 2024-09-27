import { useEffect, useState } from "react";
import { StorageContent } from "../types/storage";
import { SetValue } from "../types/utils";

// adapted from JohnBra on GitHub
// https://gist.github.com/JohnBra/c81451ea7bc9e77f8021beb4f198ab96

// TODO compare this implementation to the source for improvements

type AreaName = chrome.storage.AreaName;
type StateValue<T extends keyof StorageContent, D> =
  | { isInitial: true; value: D }
  | { isInitial: false; value: StorageContent[T] };

export function useStorage<D, T extends keyof StorageContent>(
  key: T,
  initialValue: D,
  area: AreaName = "sync"
): [StorageContent[T] | D, SetValue<StorageContent[T]>] {
  const [storedValue, setStoredValue] = useState<StateValue<T, D>>({
    isInitial: true,
    value: initialValue,
  });

  // TODO switch to useLayoutEffect?
  useEffect(() => {
    readStorage(key, area).then((response) => {
      // TODO check if `undefined` can be used safely
      if (response !== undefined) {
        setStoredValue({ isInitial: false, value: response });
      }
    });

    // TODO remove listener
    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace === area && key in changes) {
        setStoredValue({
          isInitial: false,
          value: changes[key].newValue,
        });
      }
    });
  }, [area, key]);

  // TODO useCallback?
  const setValue: SetValue<StorageContent[T]> = (value) => {
    if (storedValue.isInitial) return;

    const newValue =
      value instanceof Function ? value(storedValue.value) : value;
    setStorage(key, newValue, area);
  };

  return [storedValue.value, setValue];
}

export async function readStorage<T extends keyof StorageContent>(
  key: T,
  area: AreaName = "local"
): Promise<StorageContent[T] | undefined> {
  try {
    const result = await chrome.storage[area].get(key);
    return result?.[key];
  } catch (error) {
    console.error(`Error reading ${area} storage key "${key}":`, error);
    return undefined;
  }
}

export async function setStorage<T extends keyof StorageContent>(
  key: T,
  value: StorageContent[T],
  area: AreaName = "local"
): Promise<boolean> {
  try {
    await chrome.storage[area].set({ [key]: value });
    return true;
  } catch (error) {
    console.error(`Error setting ${area} storage key "${key}":`, error);
    return false;
  }
}
