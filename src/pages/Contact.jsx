import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />
      <main className="contact-page__main">
        <div className="contact-page__inner">
          <div className="contact-page__header">
            <h1 className="contact-page__title">Nous Contacter</h1>
            <p className="contact-page__subtitle">
              Une question ? Une suggestion ? Notre équipe vous répondra dans les plus brefs délais.
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
