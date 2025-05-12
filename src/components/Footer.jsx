import { FaHeart } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-red-600 text-white py-8">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <FaHeart className="text-2xl mr-2" />
          <span className="font-bold text-xl">HeartCare</span>
        </div>
        <div className="mt-4 md:mt-0">
          <p>© 2025 HeartCare. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;