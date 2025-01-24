import "./index.css";

function HomeText({title, subtitle, text}) {
  return (
    <section className="home-text">
      <article>
        <h2>{title}</h2>
        <h3>{subtitle}</h3> 
        <p>{text}</p>
      </article>
    </section>
  );
}

export default HomeText;
