import './index.css'

function Error({type}) {

  if (type === ""){
    type = "default"
  }

  const messages = [
    {type:"default", title:"Oops, quelque chose s'est mal passé", message: "Ne vous inquiétez pas, nous finirons tout de même par trouver ce que vous cherchiez."},
    {type:"no_course", title: "Il n'y a pas de cours dans ce parcours", message: "Revenez bientôt pour voir apparaitre des nouveautés."}
  ]

  const message = messages.find((data) => (data.type === type))


  return (
      <section className="content">
        <div className="description">
          <h1>{message.title}</h1>
          <p>{message.message}</p>
        </div>
  </section>   
)
}

export default Error
