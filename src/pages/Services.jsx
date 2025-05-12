import { motion } from 'framer-motion';

const Services = () => (
  <section id="services" className="py-20 bg-gray-50 w-full">
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-center text-red-600">Our Services</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Cardiac Diagnostics',
            desc: 'ECG, ECHO, and stress tests for accurate diagnosis.',
            img: 'https://apacmed.org/wp-content/uploads/2024/04/Value-of-In-vitro-diagnostics-in-APAC-Value-Assessment-Framework-with-applications-for-Cardiovascular-Diseases.jpg',
          },
          {
            title: 'Heart Surgery',
            desc: 'Minimally invasive and open-heart surgeries.',
            img: 'https://medstarhealth-delivery.sitecorecontenthub.cloud/api/public/content/services%2Fheart-surgery?v=caae970e',
          },
          {
            title: 'Rehabilitation',
            desc: 'Post-treatment care for faster recovery.',
            img: 'https://t4.ftcdn.net/jpg/09/23/16/15/240_F_923161519_uy21kXV56xfkLPjnRQWfJFuuEKctE0bm.jpg',
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-red-600">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Services;