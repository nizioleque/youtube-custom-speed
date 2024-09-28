import { sleep } from "./promise";

export async function waitUntilExists<T>(
  getter: () => T | null,
  interval: number = 50
): Promise<T> {
  let result = getter();

  while (result === null) {
    await sleep(interval);
    result = getter();
  }

  return result;
}
