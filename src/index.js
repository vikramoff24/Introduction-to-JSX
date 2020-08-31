import React from "react";
import ReactDOM from "react-dom";
let d = new Date();
var headingStyle = {
  color: ""
};
function day(n) {
  if (n >= 0 && n < 12) {
    headingStyle.color = "red";
    return "Good morning";
  } else if (n >= 12 && n < 18) {
    headingStyle.color = "green";
    return "Good Afternoon";
  } else if (n >= 18 && n <= 23) {
    headingStyle.color = "blue";
    return "Good evening";
  }
}

const img = "https://picsum.photos/100";
ReactDOM.render(
  <div>
    <div>
      <h1>Hello World!</h1>
      <p>This is a paragraph</p>

      {/* Ul element in JSX */}
      <div>
        <h1>This are my favouite coding languages</h1>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </div>

      {/* JSX Attribute & Styling */}
    </div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img alt="ran" src={img + "?grayscale"}></img>
      <img
        className="food-img"
        alt="bir"
        src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ofii4m78dihqmf3ebkkl"
      ></img>
      <img
        className="food-img"
        alt="bir"
        src="https://images.indulgexpress.com/uploads/user/imagelibrary/2019/8/1/original/Biryanifest.jpg"
      ></img>
      <img
        className="food-img"
        alt="bir"
        src="https://www.asiaone.com/sites/default/files/styles/a1_og_image/public/original_images/Mar2020/20200311-briyani-pex.jpg?itok=YtjWThUr"
      ></img>
    </div>

    {/* Inline Styling with function */}
    <h1 style={headingStyle} className="heading-1">
      {day(d.getHours())}
    </h1>
  </div>,
  document.getElementById("root")
);
