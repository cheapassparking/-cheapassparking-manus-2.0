import { Link } from "wouter";
import { MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-20 h-20 bg-blaze/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-10 h-10 text-blaze" />
        </div>
        <h1 className="font-display text-6xl md:text-8xl font-black text-navy mb-2">404</h1>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-4">
          Wrong Turn, Partner
        </h2>
        <p className="text-charcoal/60 mb-8 max-w-md mx-auto">
          Looks like this parking spot doesn't exist. Captain Donkey says head back and try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-navy">
            Back to Home
          </Link>
          <Link href="/find-parking" className="btn-blaze">
            Find Parking
          </Link>
        </div>
      </div>
    </div>
  );
}
