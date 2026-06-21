// Shared fields used by both Demo Registration and Scholarship Registration forms.
// Editing this once updates both forms - same "single source of truth" principle as the navbar.

export default function StudentRegistrationFields() {
  return (
    <>
      <div className="form-group">
        <label className="block mb-1.5 font-semibold text-sm text-dark">Student&apos;s Full Name *</label>
        <input type="text" name="studentName" placeholder="Enter student's name" required className="input-field" />
      </div>
      <div className="form-group">
        <label className="block mb-1.5 font-semibold text-sm text-dark">Parent&apos;s Name *</label>
        <input type="text" name="parentName" placeholder="Enter parent's name" required className="input-field" />
      </div>
      <div className="form-group">
        <label className="block mb-1.5 font-semibold text-sm text-dark">Current Class *</label>
        <select name="studentClass" required className="input-field">
          <option value="">Select Class</option>
          {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="block mb-1.5 font-semibold text-sm text-dark">School Name *</label>
        <input type="text" name="schoolName" placeholder="Enter school name" required className="input-field" />
      </div>
      <div className="form-group">
        <label className="block mb-1.5 font-semibold text-sm text-dark">City *</label>
        <input type="text" name="city" placeholder="Enter city" required className="input-field" />
      </div>
      <div className="form-group">
        <label className="block mb-1.5 font-semibold text-sm text-dark">Mobile Number *</label>
        <input type="tel" name="phone" placeholder="10-digit mobile number" required className="input-field" />
      </div>
      <div className="form-group">
        <label className="block mb-1.5 font-semibold text-sm text-dark">Email ID *</label>
        <input type="email" name="email" placeholder="Enter email" required className="input-field" />
      </div>
    </>
  );
}
