'use client';

import { useLeadForm } from '@/lib/useLeadForm';
import StudentRegistrationFields from './StudentRegistrationFields';

export default function DemoRegistrationForm() {
  const { status, errorMessage, handleSubmit } = useLeadForm('demo-registration');

  if (status === 'success') {
    return (
      <div className="text-center py-6">
        <h2 className="text-red text-2xl font-bold mb-2">Registration Successful!</h2>
        <p className="text-[#555]">
          Thank you for registering. Our counselor will contact you shortly to schedule your demo class.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <StudentRegistrationFields />

      <div className="form-group">
        <label className="block mb-1.5 font-semibold text-sm text-dark">Preferred Date</label>
        <input type="date" name="preferredDate" className="input-field" />
      </div>
      <div className="form-group">
        <label className="block mb-1.5 font-semibold text-sm text-dark">Preferred Time</label>
        <select name="preferredSlot" className="input-field">
          <option>Morning (10 AM - 12 PM)</option>
          <option>Afternoon (2 PM - 4 PM)</option>
          <option>Evening (5 PM - 7 PM)</option>
        </select>
      </div>

      {status === 'error' && <p className="text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold py-3.5 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
