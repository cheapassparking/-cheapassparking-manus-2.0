import { Link } from "wouter";
import { Target, Users, MapPin, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
            ABOUT <span className="text-blaze">US</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            We're on a mission to make parking affordable for everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-navy mb-6">
              THE <span className="text-blaze">STORY</span>
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                Cheap Ass Parking was born from a simple frustration: why does parking cost so damn much? Whether you're heading to a cruise, catching a flight, or just trying to park downtown — the prices are absurd.
              </p>
              <p>
                We started in Galveston, Texas, offering cruise parking at rates that made sense. But we quickly realized the problem was bigger than one port. Drivers everywhere were getting gouged — at airports, stadiums, downtown garages, and event venues.
              </p>
              <p>
                So we built something bigger: a parking marketplace that connects drivers with trusted local operators who offer fair prices. No resort fees. No surge pricing. No BS.
              </p>
              <p>
                Today, we're expanding across Texas, Florida, and beyond — with a vision to become the go-to platform for affordable parking nationwide. Same donkey. Different cities. Always cheap.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/assets/captain-donkey-placeholder.svg"
              alt="Captain Donkey - Same Donkey, Different Hats, Always Cheap"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-cream py-12 md:py-16">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-black text-navy mb-10 text-center">
            WHAT WE <span className="text-blaze">STAND FOR</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={<Target className="w-6 h-6" />}
              title="Fair Pricing"
              description="We believe parking shouldn't break the bank. Period. We negotiate the best rates and pass savings directly to you."
            />
            <ValueCard
              icon={<Users className="w-6 h-6" />}
              title="Trusted Operators"
              description="Every lot in our network is vetted for security, quality, and reliability. We partner with operators who share our values."
            />
            <ValueCard
              icon={<MapPin className="w-6 h-6" />}
              title="Everywhere You Go"
              description="From cruise ports to airports, downtown to stadiums — we're building a network that covers every parking need."
            />
            <ValueCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Always Growing"
              description="New cities, new categories, new operators. We're expanding fast to serve more drivers in more places."
            />
          </div>
        </div>
      </section>

      {/* Captain Donkey */}
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/assets/cheapass-logo.svg"
              alt="Captain Donkey Logo"
              className="w-full max-w-md mx-auto rounded-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-4xl font-black text-navy mb-6">
              MEET <span className="text-blaze">CAPTAIN DONKEY</span>
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                Captain Donkey is our brand ambassador, mascot, and spirit animal. He's here to remind you of one thing: <strong>don't pay a horse's price for parking.</strong>
              </p>
              <p>
                You'll see him throughout our site — wearing different hats for different occasions. Cowboy hat for Texas lots. Captain's hat for cruise parking. Sunglasses for beach spots. But no matter the outfit, the message is the same: smart drivers don't overpay.
              </p>
              <p className="font-display text-xl font-bold text-navy">
                Same Donkey. Different Hats. Always Cheap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blaze py-12 md:py-16">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-4">
            READY TO SAVE?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Join the thousands of drivers who've discovered that parking doesn't have to cost a fortune.
          </p>
          <Link href="/find-parking" className="btn-navy text-lg px-8 py-4">
            Find Cheap Parking Now
          </Link>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
      <div className="w-12 h-12 bg-blaze/10 rounded-lg flex items-center justify-center text-blaze mb-4">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-charcoal/70">{description}</p>
    </div>
  );
}
