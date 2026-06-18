import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { categories, states, cities, locations } from "@/lib/data";

export default function Locations() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
            ALL <span className="text-blaze">LOCATIONS</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Browse by parking type or explore our growing network of cities.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container py-12 md:py-16">
        <h2 className="font-display text-3xl md:text-4xl font-black text-navy mb-8">
          PARKING <span className="text-blaze">CATEGORIES</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(cat => {
            const count = locations.filter(l => l.categoryId === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/locations/${cat.slug}`}
                className="card-lift group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                {cat.image && (
                  <div className="h-32 overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-navy group-hover:text-blaze transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-charcoal/60 mt-1">{cat.description}</p>
                  {count > 0 && (
                    <p className="text-xs text-blaze font-semibold mt-3">{count} location{count !== 1 ? 's' : ''} available</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Cities by State */}
      <section className="bg-cream py-12 md:py-16">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-black text-navy mb-8">
            BROWSE BY <span className="text-blaze">CITY</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {states.map(state => {
              const stateCities = cities.filter(c => c.stateId === state.id);
              return (
                <div key={state.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <h3 className="font-display text-lg font-bold text-navy mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blaze" />
                    {state.name}
                  </h3>
                  <ul className="space-y-2">
                    {stateCities.map(city => {
                      const cityCount = locations.filter(l => l.cityId === city.id).length;
                      return (
                        <li key={city.id}>
                          <Link
                            href={`/find-parking?city=${city.id}`}
                            className="text-sm text-charcoal/70 hover:text-blaze transition-colors flex justify-between"
                          >
                            <span>{city.name}</span>
                            {cityCount > 0 && <span className="text-xs text-charcoal/40">{cityCount}</span>}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
