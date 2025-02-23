"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Moon, Sun, Linkedin, Github } from "lucide-react"; 
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle Scroll
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll down - Hide navbar
        setShowNavbar(false);
      } else {
        // Scroll up - Show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          />
          <link rel="icon" href="/images/favicon.png" />
          <title>Josephine Bonsu | Portfolio</title>
        </head>
        <body>
          <ThemeProvider attribute="class">
            <div
              className={`min-h-screen transition-colors duration-300 ${
                darkMode ? "bg-gray-950 text-gray-100" : "bg-[#fffefc] text-gray-900"
              }`}
            >
              {/* Header */}
              <header
                className={`p-4 sticky top-0 z-50 navbar transition-transform duration-300 ${
                  showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
                }`}
              >
                <div className="container mx-auto flex items-center justify-between flex-wrap">
                  <Link href ="#home">
                  <h1 className="text-xl font-bold text-white">Josephine Bonsu</h1>
                  </Link>

                  {/* Navbar (Desktop) */}
                  <nav className="hidden sm:flex space-x-6">
                    <Link href="#home" className="text-white hover:text-gray-300">Home</Link>
                    <Link href="#about" className="text-white hover:text-gray-300">About</Link>
                    <Link href="#projects" className="text-white hover:text-gray-300">Projects</Link>
                    <Link href="#contact" className="text-white hover:text-gray-300">Contact</Link>
                  </nav>

                  {/* Right Section (Dark Mode & Social Links) */}
                  <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/in/josephineobonsu" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={24} className="text-white hover:text-gray-300 transition-transform hover:scale-110" />
                    </a>
                    <a href="https://github.com/bonsujo" target="_blank" rel="noopener noreferrer">
                      <Github size={24} className="text-white hover:text-gray-300 transition-transform hover:scale-110" />
                    </a>

                    {/* Dark Mode Toggle */}
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all flex items-center gap-2"
                    >
                      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                      className="sm:hidden text-white navbar-toggle"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      ☰
                    </button>
                  </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                  <div className="sm:hidden flex flex-col items-center mobile-menu py-4 space-y-4">
                    <Link href="#home" className="text-white">Home</Link>
                    <Link href="#about" className="text-white">About</Link>
                    <Link href="#projects" className="text-white">Projects</Link>
                    <Link href="#contact" className="text-white">Contact</Link>
                  </div>
                )}
              </header>

              {/* Main Content */}
              <main className="container mx-auto p-3">
                <div id="home">{children}</div>
              </main>

              {/* Footer */}
              <footer className="bg-gray-800 text-white py-4 w-full text-center">
                <p>&copy; 2025 Josephine Bonsu</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <a href="https://www.linkedin.com/in/josephineobonsu" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={24} className="text-white hover:text-gray-400 transition-transform hover:scale-110" />
                  </a>
                  <a href="https://github.com/bonsujo" target="_blank" rel="noopener noreferrer">
                    <Github size={24} className="text-white hover:text-gray-400 transition-transform hover:scale-110" />
                  </a>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
