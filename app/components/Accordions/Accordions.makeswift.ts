import { lazy } from "react";

import { List, Select, Shape, Slot, Style } from "@makeswift/runtime/controls";

import { runtime } from "../../lib/makeswift/runtime";

runtime.registerComponent(
  lazy(() => import("./Accordions")),
  {
    type: "accordions",
    label: "Custom / Accordions",
    props: {
      className: Style(),
    },
  }
);
