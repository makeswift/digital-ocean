import type { Metadata } from "next";
import { MakeswiftProvider } from "./lib/makeswift/provider";
import { DraftModeScript } from "@makeswift/runtime/next/server";

export const metadata: Metadata = {
  title: "Next.js Self Hosted Demo",
  description: "This is hosted on Ubuntu Linux with Nginx as a reverse proxy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <DraftModeScript />
      </head>
      <body>
        <MakeswiftProvider>{children}</MakeswiftProvider>
      </body>
    </html>
  );
}
