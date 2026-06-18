import { useState } from "react";
import { Link } from "wouter";
import { Calendar, MapPin, Car, CheckCircle, ArrowRight } from "lucide-react";
import { categories, cities, states, locations } from "@/lib/data";
import { toast } from "sonner";

export default function Reserve() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    city: "",
    location: "",
    startDate: "",
    endDate: "",
    name: "",
    email: "",
    phone: "",
    vehicleType: "standard",
  });

  const availableLocations = locations.filter(l => {
    const matchCategory = !formData.category || l.categoryId === formData.category;
    const matchCity = !formData.city || l.cityId === formData.city;
    return matchCategory && matchCity;
  });

  const selectedLocation = locations.find(l => l.id === formData.location);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request submitted! Check your email for confirmation details.");
    setStep(4);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
            RESERVE <span className="text-blaze">PARKING</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Lock in your spot in under 60 seconds. No surprises. No BS.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-cream border-b border-gray-100">
        <div className="container py-4">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <StepIndicator number={1} label="Select" active={step >= 1} />
            <ArrowRight className="w-4 h-4 text-charcoal/30" />
            <StepIndicator number={2} label="Details" active={step >= 2} />
            <ArrowRight className="w-4 h-4 text-charcoal/30" />
            <StepIndicator number={3} label="Confirm" active={step >= 3} />
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="container py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          {step === 1 && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">
                Where Do You Need Parking?
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-semibold text-charcoal block mb-1.5">Parking Type</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value, location: "" })}
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                  >
                    <option value="">All Types</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-charcoal block mb-1.5">City</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value, location: "" })}
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                  >
                    <option value="">All Cities</option>
                    {cities.map(city => {
                      const state = states.find(s => s.id === city.stateId);
                      return (
                        <option key={city.id} value={city.id}>{city.name}, {state?.abbreviation}</option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-charcoal block mb-1.5">Location</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                  >
                    <option value="">Select a location</option>
                    {availableLocations.map(loc => (
                      <option key={loc.id} value={loc.id}>{loc.name} — ${loc.pricePerDay}/day</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-charcoal block mb-1.5">Start Date</label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-charcoal block mb-1.5">End Date</label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.location || !formData.startDate || !formData.endDate}
                  className="btn-blaze w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">
                Your Information
              </h2>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-charcoal block mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-charcoal block mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-charcoal block mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-charcoal block mb-1.5">Vehicle Type</label>
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                    >
                      <option value="standard">Standard Vehicle</option>
                      <option value="suv">SUV / Truck</option>
                      <option value="oversized">Oversized / RV</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="btn-navy flex-1">Back</button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!formData.name || !formData.email}
                    className="btn-blaze flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Review Reservation
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && selectedLocation && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">
                Confirm Your Reservation
              </h2>
              
              <div className="bg-cream rounded-lg p-5 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blaze" />
                    <div>
                      <p className="text-xs text-charcoal/60">Location</p>
                      <p className="font-semibold text-navy">{selectedLocation.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blaze" />
                    <div>
                      <p className="text-xs text-charcoal/60">Dates</p>
                      <p className="font-semibold text-navy">{formData.startDate} → {formData.endDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-blaze" />
                    <div>
                      <p className="text-xs text-charcoal/60">Vehicle</p>
                      <p className="font-semibold text-navy capitalize">{formData.vehicleType}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blaze" />
                    <div>
                      <p className="text-xs text-charcoal/60">Rate</p>
                      <p className="font-semibold text-navy">${selectedLocation.pricePerDay}/day</p>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className="btn-navy flex-1">Back</button>
                <button type="submit" className="btn-blaze flex-1">Confirm Reservation</button>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="font-display text-3xl font-bold text-navy mb-3">Reservation Submitted!</h2>
              <p className="text-charcoal/70 mb-6 max-w-md mx-auto">
                Check your email for confirmation details. Captain Donkey is proud of you for not overpaying.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/" className="btn-navy">Back to Home</Link>
                <Link href="/find-parking" className="btn-blaze">Find More Parking</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function StepIndicator({ number, label, active }: { number: number; label: string; active: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
        active ? 'bg-blaze text-white' : 'bg-gray-200 text-charcoal/40'
      }`}>
        {number}
      </div>
      <span className={`text-sm font-medium hidden sm:inline ${active ? 'text-navy' : 'text-charcoal/40'}`}>
        {label}
      </span>
    </div>
  );
}
