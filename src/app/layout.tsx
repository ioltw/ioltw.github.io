import Header from "@/components/header";
import Scripts from "@/components/scripts";

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
