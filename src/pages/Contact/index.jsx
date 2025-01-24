import MiniHero from "../../components/MiniHero";
import "./index.css";

function Contact() {
  const root_id = document.getElementById('root');
  root_id.classList.add('gradient');

  return (
    <div>
      <MiniHero text="Contact" />
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem voluptate molestiae repudiandae culpa voluptatibus necessitatibus quod doloribus. Culpa libero ipsam laborum inventore? Quisquam iusto voluptas aspernatur laudantium vel ipsam.
        </p>
    </section>
    </div>
  );
}

export default Contact;
