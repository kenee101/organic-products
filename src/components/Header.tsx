import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "products", label: "Products" },
    { id: "about", label: "About" },
    // { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <img
            src="/olivecrafts-logo.jpg"
            alt="OliveCrafts Logo"
            className=" h-16 w-16 object-contain rounded-2xl"
          />
          <span className="bg-linear-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
            OliveCrafts
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              activeClass="text-emerald-600 after:w-full font-medium"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer hover:text-emerald-600 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-emerald-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Shop Now
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href="#products"
              className="hover:text-emerald-600 transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="hover:text-emerald-600 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-600 transition-colors"
            >
              Contact
            </a>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
