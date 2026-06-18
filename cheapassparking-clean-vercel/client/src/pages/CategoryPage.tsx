import { Link, useParams } from "wouter";
import { MapPin } from "lucide-react";
import { getCategoryBySlug, getLocationsByCategory, categories, cities, states } from "@/lib/data";

export default function CategoryPage() {
  const params = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(params.categorySlug || "");

  if (!category) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-4xl font-black text-navy mb-4">Category Not Found</h1>
        <Link href="/locations" className="btn-blaze">Browse All Locations</Link>
      </div>
    );
  }

  const categoryLocations = getLocationsByCategory(category.id);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {category.image ? (
          <>
            <div className="absolute inset-0">
              <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/80 to-navy/50" />
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-navy" />
        )}
        <div className="container relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-white">Locations</Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
            {category.name.toUpperCase()}
          </h1>
          <p className="text-white/80 text-lg max-w-xl">{category.description}</p>
        </div>
      </section>

      {/* Locations */}
      <section className="container py-12 md:py-16">
        {categoryLocations.length === 0 ? (
          <div className="text-center py-16">
            <MapPin className="w-12 h-12 text-charcoal/20 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-navy mb-2">Coming Soon</h3>
            <p className="text-charcoal/60 mb-4">
              We're adding {category.name.toLowerCase()} locations soon. Check back or contact us for updates.
            </p>
            <Link href="/contact" className="btn-blaze">Get Notified</Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-black text-navy">
                {categoryLocations.length} Location{categoryLocations.length !== 1 ? 's' : ''} Available
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryLocations.map(loc => {
                const city = cities.find(c => c.id === loc.cityId);
                const state = states.find(s => s.id === loc.stateId);
                return (
                  <Link
                    key={loc.id}
                    href={`/locations/${category.slug}/${loc.slug}`}
                    className="card-lift group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl font-bold text-navy group-hover:text-blaze transition-colors">
                            {loc.name}
                          </h3>
                          <p className="text-sm text-charcoal/60 mt-1 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {city?.name}, {state?.abbreviation}
                          </p>
                        </div>
                        <div className="bg-blaze text-white font-display font-bold text-lg px-3 py-1 rounded shrink-0">
                          ${loc.pricePerDay}<span className="text-xs font-normal">/day</span>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal/70 mt-3">{loc.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {loc.features.map(f => (
                          <span key={f} className="text-xs bg-navy/5 text-navy/70 px-2 py-0.5 rounded">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </section>

      {/* Other Categories */}
      <section className="bg-cream py-12 md:py-16">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-black text-navy mb-6">
            OTHER <span className="text-blaze">PARKING TYPES</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {categories.filter(c => c.id !== category.id).slice(0, 6).map(cat => (
              <Link
                key={cat.id}
                href={`/locations/${cat.slug}`}
                className="bg-white rounded-lg p-3 text-center border border-gray-100 hover:border-blaze/30 transition-colors"
              >
                <span className="font-display text-sm font-bold text-navy">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
