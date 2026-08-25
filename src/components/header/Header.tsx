import { Link } from "react-router-dom";
import image from "../../assets/job-scope-logo.webp";
import Container from "../container/Container";
import Theme from "../theme/Theme";
import MobileMenuButton from "../mobileMenu/MobileMenuButton";
import Navbar from "../navbar/Navbar";

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
            <button
              type="button"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Sign in
            </button>
            <MobileMenuButton />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
