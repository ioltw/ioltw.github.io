import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
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
        <NavBar/>
        {children}
        <SiteScripts/>
        <Footer/>
      </body>
    </html>
  );
}
