'use client';

import { useLeadForm } from '@/lib/useLeadForm';
import StudentRegistrationFields from './StudentRegistrationFields';

export default function ScholarshipRegistrationForm() {
  const { status, errorMessage, handleSubmit } = useLeadForm('scholarship-registration');

  if (status === 'success') {
    return (
      <div className="text-center py-6">
        <h2 className="text-red text-2xl font-bold mb-2">Application Submitted!</h2>
        <p className="text-[#555]">
          Thank you for applying. We will share your scholarship test details via email and SMS shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <StudentRegistrationFields />

      <div className="form-group">
        <label className="block mb-1.5 font-semibold text-sm text-dark">
          Last Exam Percentage (Optional)
        </label>
        <input type="text" name="lastExamPercentage" placeholder="e.g., 85%" className="input-field" />
      </div>

      {status === 'error' && <p className="text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-gradient-to-br from-orange to-[#e08a00] text-white font-bold py-3.5 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === 'submitting' ? 'Submitting...' : 'Register for Scholarship Test'}
      </button>
    </form>
  );
}
