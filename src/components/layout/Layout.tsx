import Container from "../container/Container";
import Header from "../header/Header";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
