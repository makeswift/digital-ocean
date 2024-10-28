import { Style } from "@makeswift/runtime/controls";

import { runtime } from "../../lib/makeswift/runtime";
import Accordions from "./Accordions";

runtime.registerComponent(Accordions, {
  type: "accordions",
  label: "Custom / Accordions",
  props: {
    className: Style(),
  },
});
