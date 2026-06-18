import { Link } from "wouter";
import { Search, Shield, MapPin, DollarSign, Clock, Star } from "lucide-react";
import { categories, locations } from "@/lib/data";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483694095/UzhBvPoiRHUjo69tRbdKC6/hero-parking-cityscape-7UsL7n2oFPcxxsdAWBSABz.webp"
            alt="Parking cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/80 to-navy/50" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            {/* Mascot badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <img
                src="/assets/cheapass-logo.svg"
                alt="Captain Donkey"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-white/90 text-sm font-medium">Captain Donkey says:</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-4">
              DON'T PAY A<br />
              <span className="text-blaze">HORSE'S PRICE</span><br />
              FOR PARKING.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              Find parking anywhere. Reserve online. Save up to 50% at hundreds of locations nationwide.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-2xl p-2 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2 px-4">
                <Search className="w-5 h-5 text-charcoal/40" />
                <input
                  type="text"
                  placeholder="Where do you need parking?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 text-charcoal placeholder:text-charcoal/40 outline-none font-body"
                />
              </div>
              <Link href="/find-parking" className="btn-blaze text-center whitespace-nowrap">
                Find Parking
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="flex items-center gap-1.5 text-white/70 text-sm">
                <Shield className="w-4 h-4 text-blaze" /> Secure Parking
              </span>
              <span className="flex items-center gap-1.5 text-white/70 text-sm">
                <DollarSign className="w-4 h-4 text-blaze" /> Lowest Prices
              </span>
              <span className="flex items-center gap-1.5 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-blaze" /> Multiple Cities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="angle-top bg-cream relative z-10">
        <div className="container py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black text-navy mb-3">
              FIND YOUR <span className="text-blaze">PARKING TYPE</span>
            </h2>
            <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
              From cruise terminals to concert venues — we've got a cheap spot for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.slice(0, 8).map((cat, i) => (
              <Link
                key={cat.id}
                href={`/locations/${cat.slug}`}
                className="card-lift group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-blaze/30"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blaze/10 transition-colors">
                  <CategoryIcon name={cat.icon} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy group-hover:text-blaze transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-charcoal/60 mt-1 line-clamp-2">{cat.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/locations" className="btn-navy inline-flex items-center gap-2">
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-navy">
                FEATURED <span className="text-blaze">LOCATIONS</span>
              </h2>
              <p className="text-charcoal/70 mt-2">Popular spots our customers love.</p>
            </div>
            <Link href="/find-parking" className="text-blaze font-semibold hover:underline">
              See all locations →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.slice(0, 6).map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="angle-top bg-navy text-white relative z-10">
        <div className="container py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-black">
              HOW IT <span className="text-blaze">WORKS</span>
            </h2>
            <p className="text-white/70 mt-2 text-lg">Three steps to cheap parking. It's that simple.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StepCard number="1" title="Search" description="Enter your destination, date, or parking type." />
            <StepCard number="2" title="Compare" description="Browse locations, prices, and features side by side." />
            <StepCard number="3" title="Reserve" description="Lock in your spot online. Show up and park." />
          </div>

          <div className="text-center mt-12">
            <Link href="/reserve" className="btn-blaze text-lg px-8 py-4">
              Reserve Your Spot Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-navy mb-6">
                WHY DRIVERS <span className="text-blaze">CHOOSE US</span>
              </h2>
              <div className="space-y-5">
                <FeatureRow icon={<DollarSign className="w-5 h-5" />} title="Unbeatable Prices" description="We negotiate bulk rates so you don't have to. Save up to 50% vs. drive-up prices." />
                <FeatureRow icon={<Shield className="w-5 h-5" />} title="Trusted Local Operators" description="Every lot is vetted. Secure, well-lit, and professionally managed." />
                <FeatureRow icon={<MapPin className="w-5 h-5" />} title="Multiple Cities" description="From Galveston to Miami, we're expanding to serve drivers everywhere." />
                <FeatureRow icon={<Clock className="w-5 h-5" />} title="Instant Confirmation" description="Book in seconds, get confirmed instantly. No waiting, no uncertainty." />
                <FeatureRow icon={<Star className="w-5 h-5" />} title="Free Cancellation" description="Plans change. Cancel for free up to 24 hours before your reservation." />
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/captain-donkey-placeholder.svg"
                alt="Captain Donkey characters"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-blaze text-white rounded-lg px-4 py-2 font-display font-bold text-lg shadow-lg">
                Same Donkey. Always Cheap.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blaze py-12 md:py-16">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-4">
            READY TO SAVE ON PARKING?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of smart drivers who refuse to overpay. Find your spot today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/find-parking" className="btn-navy text-lg px-8 py-4">
              Find Parking Near You
            </Link>
            <Link href="/reserve" className="bg-white text-navy font-display font-bold uppercase tracking-wide px-8 py-4 rounded-md hover:bg-cream transition-colors text-lg">
              Reserve Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function LocationCard({ location }: { location: typeof locations[0] }) {
  const category = categories.find(c => c.id === location.categoryId);
  return (
    <Link
      href={`/locations/${category?.slug}/${location.slug}`}
      className="card-lift group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
    >
      <div className="h-40 bg-navy/5 relative overflow-hidden">
        {category?.image ? (
          <img src={category.image} alt={location.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy/10 to-blaze/10">
            <MapPin className="w-8 h-8 text-navy/30" />
          </div>
        )}
        <div className="absolute top-3 right-3 bg-blaze text-white font-display font-bold text-sm px-2 py-1 rounded">
          ${location.pricePerDay}/day
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-blaze font-semibold uppercase tracking-wide mb-1">
          {category?.name}
        </div>
        <h3 className="font-display text-lg font-bold text-navy group-hover:text-blaze transition-colors">
          {location.name}
        </h3>
        <p className="text-sm text-charcoal/60 mt-1">{location.address}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {location.features.slice(0, 3).map(f => (
            <span key={f} className="text-xs bg-navy/5 text-navy/70 px-2 py-0.5 rounded">
              {f}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blaze rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="font-display text-3xl font-black text-white">{number}</span>
      </div>
      <h3 className="font-display text-2xl font-bold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
}

function FeatureRow({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-blaze/10 rounded-lg flex items-center justify-center shrink-0 text-blaze">
        {icon}
      </div>
      <div>
        <h4 className="font-display text-lg font-bold text-navy">{title}</h4>
        <p className="text-sm text-charcoal/70">{description}</p>
      </div>
    </div>
  );
}

function CategoryIcon({ name }: { name: string }) {
  const iconClass = "w-6 h-6 text-navy group-hover:text-blaze transition-colors";
  // Simple icon mapping using lucide
  switch (name) {
    case "Ship": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 1v4"/></svg>;
    case "Building2": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>;
    case "Ticket": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>;
    case "Calendar": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>;
    case "Plane": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>;
    case "Hotel": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M9 6h.01"/><path d="M15 6h.01"/><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M9 14h.01"/><path d="M15 14h.01"/><path d="M9 18h6"/></svg>;
    case "CarFront": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>;
    case "Truck": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18h2"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>;
    case "Star": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
    case "Train": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h0"/><path d="M16 15h0"/></svg>;
    case "Clock": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case "Sun": return <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>;
    default: return <MapPin className={iconClass} />;
  }
}
