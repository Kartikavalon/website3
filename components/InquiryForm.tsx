"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiry: string;
  formType: "general" | "rfq" | "technical" | "export";
}

interface InquiryFormProps {
  type?: "general" | "rfq" | "technical" | "export";
}

export default function InquiryForm({ type = "general" }: InquiryFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    formType: type,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('https://formspree.io/f/xykodrlj', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
    })
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const formTitles = {
    general: "Contact Us",
    rfq: "Request a Quote",
    technical: "Technical Consultation",
    export: "Export Inquiry",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-slate-800 border border-slate-700 p-8 rounded"
    >
      <h3 className="font-serif text-2xl font-bold text-slate-100 mb-6">
        {formTitles[type]}
      </h3>

      {/* Name */}
      <div className="mb-4">
        <label className="block font-sans text-sm font-medium text-slate-300 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-slate-100 font-sans placeholder-slate-500 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block font-sans text-sm font-medium text-slate-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-slate-100 font-sans placeholder-slate-500 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
          placeholder="your.email@company.com"
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block font-sans text-sm font-medium text-slate-300 mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-slate-100 font-sans placeholder-slate-500 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
          placeholder="+91-XXXX-XXXXXX"
        />
      </div>

      {/* Company */}
      <div className="mb-4">
        <label className="block font-sans text-sm font-medium text-slate-300 mb-2">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-slate-100 font-sans placeholder-slate-500 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
          placeholder="Your company name"
        />
      </div>

      {/* Inquiry Message */}
      <div className="mb-6">
        <label className="block font-sans text-sm font-medium text-slate-300 mb-2">
          Your Inquiry *
        </label>
        <textarea
          name="inquiry"
          value={formData.inquiry}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-slate-100 font-sans placeholder-slate-500 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-primary-600 text-slate-950 font-sans font-semibold rounded hover:bg-primary-500 transition-all duration-300 hover:shadow-glow-teal"
      >
        {submitted ? "✓ Message Sent" : "Send Inquiry"}
      </button>

      {/* WhatsApp Option */}
      <div className="mt-6 pt-6 border-t border-slate-700">
        <p className="font-sans text-sm text-slate-400 text-center mb-4">
          Or reach us via WhatsApp:
        </p>
        <a
          href="https://wa.me/918851294852?text=Hi%20Kaytherix%20Industries"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-6 py-3 border border-primary-600 text-primary-600 font-sans font-semibold rounded hover:bg-primary-600/10 transition-all duration-300 text-center"
        >
          Chat on WhatsApp
        </a>
      </div>
    </form>
  );
}
