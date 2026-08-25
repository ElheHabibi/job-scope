import { Link, NavLink } from "react-router-dom";
import image from "../../assets/job-scope-logo.webp";
import Container from "../container/Container";
import Theme from "../theme/Theme";

function Navbar() {
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "py-7 text-sm font-medium border-b-2 text-primary hover:border-primary"
                  : " py-7 text-sm font-medium text-text-secondary hover:text-primary"
              }
            >
              Jobs
            </NavLink>

            <NavLink
              to="/saved-jobs"
              className={({ isActive }) =>
                isActive
                  ? "py-7 text-sm font-medium border-b-2 text-primary hover:border-primary"
                  : " py-7 text-sm font-medium text-text-secondary hover:text-primary"
              }
            >
              Saved Jobs
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "py-7 text-sm font-medium border-b-2 text-primary hover:border-primary"
                  : " py-7 text-sm font-medium text-text-secondary hover:text-primary"
              }
            >
              About
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <Theme />
            <button
              type="button"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Sign in
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-textSecondary hover:bg-surface md:hidden"
            >
              ☰
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
