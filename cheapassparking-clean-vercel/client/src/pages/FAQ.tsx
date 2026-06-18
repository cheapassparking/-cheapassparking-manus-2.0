import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Reservations",
    questions: [
      {
        q: "How do I reserve a parking spot?",
        a: "Simply search for your destination, select a location, choose your dates, and click 'Reserve.' You'll receive an instant confirmation email with all the details you need."
      },
      {
        q: "Can I cancel my reservation?",
        a: "Yes! We offer free cancellation up to 24 hours before your scheduled arrival. After that, cancellation policies vary by location."
      },
      {
        q: "Do I need to pay upfront?",
        a: "Most locations require payment at the time of booking to guarantee your spot. Some locations offer pay-on-arrival options."
      },
      {
        q: "Can I modify my reservation dates?",
        a: "Yes, you can modify your reservation dates subject to availability. Contact us or use your confirmation email to make changes."
      },
    ]
  },
  {
    category: "Parking",
    questions: [
      {
        q: "Are the parking lots secure?",
        a: "Absolutely. Every lot in our network is vetted for security. Most feature 24/7 surveillance, lighting, fencing, and on-site staff."
      },
      {
        q: "Do you offer shuttle service?",
        a: "Many of our cruise and airport parking locations offer complimentary shuttle service to terminals. Check the individual location page for details."
      },
      {
        q: "Can I park an oversized vehicle or RV?",
        a: "Yes! We have dedicated RV and oversized vehicle parking at select locations. Look for our RV Parking category or filter by vehicle type."
      },
      {
        q: "What happens if I arrive early or leave late?",
        a: "Early arrivals are generally accommodated at no extra charge. Late departures may incur additional daily charges at the posted rate."
      },
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        q: "How are your prices so low?",
        a: "We negotiate bulk rates with parking operators and pass the savings to you. No middleman markup, no resort fees, no surprises."
      },
      {
        q: "Are there any hidden fees?",
        a: "Never. The price you see is the price you pay. No booking fees, no service charges, no surprise costs at the lot."
      },
      {
        q: "Do prices change based on demand?",
        a: "Prices may vary by season and demand, which is why we recommend booking early to lock in the best rate."
      },
    ]
  },
  {
    category: "About Us",
    questions: [
      {
        q: "What is Cheap Ass Parking?",
        a: "Cheap Ass Parking is a parking marketplace and operator that connects drivers with affordable, secure parking across multiple cities and categories — from cruise ports to airports to downtown districts."
      },
      {
        q: "Who is Captain Donkey?",
        a: "Captain Donkey is our brand mascot and ambassador. He's here to remind you: don't pay a horse's price for parking! Same donkey, different hats, always cheap."
      },
      {
        q: "What cities do you serve?",
        a: "We're currently serving locations in Texas (Galveston, Houston, Dallas) and Florida (Miami), with rapid expansion planned across the US."
      },
    ]
  },
];

export default function FAQ() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
            FREQUENTLY ASKED <span className="text-blaze">QUESTIONS</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Got questions? Captain Donkey has answers. If you don't find what you need, reach out.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-10">
          {faqs.map(section => (
            <div key={section.category}>
              <h2 className="font-display text-2xl font-bold text-navy mb-4 border-b border-gray-100 pb-2">
                {section.category}
              </h2>
              <div className="space-y-2">
                {section.questions.map((faq, i) => (
                  <FAQItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 bg-cream rounded-xl p-8 text-center">
          <h3 className="font-display text-2xl font-bold text-navy mb-2">Still Have Questions?</h3>
          <p className="text-charcoal/70 mb-4">Our team is ready to help. Reach out anytime.</p>
          <Link href="/contact" className="btn-blaze">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-cream/50 transition-colors"
      >
        <span className="font-semibold text-charcoal pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-charcoal/40 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 text-charcoal/70 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
          {answer}
        </div>
      )}
    </div>
  );
}
