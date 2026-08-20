export const cars = [
  {
    id: "1",
    name: "Phantom VIII Series II",
    brand: "Rolls-Royce",
    pricePerDay: 2500,
    image: "https://images.unsplash.com/photo-1631295868223-63265840d001?auto=format&fit=crop&w=1200&q=80",
    specs: { engine: "6.75L Twin-Turbo V12", power: "563 HP", topSpeed: "250 km/h", acceleration: "5.1s 0-100" },
    description: "The pinnacle of bespoke luxury motoring. Handcrafted acoustic insulation and starlight headliner."
  },
  {
    id: "2",
    name: "SF90 Stradale Spider",
    brand: "Ferrari",
    pricePerDay: 3200,
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80",
    specs: { engine: "4.0L Twin-Turbo V8 Hybrid", power: "986 HP", topSpeed: "340 km/h", acceleration: "2.5s 0-100" },
    description: "Extreme hybrid hypercar performance combined with open-top grand touring excellence."
  },
  {
    id: "3",
    name: "Revuelto V12 HPEV",
    brand: "Lamborghini",
    pricePerDay: 3500,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    specs: { engine: "6.5L Naturally Aspirated V12 + 3 e-Motors", power: "1001 HP", topSpeed: "350 km/h", acceleration: "2.5s 0-100" },
    description: "The next generation flagship featuring carbon-fiber monocoque and roaring naturally aspirated V12 symphony."
  },
  {
    id: "4",
    name: "Continental GT Speed Convertible",
    brand: "Bentley",
    pricePerDay: 1800,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    specs: { engine: "6.0L Twin-Turbo W12", power: "650 HP", topSpeed: "335 km/h", acceleration: "3.5s 0-100" },
    description: "Effortless cross-continental grand touring with diamond-in-diamond quilted leather craftsmanship."
  },
  {
    id: "5",
    name: "911 GT3 RS (992)",
    brand: "Porsche",
    pricePerDay: 2200,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    specs: { engine: "4.0L Flat-6 Boxer", power: "518 HP", topSpeed: "296 km/h", acceleration: "3.0s 0-100" },
    description: "Uncompromised race-bred aerodynamics with active DRS wing for track-grade precision on the road."
  },
  {
    id: "6",
    name: "Mercedes-Maybach S 680 4MATIC",
    brand: "Maybach",
    pricePerDay: 1950,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    specs: { engine: "6.0L Bi-Turbo V12", power: "621 HP", topSpeed: "250 km/h", acceleration: "4.4s 0-100" },
    description: "First-class executive comfort with active noise cancellation and rear calf-rest massage seating."
  }
];

export function getCarById(id) {
  return cars.find(c => c.id === String(id));
}
