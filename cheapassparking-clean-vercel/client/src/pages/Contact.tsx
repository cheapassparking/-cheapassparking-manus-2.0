import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-12 md:py-16">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
            CONTACT <span className="text-blaze">US</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Questions, partnerships, or just want to say hi? We're all ears (donkey ears, that is).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl font-bold text-navy mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blaze/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blaze" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Email</h3>
                  <p className="text-charcoal/70 text-sm">info@cheapassparking.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blaze/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blaze" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Phone</h3>
                  <p className="text-charcoal/70 text-sm">(409) 555-PARK</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blaze/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blaze" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Location</h3>
                  <p className="text-charcoal/70 text-sm">Galveston, Texas</p>
                </div>
              </div>
            </div>

            {/* Captain Donkey */}
            <div className="mt-8 bg-cream rounded-xl p-5 border border-blaze/20">
              <div className="flex items-start gap-3">
                <img
                  src="/assets/cheapass-logo.svg"
                  alt="Captain Donkey"
                  className="w-12 h-12 rounded-full shrink-0"
                />
                <div>
                  <p className="font-bold text-navy text-sm">Captain Donkey says:</p>
                  <p className="text-xs text-charcoal/70 mt-1">
                    "Whether you're a driver looking for a deal or an operator looking to fill spots — let's talk. I don't bite (much)."
                  </p>
                </div>
              </div>
            </div>

            {/* Business inquiries */}
            <div className="mt-6 p-5 bg-navy/5 rounded-xl">
              <h3 className="font-display text-lg font-bold text-navy mb-2">For Business</h3>
              <p className="text-sm text-charcoal/70 mb-3">
                Interested in listing your parking lot, becoming an operator partner, or franchise opportunities?
              </p>
              <p className="text-sm font-semibold text-blaze">partners@cheapassparking.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-charcoal block mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal placeholder:text-charcoal/40 focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-charcoal block mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal placeholder:text-charcoal/40 focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-charcoal block mb-1.5">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal focus:border-blaze focus:ring-1 focus:ring-blaze outline-none"
                  >
                    <option value="">Select a topic</option>
                    <option value="reservation">Reservation Question</option>
                    <option value="pricing">Pricing Inquiry</option>
                    <option value="partnership">Partnership / Operator</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-charcoal block mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-charcoal placeholder:text-charcoal/40 focus:border-blaze focus:ring-1 focus:ring-blaze outline-none resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button type="submit" className="btn-blaze flex items-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
