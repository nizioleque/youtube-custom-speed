import { sleep } from "./promise";

export async function waitUntilExists<T>(getter: () => T | null): Promise<T> {
  let result = getter();

  while (result === null) {
    await sleep(100);
    result = getter();
  }

  return result;
}
