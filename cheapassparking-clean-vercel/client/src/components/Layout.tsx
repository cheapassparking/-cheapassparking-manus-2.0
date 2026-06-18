import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { navCategories } from "@/lib/data";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLocationsOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg"
            : "bg-navy"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/cheapass-logo.svg"
              alt="Cheap Ass Parking"
              className="h-10 md:h-14 w-auto rounded"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/find-parking">Find Parking</NavLink>
            
            {/* Locations Dropdown */}
            <div className="relative" onMouseEnter={() => setLocationsOpen(true)} onMouseLeave={() => setLocationsOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors rounded-md hover:bg-white/10">
                Locations <ChevronDown className={`w-3.5 h-3.5 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link href="/locations" className="block px-4 py-2 text-sm text-charcoal hover:bg-cream hover:text-navy font-medium">
                    All Locations
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  {navCategories.map(cat => (
                    <Link
                      key={cat.id}
                      href={`/locations/${cat.slug}`}
                      className="block px-4 py-2 text-sm text-charcoal hover:bg-cream hover:text-navy"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* CTA Button */}
          <Link href="/reserve" className="hidden md:inline-flex btn-blaze text-sm">
            Reserve Parking
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy border-t border-white/10 animate-in slide-in-from-top-2 duration-200">
            <nav className="container py-4 flex flex-col gap-1">
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/find-parking">Find Parking</MobileNavLink>
              <MobileNavLink href="/locations">Locations</MobileNavLink>
              {navCategories.map(cat => (
                <Link
                  key={cat.id}
                  href={`/locations/${cat.slug}`}
                  className="block pl-8 py-2 text-sm text-white/70 hover:text-white"
                >
                  {cat.name}
                </Link>
              ))}
              <MobileNavLink href="/faq">FAQ</MobileNavLink>
              <MobileNavLink href="/about">About Us</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>
              <Link href="/reserve" className="btn-blaze text-center mt-3">
                Reserve Parking
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-dark text-white/80">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <img
                src="/assets/cheapass-logo.svg"
                alt="Cheap Ass Parking"
                className="h-12 w-auto rounded mb-4"
              />
              <p className="text-sm text-white/60 leading-relaxed">
                Don't pay a horse's price for parking. Find cheap parking anywhere, reserve online, and save money.
              </p>
            </div>

            {/* Parking Categories */}
            <div>
              <h4 className="font-display text-white text-lg font-bold mb-4">Parking Types</h4>
              <ul className="space-y-2">
                {navCategories.map(cat => (
                  <li key={cat.id}>
                    <Link href={`/locations/${cat.slug}`} className="text-sm text-white/60 hover:text-blaze transition-colors">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-white/60 hover:text-blaze transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-sm text-white/60 hover:text-blaze transition-colors">Contact</Link></li>
                <li><Link href="/faq" className="text-sm text-white/60 hover:text-blaze transition-colors">FAQ</Link></li>
                <li><Link href="/reserve" className="text-sm text-white/60 hover:text-blaze transition-colors">Reserve Parking</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-white text-lg font-bold mb-4">Get In Touch</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>info@cheapassparking.com</li>
                <li>Galveston, Texas</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blaze transition-colors cursor-pointer">
                  <span className="text-xs">FB</span>
                </span>
                <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blaze transition-colors cursor-pointer">
                  <span className="text-xs">IG</span>
                </span>
                <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blaze transition-colors cursor-pointer">
                  <span className="text-xs">X</span>
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Cheap Ass Parking. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Same Donkey. Different Hats. Always Cheap.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const [location] = useLocation();
  const isActive = location === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive
          ? "text-blaze bg-white/10"
          : "text-white/90 hover:text-white hover:bg-white/10"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="block py-2.5 text-white font-medium hover:text-blaze transition-colors">
      {children}
    </Link>
  );
}
