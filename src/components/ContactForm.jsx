import './ContactForm.css';

function ContactForm() {
  return (
    <form className="contact-form">
      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="name">
          Nom complet
        </label>
        <input
          className="contact-form__input"
          type="text"
          id="name"
          name="name"
          placeholder="Votre nom"
          autoComplete="name"
        />
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="email">
          Adresse e-mail
        </label>
        <input
          className="contact-form__input"
          type="email"
          id="email"
          name="email"
          placeholder="votre@email.com"
          autoComplete="email"
        />
      </div>

      <div className="contact-form__group">
        <label className="contact-form__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="contact-form__textarea"
          id="message"
          name="message"
          rows={6}
          placeholder="Écrivez votre message ici..."
        ></textarea>
      </div>

      <button className="contact-form__submit" type="submit">
        Envoyer le message
      </button>
    </form>
  );
}

export default ContactForm;
