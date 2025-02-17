'use client';

import axios from 'axios';
import { FormEvent, useState } from 'react';

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const trimValue = (value: FormDataEntryValue | null) =>
      value ? value.toString().trim() : '';

    const data = {
      first_name: trimValue(formData.get('first-name')),
      last_name: trimValue(formData.get('last-name')),
      email: trimValue(formData.get('email')),
      project_type: trimValue(formData.get('project-type')),
      company_name: trimValue(formData.get('company-name')),
      message: trimValue(formData.get('message')),
    };

    try {
      await axios.post('/api/contact', data);
      alert('Message sent successfully.');
      form.reset();
    } catch (error) {
      alert('Message failed - please try alternative means of contact.');
    }

    setIsLoading(false);
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      method="POST"
      className="w-full py-8 sm:py-16"
    >
      <div className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block font-semibold text-custom-gray text-sm/6"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-90 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-brand-blue"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block font-semibold text-custom-gray text-sm/6"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-brand-blue"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block font-semibold text-custom-gray text-sm/6"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-90 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-brand-blue"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company-name"
              className="block font-semibold text-custom-gray text-sm/6"
            >
              Company Name
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                name="company-name"
                id="company-name"
                autoComplete="tel"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-90 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-brand-blue"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="project-type"
              className="block font-semibold text-custom-gray text-sm/6"
            >
              Project Type
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-type"
                id="project-type"
                autoComplete="tel"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-90 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-brand-blue"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block font-semibold text-custom-gray text-sm/6"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                required
                name="message"
                rows={4}
                id="message"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-90 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-brand-blue"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full mt-8 md:justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="flex flex-col items-center justify-center w-full font-medium text-center text-white rounded-lg md:w-64 h-11 bg-brand-blue hover:bg-blue-650"
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
