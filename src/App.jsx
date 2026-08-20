import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Catalog from './pages/Catalog';
import CarDetail from './pages/CarDetail';
import Checkout from './pages/Checkout';
import { Sparkles, Globe, Mail, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2.5">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 shadow-md shadow-amber-500/50"></span>
              <span className="font-extrabold text-base tracking-widest uppercase text-white font-serif">AURA EXOTICS</span>
            </Link>
            <nav className="flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
              <Link to="/" className="hover:text-amber-400 transition">Fleet Catalog</Link>
              <a href="#services" className="hover:text-amber-400 transition">Concierge</a>
              <a href="#about" className="hover:text-amber-400 transition">Membership</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-7xl mx-auto px-6 pt-8 w-full">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/cars/:id" element={<CarDetail />} />
            <Route path="/checkout/:id" element={<Checkout />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-850 bg-slate-950 py-8 text-xs text-gray-500">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Aura Exotics. Engineered by SVRALABS Factory 2.0.</p>
            <div className="flex space-x-4">
              <a href="https://svralabs-luxury-rentals.pages.dev" className="hover:text-gray-300">Live Edge</a>
              <span>•</span>
              <a href="https://github.com/svralabs/svralabs-luxury-rentals" className="hover:text-gray-300">GitHub Source</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
