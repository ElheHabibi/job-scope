import Container from "../container/Container";
import Navbar from "../navbar/Navbar";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
