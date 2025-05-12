import { motion } from 'framer-motion';

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-50 w-full">
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-center text-red-600">Patient Testimonials</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: 'Anita Sharma',
            text: 'The care I received was exceptional. The doctors were thorough and supportive.',
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          },
          {
            name: 'Ravi Kumar',
            text: 'Thanks to HeartCare, I’m back to my active lifestyle after surgery.',
            img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
          },
          {
            name: 'Priya Singh',
            text: 'The rehabilitation program was fantastic and helped me recover quickly.',
            img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
          },
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <img src={testimonial.img} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
            <p className="mt-4 text-gray-600 italic">"{testimonial.text}"</p>
            <h3 className="mt-2 text-lg font-semibold text-red-600">{testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Testimonials;