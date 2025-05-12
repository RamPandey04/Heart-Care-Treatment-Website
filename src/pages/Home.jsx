import { motion } from 'framer-motion';

const Home = () => (
  <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-red-50 to-red-100 pt-16 w-full">
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center"
    >
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-red-600">Advanced Heart Treatment</h1>
        <p className="mt-4 text-lg text-gray-700">
          World-class care for your heart with cutting-edge technology and expert doctors.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700"
        >
          Book Appointment
        </a>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://www.deepammeditours.com/wp-content/uploads/2023/04/Heart-Transplant-1536x1024.jpg"
          alt="Heart Care"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </motion.div>
  </section>
);

export default Home;