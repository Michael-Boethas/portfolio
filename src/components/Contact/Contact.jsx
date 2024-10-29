'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { textContent } = useLanguage();
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form submitted!');
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
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              className="d-flex flex-column align-items-stretch"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  {textContent.sections.contact.email_input_label}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
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
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="12"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-secondary text-light align-self-center px-5"
              >
                {textContent.sections.contact.submit_button_label}
              </button>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}
