import { Dispatch, SetStateAction, useEffect, useState } from "react";

// adapted from JohnBra on GitHub
// https://gist.github.com/JohnBra/c81451ea7bc9e77f8021beb4f198ab96

type StorageArea = "sync" | "local";
type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useStorage<T>(
  key: string,
  initialValue: T,
  area: StorageArea = "sync"
): [T, SetValue<T>] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // TODO switch to useLayoutEffect?
  useEffect(() => {
    readStorage<T>(key, area).then((response) => {
      if (response !== undefined) setStoredValue(response);
    });

    // TODO remove listener
    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace === area && key in changes) {
        setStoredValue(changes[key].newValue);
      }
    });
  }, [area, key]);

  // TODO useCallback?
  const setValue: SetValue<T> = (value) => {
    const newValue = value instanceof Function ? value(storedValue) : value;
    setStorage<T>(key, newValue, area);
  };

  return [storedValue, setValue];
}

export async function readStorage<T>(
  key: string,
  area: StorageArea = "local"
): Promise<T | undefined> {
  try {
    const result = await chrome.storage[area].get(key);
    return result?.[key];
  } catch (error) {
    console.error(`Error reading ${area} storage key "${key}":`, error);
    return undefined;
  }
}

export async function setStorage<T>(
  key: string,
  value: T,
  area: StorageArea = "local"
): Promise<boolean> {
  try {
    await chrome.storage[area].set({ [key]: value });
    return true;
  } catch (error) {
    console.error(`Error setting ${area} storage key "${key}":`, error);
    return false;
  }
}
