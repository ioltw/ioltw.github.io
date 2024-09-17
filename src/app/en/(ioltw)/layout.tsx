import NavBar from "@/components/navbar-en";
import Footer from "@/components/footer-en";

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
