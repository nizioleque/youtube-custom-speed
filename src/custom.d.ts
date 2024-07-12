// TypeScript definition for SVG imports
declare global {
  declare module "*.svg" {
    import { FunctionComponent, SVGProps } from "react";

    export const ReactComponent: FunctionComponent<
      SVGProps<SVGSVGElement> & { title?: string }
    >;

    export default ReactComponent;
  }
}

export {};
