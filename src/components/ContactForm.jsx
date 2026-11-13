import { useEffect, useState } from 'react';
import { submitContactEnquiry, validateContactForm } from '../services/contactService';
import PhosphorIcon from './PhosphorIcon';

export default function ContactForm({ initialSubject = '' }) {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    subject: initialSubject,
    message: '',
    website: '', // Honeypot
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (initialSubject) {
      setValues((prev) => ({
        ...prev,
        subject: initialSubject,
      }));
    }
  }, [initialSubject]);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus(null);

    const validationErrors = validateContactForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitContactEnquiry(values);
      if (result.ok) {
        setStatus({
          type: 'success',
          message: result.message,
        });
        setValues({
          fullName: '',
          email: '',
          subject: '',
          message: '',
          website: '',
        });
        setErrors({});
      } else {
        setStatus({
          type: 'danger',
          message: result.error,
        });
      }
    } catch {
      setStatus({
        type: 'danger',
        message: 'An unexpected error occurred while sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {status && (
        <div
          className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} mb-5`}
          role="alert"
        >
          <div className="d-flex align-items-start gap-2">
            <PhosphorIcon
              name={status.type === 'success' ? 'check-circle' : 'alert-circle'}
              size={18}
              weight="regular"
              className="mt-1 flex-shrink-0"
            />
            <div>{status.message}</div>
          </div>
        </div>
      )}

      {/* Honeypot field for basic spam filtering */}
      <div className="honeypot-field" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="form-label fw-medium" htmlFor="contact-fullName">
          Full Name <span className="text-danger">*</span>
        </label>
        <input
          id="contact-fullName"
          name="fullName"
          type="text"
          className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
          placeholder="Your full name"
          value={values.fullName}
          onChange={handleChange}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? 'error-fullName' : undefined}
          disabled={isSubmitting}
          required
        />
        {errors.fullName && (
          <div id="error-fullName" className="invalid-feedback">
            {errors.fullName}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="form-label fw-medium" htmlFor="contact-email">
          Email Address <span className="text-danger">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'error-email' : undefined}
          disabled={isSubmitting}
          required
        />
        {errors.email && (
          <div id="error-email" className="invalid-feedback">
            {errors.email}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="form-label fw-medium" htmlFor="contact-subject">
          Subject <span className="text-danger">*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
          placeholder="How can we help?"
          value={values.subject}
          onChange={handleChange}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'error-subject' : undefined}
          disabled={isSubmitting}
          required
        />
        {errors.subject && (
          <div id="error-subject" className="invalid-feedback">
            {errors.subject}
          </div>
        )}
      </div>

      <div className="mb-5">
        <label className="form-label fw-medium" htmlFor="contact-message">
          Message <span className="text-danger">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          placeholder="Tell us about your enquiry or project requirements..."
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'error-message' : undefined}
          disabled={isSubmitting}
          required
        />
        {errors.message && (
          <div id="error-message" className="invalid-feedback">
            {errors.message}
          </div>
        )}
      </div>

      <button type="submit" className="btn btn-dark btn-lg w-100 w-sm-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            />
            Sending Enquiry...
          </>
        ) : (
          <span className="d-inline-flex align-items-center gap-2">
            <span>Send Message</span>
            <PhosphorIcon name="send" size={16} weight="regular" />
          </span>
        )}
      </button>
    </form>
  );
}

