console.log('DOM manipulation');

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


//a <p> with red text that says “Hey I’m red!”
const content_1 = document.createElement("p");
content_1.style["color"]="red";
content_1.textContent = "Hey I’m red!";

container.appendChild(content_1);

//an <h3> with blue text that says “I’m a blue h3!”
const content_2 = document.createElement("h3");
content_2.style["color"]="blue";
content_2.textContent="I’m a blue h3!";

container.appendChild(content_2);

//a <div> with a black border and pink background color
const content_3 = document.createElement("div");
content_3.style["backgroundColor"]="pink";
content_3.style["border"] = "5px solid black";

//another <h1> that says “I’m in a div”
const h1_3 = document.createElement("h1")
h1_3.textContent="I'm in a div";
content_3.appendChild(h1_3);

//a <p> that says “ME TOO!”
const p_3 = document.createElement("p");
p_3.textContent="ME TOO!"
content_3.appendChild(p_3);



container.appendChild(content_3);

//Buttons
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World 2");

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World 3");
});

/*
btn3.addEventListener("click", function (e) {
    console.log(e.target);
  });
  */

  btn3.addEventListener("click", function (e) {
    e.target.style.background = "lightblue";
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll(".button_class1");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});


