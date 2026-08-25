import Navbar from "../navbar/Navbar";

interface MobileMenuNav{
    isMenuOpen: boolean;
}

function MobileMenuNav({isMenuOpen}: MobileMenuNav ) {
    
  return (
    <div>
         {isMenuOpen && (
        <div className="absolute top-16 right-0 w-30 border-t border-border bg-background shadow-lg md:hidden">
          <nav className="flex flex-col justify-center items-center">
           <Navbar />
          </nav>
        </div>
      )}
      
    </div>
  )
}

export default MobileMenuNav
