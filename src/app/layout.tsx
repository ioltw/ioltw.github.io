import Header from "@/components/header";
import Scripts from "@/components/scripts";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <Header/>
      </head>
      <body>
        {children}
        <Scripts/>
      </body>
    </html>
  );
}
