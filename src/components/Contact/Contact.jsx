'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

export default function Contact() {
  const { textContent } = useLanguage();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // If a bot filled the honeypot field, block the submission
    if (event.target.hidden_field.value) {
      console.log('Bot detected: submission blocked.');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://formspree.io/f/mwpkvddo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('Email sent successfully!');
      setEmail('');
      setMessage('');

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to send email.');
    }
  };

  return (
    <div
      className="modal modal-xl fade"
      id="contact-form"
      tabIndex="-1"
      aria-labelledby="contactLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-light rounded-0">
          <div className="modal-header">
            <h2 className="modal-title" id="contactLabel">
              {textContent.sections.contact.title}
            </h2>
            <button
              type="button"
              className="btn-close pe-5"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              className="d-flex flex-column align-items-stretch"
              onSubmit={handleSubmit}
            >
              {/* Honeypot field to trick bots */}
              <input
                type="text"
                name="hidden_field"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />
              {/* Honeypot Field to trick bots */}

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {textContent.sections.contact.email_input_label}
                </label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  id="exampleFormControlInput1"
                  placeholder="name@domain.tld"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  {textContent.sections.contact.text_input_label}
                </label>
                <textarea
                  className="form-control rounded-0"
                  id="exampleFormControlTextarea1"
                  rows="12"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary text-light align-self-center rounded-0 px-5"
              >
                {textContent.sections.contact.submit_button_label}
              </button>
            </form>
            {status && <p className="mt-2">{status}</p>}
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}