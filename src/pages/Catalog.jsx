import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { Sparkles, Gauge, Zap, ChevronRight, Shield, Star } from 'lucide-react';

export default function Catalog() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const brands = ['All', ...new Set(cars.map(c => c.brand))];
  const filtered = selectedBrand === 'All' ? cars : cars.filter(c => c.brand === selectedBrand);

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-neutral-950 via-slate-900 to-amber-950/40 border border-amber-500/20 p-8 md:p-14">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exotic Fleet 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Curated Supercar & Luxury Fleet
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Reserve world-class automotive masterpieces with VIP door-to-door concierge delivery, zero deposit friction, and 24/7 private support.
          </p>
        </div>
      </div>

      {/* Brand Filters */}
      <div className="flex flex-wrap gap-2 pb-2">
        {brands.map(b => (
          <button
            key={b}
            onClick={() => setSelectedBrand(b)}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition ${
              selectedBrand === b
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                : 'bg-slate-900/80 text-gray-400 border border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      {/* Car Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(car => (
          <div
            key={car.id}
            className="group rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden hover:border-amber-500/40 transition duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/5"
          >
            <div className="relative h-56 overflow-hidden bg-slate-950">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-xs font-semibold text-amber-400 uppercase">
                {car.brand}
              </div>
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-xs font-bold text-white">
                ${car.pricePerDay} <span className="text-gray-400 font-normal">/ day</span>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition">
                  {car.name}
                </h3>
                <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                  {car.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-800/80 text-xs text-gray-400">
                <div className="flex items-center space-x-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>{car.specs.power}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Gauge className="w-3.5 h-3.5 text-amber-400" />
                  <span>{car.specs.acceleration}</span>
                </div>
              </div>

              <Link
                to={`/cars/${car.id}`}
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-slate-800/80 hover:bg-amber-500 text-white hover:text-black font-semibold text-xs transition duration-200"
              >
                <span>View Details & Specs</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
