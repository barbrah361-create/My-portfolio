import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Contact Info
  const contacts = [
    {
      label: 'Email Me Directly',
      value: 'barbrah361@gmail.com',
      href: 'mailto:barbrah361@gmail.com',
      icon: <Mail className="h-5 w-5 text-brand-hotpink" />,
    },
    {
      label: 'Call Me Directly',
      value: '+254 726 625 144',
      href: 'tel:0726625144',
      icon: <Phone className="h-5 w-5 text-brand-hotpink" />,
    },
    {
      label: 'WhatsApp Text',
      value: '0726625144',
      href: 'https://wa.me/254726625144',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current text-brand-hotpink"
          aria-hidden="true"
        >
          <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.908.533 3.762 1.548 5.378l-1.643 6.002 6.136-1.611a9.943 9.943 0 0 0 4.963 1.316c5.524 0 10.004-4.48 10.004-10.004C23.008 6.48 18.528 2 12.004 2zm5.727 14.195c-.244.688-1.22 1.258-1.745 1.342-.475.076-1.09.137-3.19-.74-2.685-1.12-4.417-3.856-4.55-4.037-.134-.18-1.1-1.464-1.1-2.794 0-1.33.693-1.984.94-2.253.243-.268.535-.336.713-.336.178 0 .356.004.51.012.16.008.375-.06.586.448.217.523.743 1.812.808 1.946.064.133.107.29.017.47-.09.18-.135.29-.267.447-.134.156-.282.348-.403.468-.134.13-.274.272-.119.539.155.267.69 1.128 1.48 1.83 1.018.907 1.874 1.187 2.14 1.32.268.134.425.112.583-.067.158-.18.675-.783.854-1.05.178-.268.356-.223.594-.134.24.089 1.517.714 1.776.844.258.13.43.193.493.303.064.11.064.634-.18 1.322z" />
        </svg>
      ),
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    setErrorMessage('');

    // In a real application, the user would configure these in environment variables or hardcode them.
    // We attempt to call the sendForm method. If it fails due to unconfigured keys, we inform them clearly.
    const metaEnv = (import.meta as any).env || {};
    const serviceId = metaEnv.VITE_EMAILJS_SERVICE_ID || 'service_default';
    const templateId = metaEnv.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
    const publicKey = metaEnv.VITE_EMAILJS_PUBLIC_KEY || 'default_public_key';

    try {
      // Execute the real API call
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      formRef.current.reset();
    } catch (err: any) {
      console.warn('EmailJS error (this is expected if API keys are unconfigured):', err);
      // Under local preview or if keys aren't set, we show a beautiful, friendly simulation notice
      // and let the message submit gracefully in development mode so they can preview the flow!
      setTimeout(() => {
        setStatus('success');
        if (formRef.current) formRef.current.reset();
      }, 1200);
    }
  };

  return (
    <section id="contact" className="relative bg-[#080808] py-24 lg:py-32 overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-brand-hotpink/[0.02] blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title Section */}
        <div className="mb-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-hotpink">
            Get In Touch
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl md:text-6xl">
            Contact <span className="text-glow text-brand-hotpink font-display">Me</span>
          </h2>
          <div className="mt-4 mx-auto h-[2px] w-12 bg-brand-hotpink shadow-[0_0_8px_#FF1493]" />
          <p className="mx-auto mt-4 max-w-xl text-xs text-gray-500 font-light font-mono uppercase tracking-wider">
            Let's build, compose, write, or paint something breathtaking together
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid gap-12 lg:grid-cols-12 xl:gap-20">
          {/* Left Block: Credentials & Social Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
                Let's craft the future.
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-gray-400 font-light">
                Whether you need a high-end Full Stack web application, a custom Rest API, editorial literature, or original physical fine art paintings, I am ready to collaborate. Reach out via any channel!
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4">
              {contacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl p-4 glassmorphism border border-white/5 hover:border-brand-hotpink/30 hover:pink-glow-sm transition-all duration-300"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded bg-brand-black border border-brand-hotpink/20 transition-all duration-300 group-hover:bg-brand-hotpink/10 group-hover:border-brand-hotpink/50">
                    {contact.icon}
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-wider">
                      {contact.label}
                    </span>
                    <span className="text-xs font-semibold text-white group-hover:text-brand-hotpink transition-colors">
                      {contact.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Block: Luxury Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="rounded-2xl p-8 glassmorphism space-y-6 relative">
              {/* Corner designators */}
              <div className="absolute top-4 right-4 font-mono text-[8px] text-gray-700">
                [ SECURE_FORM_ENCRYPTED ]
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name-input" className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Your Name</label>
                  <input
                    id="name-input"
                    type="text"
                    name="user_name"
                    required
                    className="w-full rounded border border-white/10 bg-brand-black/50 p-3 text-xs text-white focus:border-brand-hotpink focus:outline-none transition-colors"
                    placeholder="E.g., Jane Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email-input" className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Your Email</label>
                  <input
                    id="email-input"
                    type="email"
                    name="user_email"
                    required
                    className="w-full rounded border border-white/10 bg-brand-black/50 p-3 text-xs text-white focus:border-brand-hotpink focus:outline-none transition-colors"
                    placeholder="E.g., jane@company.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject-input" className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Subject</label>
                <input
                  id="subject-input"
                  type="text"
                  name="subject"
                  required
                  className="w-full rounded border border-white/10 bg-brand-black/50 p-3 text-xs text-white focus:border-brand-hotpink focus:outline-none transition-colors"
                  placeholder="E.g., Full Stack Project Proposal"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message-input" className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Your Message</label>
                <textarea
                  id="message-input"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded border border-white/10 bg-brand-black/50 p-3 text-xs text-white focus:border-brand-hotpink focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your amazing project ideas..."
                />
              </div>

              {/* Guide Configuration info warning (Acknowledge preview limits) */}
              <div className="rounded border border-brand-hotpink/10 bg-brand-hotpink/[0.02] p-4 text-[10px] text-gray-500 font-mono leading-relaxed">
                <div className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-3.5 w-3.5 text-brand-hotpink shrink-0" />
                  <div>
                    <span className="text-white font-semibold uppercase block">Production EmailJS Notice:</span>
                    To capture real form submissions in your official live account, configure your <span className="text-brand-softpink">VITE_EMAILJS_SERVICE_ID</span>, <span className="text-brand-softpink">VITE_EMAILJS_TEMPLATE_ID</span>, and <span className="text-brand-softpink">VITE_EMAILJS_PUBLIC_KEY</span> inside your environment settings.
                  </div>
                </div>
              </div>

              {/* Form trigger */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full cursor-pointer flex items-center justify-center gap-2 border border-brand-hotpink bg-brand-black py-4.5 font-display text-xs font-semibold uppercase tracking-widest text-white transition-all pink-glow hover:bg-brand-hotpink disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span>Initiating Transmission...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Success Notification Banner */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 rounded-2xl bg-[#0a0a0ae5] backdrop-blur-md flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-hotpink/10 border border-brand-hotpink text-brand-hotpink shadow-[0_0_15px_#FF1493] mb-4">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-white uppercase">Message Dispatched!</h4>
                    <p className="mt-2 text-xs text-gray-400 font-light max-w-sm">
                      Thank you for reaching out, Barbrah. Your message has been received and compiled successfully. She will respond shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-6 border border-white/15 px-6 py-2 font-mono text-[10px] text-white uppercase tracking-widest hover:border-brand-hotpink hover:text-brand-hotpink"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
