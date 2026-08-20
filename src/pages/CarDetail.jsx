import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarById } from '../data/cars';
import { ArrowLeft, Zap, Gauge, ShieldCheck, CheckCircle2, Award, Calendar } from 'lucide-react';

export default function CarDetail() {
  const { id } = useParams();
  const car = getCarById(id);

  if (!car) {
    return (
      <div className="text-center py-24 space-y-4">
        <h2 className="text-3xl font-bold text-white">Vehicle Not Found</h2>
        <p className="text-gray-400 text-sm">The selected exotic vehicle is currently unavailable or does not exist.</p>
        <Link to="/" className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-amber-500 text-black font-bold text-xs uppercase">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Fleet</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-16">
      <Link to="/" className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-400 hover:text-amber-400 transition">
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Catalog</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Image Showcase */}
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/3]">
            <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-amber-400 text-xs font-semibold uppercase">Power</div>
              <div className="text-lg font-bold text-white mt-1">{car.specs.power}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-amber-400 text-xs font-semibold uppercase">0-100 km/h</div>
              <div className="text-lg font-bold text-white mt-1">{car.specs.acceleration}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-amber-400 text-xs font-semibold uppercase">Top Speed</div>
              <div className="text-lg font-bold text-white mt-1">{car.specs.topSpeed}</div>
            </div>
          </div>
        </div>

        {/* Right: Info & Booking CTA */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              {car.brand} Flagship
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">{car.name}</h1>
            <p className="text-gray-300 text-sm leading-relaxed">{car.description}</p>

            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Powertrain & Architecture</h4>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-gray-400">Engine Configuration</span>
                  <span className="text-white font-semibold">{car.specs.engine}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-gray-400">Insurance & Liability</span>
                  <span className="text-emerald-400 font-semibold">Full Comprehensive Included</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-400">Delivery Tier</span>
                  <span className="text-white font-semibold">White-Glove Flatbed Delivery</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-amber-950/40 border border-amber-500/30 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Daily Charter Rate</div>
              <div className="text-3xl font-black text-white">${car.pricePerDay} <span className="text-xs font-normal text-gray-400">/ 24 hours</span></div>
            </div>
            <Link
              to={`/checkout/${car.id}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20 text-center"
            >
              Reserve Vehicle Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
