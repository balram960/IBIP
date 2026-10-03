import { useState, FormEvent } from 'react';
import { Send, CheckCircle, XCircle, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

type FieldError = { name?: string; email?: string; message?: string };

type OverlayState = 'idle' | 'success' | 'error';

function validate(name: string, email: string, message: string): FieldError {
  const errors: FieldError = {};
  if (!name.trim()) errors.name = 'Please enter your name.';
  if (!email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!message.trim()) errors.message = 'Please enter a message.';
  else if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FieldError>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [overlay, setOverlay] = useState<OverlayState>('idle');

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const e = validate(name, email, message);
    setErrors(e);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const e2 = validate(name, email, message);
    setErrors(e2);
    if (Object.keys(e2).length > 0) return;

    setSubmitting(true);
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setOverlay('success');
    setName('');
    setEmail('');
    setMessage('');
    setTouched({});
    setErrors({});
  };

  const closeOverlay = () => setOverlay('idle');

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/60 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/60 dark:bg-cyan-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Let's Work Together
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
          <p className="mt-5 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
            I'm open to front-end internship roles and interesting project collaborations. Drop me a
            message — I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Mail, label: 'Email', value: 'nvlbalaram@gmail.com', href: 'mailto:nvlbalaram@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 6301015965', href: 'tel:+916301015965' },
              { icon: MapPin, label: 'Location', value: 'Hyderabad, India', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-200">
                  <Icon size={18} className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/balram960"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium transition-all duration-200"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/nvl-balaram-69b125350/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-sm font-medium transition-all duration-200"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            className="lg:col-span-3 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 shadow-sm"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Full Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => handleBlur('name')}
                  placeholder="N.V.L. Balram"
                  aria-required="true"
                  aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-gray-900 border ${
                    touched.name && errors.name
                      ? 'border-red-400 dark:border-red-500 focus:ring-red-400'
                      : 'border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-blue-400'
                  } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200`}
                />
                {touched.name && errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <XCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Email Address <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur('email')}
                  placeholder="hello@example.com"
                  aria-required="true"
                  aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-gray-900 border ${
                    touched.email && errors.email
                      ? 'border-red-400 dark:border-red-500 focus:ring-red-400'
                      : 'border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-blue-400'
                  } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200`}
                />
                {touched.email && errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <XCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Message <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => handleBlur('message')}
                  placeholder="Tell me about the opportunity or project..."
                  aria-required="true"
                  aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-gray-900 border ${
                    touched.message && errors.message
                      ? 'border-red-400 dark:border-red-500 focus:ring-red-400'
                      : 'border-gray-200 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-blue-400'
                  } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200 resize-none`}
                />
                <div className="flex items-start justify-between mt-1.5">
                  {touched.message && errors.message ? (
                    <p id="message-error" role="alert" className="text-xs text-red-500 flex items-center gap-1">
                      <XCircle size={12} /> {errors.message}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className={`text-xs ml-auto ${message.length > 500 ? 'text-red-500' : 'text-gray-400'}`}>
                    {message.length}/500
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success / Error overlay */}
      {overlay !== 'idle' && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={overlay === 'success' ? 'Message sent' : 'Error sending message'}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={closeOverlay}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center border border-gray-100 dark:border-gray-700 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {overlay === 'success' ? (
              <>
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-5">
                  <XCircle size={32} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Oops!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                  Something went wrong. Please try again or email me directly.
                </p>
              </>
            )}
            <button
              onClick={closeOverlay}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
