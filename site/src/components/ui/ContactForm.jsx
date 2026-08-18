import { useState } from "react";
import { business } from "../../data/business";
import { services } from "../../data/services";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicle: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp message
    const messageLines = [
      `Name: ${formData.name}`,
      formData.email && `Email: ${formData.email}`,
      formData.phone && `Phone: ${formData.phone}`,
      formData.service && `Service: ${formData.service}`,
      formData.vehicle && `Vehicle: ${formData.vehicle}`,
      formData.message && `Message: ${formData.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappMessage = encodeURIComponent(messageLines);
    const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      vehicle: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-charcoal p-8 rounded-lg border border-line space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-display uppercase tracking-[0.15em] text-offwhite mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-graphite border border-line text-offwhite placeholder-ash focus:outline-none focus:border-red transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-display uppercase tracking-[0.15em] text-offwhite mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-graphite border border-line text-offwhite placeholder-ash focus:outline-none focus:border-red transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-display uppercase tracking-[0.15em] text-offwhite mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-graphite border border-line text-offwhite placeholder-ash focus:outline-none focus:border-red transition-colors"
            placeholder="+27 82 404 7200"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-display uppercase tracking-[0.15em] text-offwhite mb-2">
          Service Type *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-graphite border border-line text-offwhite focus:outline-none focus:border-red transition-colors cursor-pointer"
        >
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-display uppercase tracking-[0.15em] text-offwhite mb-2">
          Vehicle Details
        </label>
        <input
          type="text"
          id="vehicle"
          name="vehicle"
          value={formData.vehicle}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-graphite border border-line text-offwhite placeholder-ash focus:outline-none focus:border-red transition-colors"
          placeholder="e.g. 2020 BMW M3"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-display uppercase tracking-[0.15em] text-offwhite mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 bg-graphite border border-line text-offwhite placeholder-ash focus:outline-none focus:border-red transition-colors resize-none"
          placeholder="Tell us more about what you need..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red hover:bg-red-dim text-offwhite font-display uppercase tracking-[0.15em] py-3 rounded transition-colors"
      >
        Send via WhatsApp
      </button>

      <p className="text-xs text-ash text-center">
        * Required fields. This will open WhatsApp with your information.
      </p>
    </form>
  );
}
