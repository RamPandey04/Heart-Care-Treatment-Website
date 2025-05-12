import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white w-full">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center text-red-600">Contact Us</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h3 className="text-xl font-semibold text-red-600">Book an Appointment</h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                rows="4"
              ></textarea>
              <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700">
                Book Now
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full space-y-4"
          >
            <h3 className="text-xl font-semibold text-red-600">Get in Touch</h3>
            <div className="flex items-center">
              <FaPhone className="text-red-600 mr-2" />
              <p className="text-gray-600">+91 123-456-7890</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-red-600 mr-2" />
              <p className="text-gray-600">contact@heartcare.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-600 mr-2" />
              <p className="text-gray-600">123 HeartCare Lane, Mumbai, India</p>
            </div>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086576607496!2d144.96305791531676!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzUwLjgiUyAxNDTCsDU3JzQ3LjAiRQ!5e0!3m2!1sen!2sau!4v1615363842347!5m2!1sen!2sau"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;