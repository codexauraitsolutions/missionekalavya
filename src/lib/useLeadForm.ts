'use client';

import { useState, FormEvent } from 'react';
import { saveFormSubmission, FormType } from '@/lib/firebase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Shared submit logic for the 3 lead forms (contact, demo-registration,
 * scholarship-registration). Validates required fields, saves to Firestore,
 * and reports status so the page can show a message/spinner.
 */
export function useLeadForm(formType: FormType) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Basic required-field validation (mirrors the original site's behavior)
    const requiredFields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[required]'));
    const missing = requiredFields.filter((f) => !f.value.trim());
    if (missing.length > 0) {
      missing.forEach((f) => {
        f.style.borderColor = '#e53935';
        setTimeout(() => { f.style.borderColor = ''; }, 3000);
      });
      setErrorMessage('Please fill all required fields.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const data: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      data[key] = String(value);
    });

    try {
      await saveFormSubmission(formType, data);
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('Error saving form submission:', err);
      setErrorMessage(
        'Something went wrong while submitting. Please check your internet connection and try again, or contact us directly.'
      );
      setStatus('error');
    }
  }

  return { status, errorMessage, handleSubmit };
}
