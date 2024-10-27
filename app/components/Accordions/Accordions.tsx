"use client";

import React, { ReactNode, Ref, forwardRef } from "react";

import * as Accordion from "@radix-ui/react-accordion";
import clsx from "clsx";

type AccordionItem = {
  title: ReactNode;
  body: ReactNode;
};

type Props = {
  className?: string;
  accordions: AccordionItem[];
  type: "single" | "multiple";
};

export const Accordions = forwardRef(function Accordions(
  { className, accordions, type = "multiple" }: Props,
  ref: Ref<HTMLUListElement>
) {
  return <div className={className}>Accordion!</div>;
});

export default Accordions;
