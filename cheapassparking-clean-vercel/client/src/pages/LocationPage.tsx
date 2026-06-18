import { Link, useParams } from "wouter";
import { MapPin, Shield, Clock, Car, CheckCircle } from "lucide-react";
import { getLocationBySlug, getCategoryBySlug, cities, states, categories } from "@/lib/data";

export default function LocationPage() {
  const params = useParams<{ categorySlug: string; locationSlug: string }>();
  const location = getLocationBySlug(params.locationSlug || "");
  const category = getCategoryBySlug(params.categorySlug || "");

  if (!location || !category) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-4xl font-black text-navy mb-4">Location Not Found</h1>
        <Link href="/find-parking" className="btn-blaze">Find Parking</Link>
      </div>
    );
  }

  const city = cities.find(c => c.id === location.cityId);
  const state = states.find(s => s.id === location.stateId);

  return (
    <div>
      {/* Breadcrumb & Header */}
      <section className="bg-navy py-8 md:py-12">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-white">Locations</Link>
            <span>/</span>
            <Link href={`/locations/${category.slug}`} className="hover:text-white">{category.name}</Link>
            <span>/</span>
            <span className="text-white">{location.name}</span>
          </nav>
          <h1 className="font-display text-3xl md:text-5xl font-black text-white mb-2">
            {location.name}
          </h1>
          <p className="text-white/70 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blaze" />
            {location.address}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image */}
            {category.image && (
              <div className="rounded-xl overflow-hidden mb-8 h-64 md:h-80">
                <img src={category.image} alt={location.name} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Description */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-navy mb-3">About This Location</h2>
              <p className="text-charcoal/80 leading-relaxed">{location.description}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-navy mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {location.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3 bg-cream rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-blaze shrink-0" />
                    <span className="text-charcoal font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Info */}
            <div className="bg-cream rounded-xl p-6">
              <h2 className="font-display text-2xl font-bold text-navy mb-4">Location Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blaze" />
                  <div>
                    <p className="text-sm text-charcoal/60">Address</p>
                    <p className="text-charcoal font-medium">{location.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-blaze" />
                  <div>
                    <p className="text-sm text-charcoal/60">Parking Type</p>
                    <p className="text-charcoal font-medium">{category.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blaze" />
                  <div>
                    <p className="text-sm text-charcoal/60">City</p>
                    <p className="text-charcoal font-medium">{city?.name}, {state?.abbreviation}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blaze" />
                  <div>
                    <p className="text-sm text-charcoal/60">Access</p>
                    <p className="text-charcoal font-medium">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 sticky top-24">
              {/* Price */}
              <div className="text-center mb-6">
                <div className="inline-flex items-baseline gap-1">
                  <span className="font-display text-5xl font-black text-blaze">${location.pricePerDay}</span>
                  <span className="text-charcoal/60 text-lg">/day</span>
                </div>
                <p className="text-sm text-charcoal/60 mt-1">Starting price</p>
              </div>

              {/* Trust badges */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-charcoal/70">
                  <Shield className="w-4 h-4 text-blaze" />
                  <span>Secure & monitored</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal/70">
                  <CheckCircle className="w-4 h-4 text-blaze" />
                  <span>Guaranteed spot</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal/70">
                  <Clock className="w-4 h-4 text-blaze" />
                  <span>Free cancellation (24hr)</span>
                </div>
              </div>

              {/* CTA */}
              <Link href="/reserve" className="btn-blaze w-full text-center block text-lg py-4">
                Reserve This Spot
              </Link>
              <p className="text-xs text-charcoal/50 text-center mt-3">
                No payment required until check-in
              </p>

              {/* Captain Donkey tip */}
              <div className="mt-6 bg-cream rounded-lg p-4 border border-blaze/20">
                <div className="flex items-start gap-3">
                  <img
                    src="/assets/cheapass-logo.svg"
                    alt="Captain Donkey"
                    className="w-10 h-10 rounded-full shrink-0"
                  />
                  <div>
                    <p className="text-sm font-bold text-navy">Captain Donkey says:</p>
                    <p className="text-xs text-charcoal/70 mt-1">
                      "Book early and save! Prices go up closer to your date. Lock it in now."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
