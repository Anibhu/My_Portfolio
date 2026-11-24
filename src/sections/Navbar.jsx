import { useState } from "react";
import { motion } from "motion/react";
function Navigation({ isMobile = false }) {
  return (
    <ul className={isMobile ? "flex flex-col items-center gap-5" : "nav-ul"}>
      <li className="nav-li">
        <a className="nav-link" href="#home">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">Work</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">

      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">

          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Anish
          </a>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="flex sm:hidden cursor-pointer text-neutral-400 hover:text-white"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <motion.div
          className="overflow-hidden sm:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="py-5">
            <Navigation isMobile={true} />
          </nav>
        </motion.div>
      )}

    </div>
  );
};
export default Navbar;
