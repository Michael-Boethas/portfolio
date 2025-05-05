'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';

export default function Contact() {
  const { textContent } = useLanguage();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ success: null, message: '' });

  useEffect(() => {
    const handleModalClose = () => {
      setStatus({ success: null, message: '' });
    };

    const modalElement = document.getElementById('contact-form');
    modalElement?.addEventListener('hide.bs.modal', handleModalClose);

    // Cleanup event listener on unmount
    return () => {
      modalElement?.removeEventListener('hide.bs.modal', handleModalClose);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // beeVomitJar check
    if (event.target.beeVomitJar.value) {
      console.log('Bot detected: submission blocked.');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ENDPOINT,
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus({
        success: true,
        message: textContent.sections.contact.success_message,
      });
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        success: false,
        message: textContent.sections.contact.error_message,
      });
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
        <div className="modal-content theme-light-bg--1 rounded-0">
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
          <div className="modal-body d-flex flex-column">
            <form
              className="d-flex flex-column align-items-stretch"
              onSubmit={handleSubmit}
            >
              {/* ******************** */}
              <input
                type="text"
                name="beeVomitJar"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />
              {/* ******************** */}

              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  {textContent.sections.contact.email_input_label}
                </label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  id="emailInput"
                  placeholder="name@domain.tld"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="messageTextArea" className="form-label">
                  {textContent.sections.contact.text_input_label}
                </label>
                <textarea
                  className="form-control rounded-0"
                  id="messageTextArea"
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

            {/* Display submit status only if status is truthy */}
            {status.message && (
              <p
                className={`align-self-center fs-6 mt-4 px-5 ${status.success ? 'alert alert-success text-success' : 'alert alert-danger text-danger'}`}
              >
                {status.message}
              </p>
            )}
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}
