import React from "react"
function AboutPage(props) {
  
  const sayHello = "Hi!! I'm a variable.";


  return (
    <div className="about-container">
      <p>{sayHello}</p>
    </div>
  )
}
export default AboutPage