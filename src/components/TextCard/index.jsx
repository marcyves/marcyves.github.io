import { useEffect } from "react";
import PropTypes from "prop-types";
import "./index.css";

function TextCard({ title, items }) {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${i * 0.4}s`;
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="text-card-section">
      <span className="section-label">Formations</span>
      <h2 className="fade-in">{title}</h2>
      {items.map((item, index) => (
        <p
          className="fade-in"
          key={index}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </section>
  );
}

TextCard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default TextCard;
