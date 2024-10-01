import { StorageContent } from "@/types/storage";
import { SetValue } from "@/types/utils";
import { useCallback, useEffect, useState } from "react";

// adapted from JohnBra on GitHub
// https://gist.github.com/JohnBra/c81451ea7bc9e77f8021beb4f198ab96

// TODO add error handling (MAX_WRITE_OPERATIONS_PER_MINUTE)

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

  useEffect(() => {
    readStorage(key, area).then((response) => {
      setStoredValue({ isInitial: false, value: response });
    });

    const handleStorageChange: Parameters<
      typeof chrome.storage.onChanged.addListener
    >[0] = (changes, namespace) => {
      if (namespace === area && key in changes) {
        setStoredValue({
          isInitial: false,
          value: changes[key].newValue,
        });
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChange);
    return () => chrome.storage.onChanged.removeListener(handleStorageChange);
  }, [area, key]);

  const setValue: SetValue<StorageContent[T]> = useCallback(
    (value) => {
      // prevent changing the value before it's loaded
      if (storedValue.isInitial) return;

      const newValue =
        value instanceof Function ? value(storedValue.value) : value;
      setStorage(key, newValue, area);
    },
    [area, key, storedValue.isInitial, storedValue.value]
  );

  return [storedValue.value, setValue];
}

export async function readStorage<T extends keyof StorageContent>(
  key: T,
  area: AreaName = "local"
): Promise<StorageContent[T]> {
  const result = await chrome.storage[area].get(key);
  return result?.[key];
}

export async function setStorage<T extends keyof StorageContent>(
  key: T,
  value: StorageContent[T],
  area: AreaName = "local"
): Promise<void> {
  await chrome.storage[area].set({ [key]: value });
}
