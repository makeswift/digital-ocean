"use client";

import React, { Ref, forwardRef } from "react";

type Props = {
  className?: string;
};

export const Accordions = forwardRef(function Accordions(
  { className }: Props,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div className={className} ref={ref}>
      Accordion!
    </div>
  );
});

export default Accordions;
