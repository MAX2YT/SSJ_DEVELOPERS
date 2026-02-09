import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-3 block">Get in Touch</span>
                    <h2 className="mb-4">Contact Us</h2>
                    <p className="text-slate-500">
                        Ready to start your dream project? Reach out to us for a consultation or quote.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="contact-info-item">
                            <div className="contact-icon"><Phone size={24} /></div>
                            <div>
                                <span className="contact-label">Phone</span>
                                <div className="contact-value">
                                    <a href="tel:+919499946739" className="hover:text-accent">+91 94999 46739</a><br />
                                    <a href="tel:+919994036646" className="hover:text-accent">+91 999 403 6646</a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon"><Mail size={24} /></div>
                            <div>
                                <span className="contact-label">Email</span>
                                <div className="contact-value">
                                    <a href="mailto:info@ssjdevelopers.com" className="hover:text-accent">info@ssjdevelopers.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon"><MapPin size={24} /></div>
                            <div>
                                <span className="contact-label">Office Address</span>
                                <div className="contact-value">
                                    No: 2, 1st Floor, New Military Road,<br />
                                    Avadi, Chennai – 600 054
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-gray-100 rounded-xl text-gray-800 border border-gray-200">
                            <h4 className="text-xl font-bold mb-2 text-gray-900">Office Hours</h4>
                            <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                            <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <h3 className="mb-6 font-bold text-2xl text-slate-800">Send us a Message</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="form-group mb-0">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-input" placeholder="Your Name" />
                                </div>
                                <div className="form-group mb-0">
                                    <label className="form-label">Phone</label>
                                    <input type="tel" className="form-input" placeholder="Your Phone" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" placeholder="Your Email" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-textarea" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full justify-center">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
