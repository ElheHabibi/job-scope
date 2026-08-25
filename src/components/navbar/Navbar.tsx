import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <>
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
          </>
  )
}

export default Navbar
