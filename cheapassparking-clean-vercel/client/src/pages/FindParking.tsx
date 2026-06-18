import { useState, useMemo, useEffect } from "react";
import { Link, useSearch } from "wouter";
import { Search, MapPin, Filter, X } from "lucide-react";
import { locations, categories, cities, states } from "@/lib/data";

export default function FindParking() {
  const searchParams = useSearch();
  const urlParams = new URLSearchParams(searchParams);
  const initialCity = urlParams.get("city") || "";
  const initialCategory = urlParams.get("category") || "";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const city = params.get("city") || "";
    const cat = params.get("category") || "";
    if (city) setSelectedCity(city);
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredLocations = useMemo(() => {
    return locations.filter(loc => {
      const matchesSearch = !searchQuery || 
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.address.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || loc.categoryId === selectedCategory;
      const matchesCity = !selectedCity || loc.cityId === selectedCity;
      return matchesSearch && matchesCategory && matchesCity;
    });
  }, [searchQuery, selectedCategory, selectedCity]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedCity("");
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
            FIND <span className="text-blaze">PARKING</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Search by location, city, or parking type. Your cheap spot is waiting.
          </p>

          {/* Search Bar */}
          <div className="mt-8 bg-white rounded-lg shadow-xl p-2 flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center gap-2 px-4">
              <Search className="w-5 h-5 text-charcoal/40" />
              <input
                type="text"
                placeholder="Search by name, address, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 text-charcoal placeholder:text-charcoal/40 outline-none"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-charcoal/40 hover:text-charcoal">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden btn-navy flex items-center justify-center gap-2"
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-bold text-navy">Filters</h3>
                {(selectedCategory || selectedCity) && (
                  <button onClick={clearFilters} className="text-xs text-blaze hover:underline">
                    Clear all
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-5">
                <label className="text-sm font-semibold text-charcoal block mb-2">Parking Type</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-charcoal"
                >
                  <option value="">All Types</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              {/* City Filter */}
              <div className="mb-5">
                <label className="text-sm font-semibold text-charcoal block mb-2">City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-charcoal"
                >
                  <option value="">All Cities</option>
                  {cities.map(city => {
                    const state = states.find(s => s.id === city.stateId);
                    return (
                      <option key={city.id} value={city.id}>
                        {city.name}, {state?.abbreviation}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Results count */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-charcoal/60">
                  <span className="font-bold text-navy">{filteredLocations.length}</span> locations found
                </p>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1">
            {filteredLocations.length === 0 ? (
              <div className="text-center py-16">
                <MapPin className="w-12 h-12 text-charcoal/20 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-navy mb-2">No Locations Found</h3>
                <p className="text-charcoal/60 mb-4">Try adjusting your search or filters.</p>
                <button onClick={clearFilters} className="btn-blaze">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredLocations.map(loc => {
                  const category = categories.find(c => c.id === loc.categoryId);
                  const city = cities.find(c => c.id === loc.cityId);
                  const state = states.find(s => s.id === loc.stateId);
                  return (
                    <Link
                      key={loc.id}
                      href={`/locations/${category?.slug}/${loc.slug}`}
                      className="card-lift group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                    >
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-xs text-blaze font-semibold uppercase tracking-wide">
                              {category?.name}
                            </span>
                            <h3 className="font-display text-xl font-bold text-navy group-hover:text-blaze transition-colors mt-1">
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
                          {loc.features.slice(0, 4).map(f => (
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
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
