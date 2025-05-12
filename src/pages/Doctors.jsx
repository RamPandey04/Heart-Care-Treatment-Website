import { motion } from 'framer-motion';

const Doctors = () => (
  <section id="doctors" className="py-20 bg-white w-full">
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-center text-red-600">Our Doctors</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: 'Dr. John Smith',
            specialty: 'Cardiologist',
            img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
          },
          {
            name: 'Dr. Sarah Johnson',
            specialty: 'Cardiac Surgeon',
            img: 'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_hybrid&w=740',
          },
          {
            name: 'Dr. Michael Lee',
            specialty: 'Interventional Cardiologist',
            img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
          },
        ].map((doctor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-red-50 rounded-lg shadow-lg text-center p-6"
          >
            <img src={doctor.img} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto" />
            <h3 className="mt-4 text-xl font-semibold text-red-600">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Doctors;