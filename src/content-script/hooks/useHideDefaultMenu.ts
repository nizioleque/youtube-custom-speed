import { waitUntilExists } from "@/utils/dom";
import { useEffect } from "react";
import { getMenu } from "../utils";

function useHideDefaultMenu() {
  useEffect(() => {
    const effect = async () => {
      const menu = await waitUntilExists(getMenu);
      if (!menu) return;

      const elementHeight = parseFloat(getComputedStyle(menu).height);
      menu.style.display = "none";

      // adjust menu height to avoid incorrect menu option height
      const ancestors = [
        menu.parentElement,
        menu.parentElement?.parentElement,
        menu.parentElement?.parentElement?.parentElement,
      ];

      for (const ancestor of ancestors) {
        if (!ancestor) continue;

        const ancestorHeight = parseFloat(getComputedStyle(ancestor).height);
        ancestor.style.height = `${ancestorHeight - elementHeight}px`;
      }
    };

    effect();
  }, []);
}

export default useHideDefaultMenu;
