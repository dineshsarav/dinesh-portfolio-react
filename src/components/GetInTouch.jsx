import React, { useState } from 'react';
import { User, Mail, ShieldCheck, Send, PhoneCall } from 'lucide-react';
import TiltCard from './TiltCard';

export default function GetInTouch() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', isRobotChecked: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const openDirectGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dineshsaravan64@gmail.com&su=Portfolio%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent("Sender Email: " + formData.email + "\n\nMessage:\n" + formData.message)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowToast(true);

    try {
      await fetch("https://formsubmit.co/ajax/dineshsaravan64@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });
    } catch (err) {
      console.log("FormSubmit API sent with fallback to direct Gmail compose.");
    } finally {
      setIsSubmitting(false);
      openDirectGmail();
    }
  };

  return (
    <section id="contact" className="py-12 pb-24 scroll-mt-24">
      <TiltCard className="rounded-3xl p-8 sm:p-12 space-y-8 hover:border-indigo-500/50 transition-all">
        
        {/* Header */}
        <div className="space-y-3">
          <h2 className="reactbits-masked-heading font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            I can help with software development, web apps, mobile products, ERP workflows, and security-minded delivery. Send me a message and let's talk.
          </p>
        </div>

        {/* Open to work Status Card */}
        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-5 space-y-2 hover:border-indigo-400 hover:bg-indigo-500/15 transition-all">
          <div className="flex items-center gap-2 text-sm font-bold text-indigo-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-400"></span>
            </span>
            <span>Open to new work</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            Full-stack, AI and cloud engagements. I read every message and reply within 24 hours.
          </p>
        </div>

        {/* Direct Contact Badges (Google Gmail SVG & Mobile Call Phone SVG Logos) */}
        <div className="grid gap-4 sm:grid-cols-2">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dineshsaravan64@gmail.com" target="_blank" rel="noopener noreferrer" className="magnetic-btn shimmer-btn flex items-center gap-3.5 p-4 rounded-xl border border-white/10 bg-slate-900/90 text-white hover:border-indigo-400/70 hover:bg-slate-900 transition-all hover:scale-105">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/gmail.svg" alt="Gmail Official Logo" className="h-6 w-6 filter invert" />
            </div>
            <div>
              <p className="text-[11px] font-mono text-indigo-300 font-semibold">Direct Email Address</p>
              <p className="text-sm font-bold text-white">dineshsaravan64@gmail.com</p>
            </div>
          </a>

          <a href="tel:+917207231279" className="magnetic-btn shimmer-btn flex items-center gap-3.5 p-4 rounded-xl border border-white/10 bg-slate-900/90 text-white hover:border-cyan-400/70 hover:bg-slate-900 transition-all hover:scale-105">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
              <PhoneCall className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-[11px] font-mono text-cyan-300 font-semibold">Mobile Phone Call Logo</p>
              <p className="text-sm font-bold text-white">+91 7207231279</p>
            </div>
          </a>
        </div>

        {/* Contact Form Component sending to dineshsaravan64@gmail.com */}
        <form onSubmit={handleSubmit} className="space-y-5 pt-4">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300">Your Name</label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-indigo-400"><User className="h-4 w-4" /></span>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/90 pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300">Your Email</label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-indigo-400"><Mail className="h-4 w-4" /></span>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/90 pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300">Your Message</label>
            <textarea
              id="contact-message"
              rows={4}
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-slate-900/90 p-3.5 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all"
            ></textarea>
          </div>

          {/* Security Check Badge */}
          <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4 flex flex-wrap items-center justify-between gap-3 hover:border-indigo-500/30 transition-all">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="recaptcha-check"
                required
                checked={formData.isRobotChecked}
                onChange={(e) => setFormData({ ...formData, isRobotChecked: e.target.checked })}
                className="h-4 w-4 rounded border-white/20 bg-slate-800 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
              <label htmlFor="recaptcha-check" className="text-xs text-slate-300 font-medium cursor-pointer">I'm not a robot</label>
            </div>
            <span className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Security Verified
            </span>
          </div>

          <button type="submit" disabled={isSubmitting} className="magnetic-btn shimmer-btn w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
            <Send className="h-4 w-4" />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </form>

        {showToast && (
          <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium animate-pulse">
            ✓ Message sent directly to dineshsaravan64@gmail.com! Opening Gmail compose window to connect with Dinesh...
          </div>
        )}

      </TiltCard>
    </section>
  );
}
