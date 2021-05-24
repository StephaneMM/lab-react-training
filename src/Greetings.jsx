
// Snippets to generate basic function component
// rafce + tab  (just like emmet in html)
import React from "react";
import "./App.css";

const Greetings = (props) => {
  console.log(props);

   if ( {props.lang} ==="de") {
         return <p> Hallo </p>
      } else if ( {props.lang} ==="fr") {
        return <p> Bonjour </p> }




  return (
    <div className="Greetings">
   
      


 
    </div>
  );
};
export default Greetings;