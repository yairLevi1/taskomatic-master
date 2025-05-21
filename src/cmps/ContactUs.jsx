import React from 'react';
import { Mail, Facebook, Phone, Calendar, Instagram, Linkedin } from 'lucide-react';
import '../cssFiles/ContactUs.css';

const ContactPage = ({ t }) => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className='contactUs-Box-H1'>{t.contactUsBoxH1}</h1>
        <p>{t.contactUsBoxH2}</p>
        {/* Book Intro Call Button */}
        <a
          href="https://calendly.com/your-calendar-link"
          className="book-call-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Calendar className="icon" size={20} />
          <span className="link-text">{t.contactUsButton}</span>
        </a>
      </div>
      <div className="contact-info">
        <h1 className="contact-title">{t.contactUsH1}</h1>

        <div className="contact-links">
          {/* Email Link */}
          <a
            href="mailto:contact@example.com"
            className="contact-link email-link"
          >
            <Mail className="icon" />
            <span className="link-text">{t.email}</span>
          </a>

          {/* Facebook Link */}
          <a
            href="https://facebook.com/yourpage"
            className="contact-link facebook-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="icon" />
            <span className="link-text">{t.facebook}</span>
          </a>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/972501234567"
            className="contact-link whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="icon" />
            <span className="link-text">{t.whatsApp}</span>
          </a>
          {/* Instagram Link */}
          <a
            href="https://instagram.com/yourprofile"
            className="contact-link instagram-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="icon" />
            <span className="link-text">{t.instagram}</span>
          </a>
          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/yourprofile"
            className="contact-link linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="icon" />
            <span className="link-text">{t.linkedIn}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
