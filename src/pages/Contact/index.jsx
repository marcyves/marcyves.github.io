import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
  faLock,
  faCircleQuestion,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./index.css";

const socialLinks = [
  {
    name: "GitHub",
    description: "Découvrez mes projets open source",
    href: "https://github.com/marcyves",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    description: "Connectons-nous professionnellement",
    href: "https://linkedin.com/in/marcaugier",
    icon: faLinkedin,
  },
  {
    name: "Email",
    description: "Écrivez-moi directement",
    href: "mailto:marc.augier@xdm-consulting.fr",
    icon: faEnvelope,
  },
];

const faqItems = [
  {
    question: "Quels types de formations proposez-vous ?",
    answer: "Je propose des parcours en développement web, data science et management, disponibles sur Udemy et Tuto.com, avec des vidéos, exercices pratiques et certificats.",
  },
  {
    question: "Proposez-vous du conseil en entreprise ?",
    answer: "Oui, j'accompagne les entreprises dans leur transformation digitale : stratégie numérique, choix d'outils, formation des équipes et mise en œuvre de solutions.",
  },
  {
    question: "Comment se déroule un accompagnement ?",
    answer: "Nous commençons par un échange pour comprendre vos besoins, puis je vous propose un parcours adapté avec des étapes claires et un suivi régulier.",
  },
  {
    question: "Quel est votre délai de réponse ?",
    answer: "Je m'efforce de répondre à toutes les demandes sous 48 heures ouvrées.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero page-section">
        <div className="container contact-hero-grid">
          <div className="contact-info">
            <span className="section-label">Contact</span>
            <h1 className="section-title">
              Travaillons ensemble<span className="accent-dot">.</span>
            </h1>
            <p className="contact-intro">
              Vous souhaitez en savoir plus sur mes formations ou mon accompagnement ?
              N&apos;hésitez pas à me contacter, je serai ravi d&apos;échanger avec vous.
            </p>
            <ul className="contact-details">
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:marc.augier@xdm-consulting.fr">marc.augier@xdm-consulting.fr</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>France</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} />
                <span>Réponse sous 48h</span>
              </li>
            </ul>
          </div>

          <div className="contact-form-wrapper card-dark">
            <h2>Envoyez-moi un message</h2>
            {submitted ? (
              <div className="form-success">
                <p>Merci pour votre message ! Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Votre message..."
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Envoyer le message
                </button>
                <p className="form-privacy">
                  <FontAwesomeIcon icon={faLock} />
                  Vos données ne seront jamais partagées avec des tiers.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="page-section page-section-alt">
        <div className="container">
          <h2 className="subsection-title">Retrouvez-moi</h2>
          <div className="social-cards">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card card-dark"
              >
                <FontAwesomeIcon icon={link.icon} className="social-card-icon" />
                <h3>{link.name}</h3>
                <p>{link.description}</p>
                <span className="social-card-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container faq-section">
          <div className="faq-content">
            <h2 className="subsection-title">
              <FontAwesomeIcon icon={faCircleQuestion} className="faq-icon" />
              Questions fréquentes
            </h2>
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className={`faq-item card-dark ${openFaq === index ? "faq-open" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  >
                    {item.question}
                    <FontAwesomeIcon icon={faChevronDown} className="faq-chevron" />
                  </button>
                  {openFaq === index && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="faq-quote card-dark">
            <blockquote>
              &laquo; Le meilleur moyen de prédire l&apos;avenir, c&apos;est de le créer. &raquo;
            </blockquote>
            <cite>— Peter Drucker</cite>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
