import SiteHeader from "@/components/site-header";
import SiteScripts from "@/components/site-scripts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <SiteHeader/>
      </head>
      <body>
        {children}
        <SiteScripts/>
      </body>
    </html>
  );
}
