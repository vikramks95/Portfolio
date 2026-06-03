import React, { useState } from 'react';
import { Phone, Mail,  MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:vikramks091@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9525882126",
      href: "tel:+919525882126"
    },
    {
      icon: Mail,
      title: "Email",
      value: "vikramks091@gmail.com",
      href: "mailto:vikramks091@gmail.com"
    },
    {
      // icon: Linkedin,
      title: "LinkedIn",
      value: "Vikram Kumar",
      href: "https://www.linkedin.com/in/vikram-kumarba27/"
    },
    {
      // icon: Github,
      title: "GitHub",
      value: "vikramks95",
      href: "https://github.com/vikramks95"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Noida, Uttar Pradesh, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Feel free to reach out to me for collaboration, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-slate-800 p-8 rounded-2xl shadow-md border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                {/* const Icon = info.icon; */}
                return (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-700/50 transition">
                    <div className="p-3 bg-slate-700 rounded-lg text-cyan-400 ">
                      {/* <Icon size={20} /> */}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 font-semibold hover:text-cyan-400 transition"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="mailto:vikramks091@gmail.com"
              className="block w-full mt-8 bg-cyan-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition text-center"
            >
              Send Email
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-2xl shadow-md border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-600 rounded-lg bg-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;