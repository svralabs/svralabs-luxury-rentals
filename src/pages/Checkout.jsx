import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarById } from '../data/cars';
import { ArrowLeft, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function Checkout() {
  const { id } = useParams();
  const car = getCarById(id);
  const [days, setDays] = useState(3);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: 'Beverly Hills VIP Lounge',
    pickupDate: new Date().toISOString().split('T')[0]
  });

  if (!car) {
    return <div className="text-center py-20 text-white">Car not found.</div>;
  }

  const totalPrice = days * car.pricePerDay;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-white">Charter Reservation Confirmed!</h2>
        <p className="text-sm text-gray-300">
          Thank you, <span className="text-amber-400 font-semibold">{formData.name}</span>. Your reservation for the <span className="text-white font-bold">{car.name}</span> has been locked. Our VIP concierge officer will contact you within 15 minutes.
        </p>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-left space-y-1">
          <div><span className="text-gray-400">Duration:</span> {days} Days (${totalPrice.toLocaleString()})</div>
          <div><span className="text-gray-400">Pickup Date:</span> {formData.pickupDate}</div>
          <div><span className="text-gray-400">Location:</span> {formData.pickupLocation}</div>
        </div>
        <Link to="/" className="inline-block px-6 py-2.5 rounded-full bg-amber-500 text-black font-bold text-xs uppercase">
          Back to Fleet
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      <Link to={`/cars/${car.id}`} className="inline-flex items-center space-x-2 text-xs font-semibold text-gray-400 hover:text-amber-400 transition">
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Vehicle Specs</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-2">Reservation & Client Details</h3>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Full Legal Name</label>
            <input
              type="text"
              required
              placeholder="Alexander Wright"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="alex@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="+1 (555) 019-2834"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Pickup Date</label>
              <input
                type="date"
                required
                value={formData.pickupDate}
                onChange={e => setFormData({...formData, pickupDate: e.target.value})}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Rental Duration (Days)</label>
              <input
                type="number"
                min="1"
                max="30"
                value={days}
                onChange={e => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Concierge Delivery Location</label>
            <select
              value={formData.pickupLocation}
              onChange={e => setFormData({...formData, pickupLocation: e.target.value})}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 focus:outline-none"
            >
              <option>Beverly Hills VIP Lounge</option>
              <option>LAX Private Jet FBO Terminal</option>
              <option>Bel Air Private Residence Delivery</option>
              <option>Monaco Port Hercules FBO</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider transition mt-4 shadow-lg shadow-amber-500/20"
          >
            Confirm & Guarantee Charter (${totalPrice.toLocaleString()})
          </button>
        </form>

        {/* Sidebar Summary */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 h-fit">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Order Summary</h4>
          <img src={car.image} alt={car.name} className="w-full h-32 object-cover rounded-xl" />
          <div>
            <div className="text-white font-bold">{car.name}</div>
            <div className="text-xs text-amber-400 font-semibold">{car.brand}</div>
          </div>
          <div className="border-t border-slate-800 pt-3 space-y-2 text-xs">
            <div className="flex justify-between text-gray-400">
              <span>Daily Rate</span>
              <span className="text-white font-semibold">${car.pricePerDay}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Duration</span>
              <span className="text-white font-semibold">{days} Days</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Security Deposit</span>
              <span className="text-emerald-400 font-semibold">$0 (VIP Waiver)</span>
            </div>
            <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
              <span>Total Charter</span>
              <span className="text-amber-400">${totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
