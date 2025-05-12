import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-20 bg-white w-full">
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-center text-red-600">About HeartCare</h2>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
        HeartCare is dedicated to providing top-notch heart treatment with a team of experienced
        cardiologists and state-of-the-art facilities. Our mission is to ensure every patient receives
        personalized care.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Expert Doctors', desc: 'Board-certified cardiologists with years of experience.' },
          { title: 'Advanced Technology', desc: 'Cutting-edge equipment for accurate diagnosis.' },
          { title: 'Patient-Centric Care', desc: 'Personalized treatment plans for every patient.' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-red-50 rounded-lg text-center"
          >
            <h3 className="text-xl font-semibold text-red-600">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;