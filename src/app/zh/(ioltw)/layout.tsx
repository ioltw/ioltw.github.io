import NavBar from "@/components/navbar-zh";
import Footer from "@/components/footer-zh";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar/>
      {children}
      <Footer/>
    </>
  );
}
