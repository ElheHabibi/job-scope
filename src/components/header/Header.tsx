import { Link } from "react-router-dom";
import image from "../../assets/logo-job.webp";
import Container from "../container/Container";
import Theme from "../theme/Theme";
import MobileMenuButton from "../mobileMenu/MobileMenuButton";
import Navbar from "../navbar/Navbar";
import ButtonComponent from "../button/ButtonComponent";

function Header() {
  return (
    <header className="border-b border-border">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={image} alt="image" className="w-10 h-10 object-cover" />
            <span className="text-xl font-bold tracking-tight text-text-primary">
              Job<span className="text-primary">Scope</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Navbar />
          </nav>

          <div className="flex items-center gap-4">
            <Theme />
            <ButtonComponent variant="primary">Sign in</ButtonComponent>
            <MobileMenuButton />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
