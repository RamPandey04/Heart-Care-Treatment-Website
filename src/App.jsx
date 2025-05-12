import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <ErrorBoundary>
        <Services />
      </ErrorBoundary>
      <ErrorBoundary>
        <Doctors />
      </ErrorBoundary>
      <ErrorBoundary>
        <Testimonials />
      </ErrorBoundary>
      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
    </main>
    <Footer />
  </div>
);

export default App;