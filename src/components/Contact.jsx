// src/components/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "your_service_id", // 🔹 Replace with your EmailJS Service ID
        "your_template_id", // 🔹 Replace with your Template ID
        form.current,
        "your_public_key" // 🔹 Replace with your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-12">
          Have a project in mind, or just want to say hello? Fill out the form
          below and I’ll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto grid gap-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors py-3 px-6 rounded-xl font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && <p className="mt-6 text-gray-300">{status}</p>}

        {/* Alternative Contact Links */}
        <div className="mt-12 text-gray-400">
          <p>
            Or reach me directly at{" "}
            <a
              href="mailto:youremail@example.com"
              className="text-indigo-400 hover:underline"
            >
              youremail@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
