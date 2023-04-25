import React from "react";
import MultiplePizzas from "../assets/pizza10.jpg";
import "../styles/About.css";



function About() {
  return (
   <div className="about">
    <div className="aboutTop" style={ { backgroundImage:` url( ${MultiplePizzas })`}}>
    </div>
    <div className="aboutBottom">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ex minus, est animi ullam ratione? Repudiandae est expedita eius iusto modi! Ab dolor dignissimos voluptate consequuntur saepe. Sed, repellendus beatae.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolorum doloremque maiores? Dolore repudiandae saepe magnam, maiores dolorem aspernatur consequatur harum? Nulla odit aliquam amet animi beatae eos iste magnam?
        Autem officia dolorem debitis. Minima illum dolorem sit eum sint, eos debitis sed eius, veritatis error in fugiat maxime itaque architecto, maiores pariatur atque provident. Ab accusantium voluptatem illo quam.
        Autem a quidem error facere deleniti vero? Quo fugit assumenda tenetur quia dolorum dolores delectus modi numquam quasi libero consequatur sapiente, nisi a atque, expedita maxime molestiae dolore pariatur corporis!



      </p>
    </div>
   </div>
  )
}

export default About
