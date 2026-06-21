'use client';

import { useLeadForm } from '@/lib/useLeadForm';

export default function ContactForm() {
  const { status, errorMessage, handleSubmit } = useLeadForm('contact');

  if (status === 'success') {
    return (
      <div className="bg-light border border-black/[0.06] rounded-2xl p-9 text-center">
        <h2 className="text-red text-2xl font-bold mb-2">Message Sent!</h2>
        <p className="text-[#555]">Thank you for reaching out. We will contact you soon.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-red text-2xl font-extrabold mb-5">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <input type="text" name="name" placeholder="Your Name" required className="input-field" />
          <input type="email" name="email" placeholder="Your Email" required className="input-field" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <input type="tel" name="phone" placeholder="Phone Number" className="input-field" />
          <select name="queryType" className="input-field">
            <option value="">Select Query Type</option>
            <option>Admission Inquiry</option>
            <option>Program Information</option>
            <option>Scholarship Test</option>
            <option>Technical Support</option>
            <option>General Query</option>
          </select>
        </div>
        <textarea name="message" rows={6} placeholder="Your Message" required className="input-field resize-none" />

        {status === 'error' && <p className="text-sm text-red-600 -mt-1">{errorMessage}</p>}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold px-7 py-3.5 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all disabled:opacity-60 disabled:hover:translate-y-0 inline-flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane" />
        </button>
      </form>
      <p className="text-xs text-[#888] mt-3 flex items-center gap-1.5">
        <i className="fas fa-lock" /> Your information is safe with us. We&apos;ll respond within 24 hours.
      </p>
    </div>
  );
}
