import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Content />
    <Footer />
  </div>);

function Header() {
  return <header><i><b>Question Quiz</b></i></header>;
}

function Content() {
  function getResults(event) {
    let marks = 0;
    event.preventDefault();
    for (let i = 1; i <= 10; i++) {
      let ans="q"+i;
      let a = event.target.elements[ans].value;
      if (a === "All of the above." && i===1 ) {
        marks++;
      }
      else if (a === "Liver" && i === 3) {
        marks++;
      }
      else if (a === "Pacific Ocean" && i === 4) {
        marks++;
      }
      else if (a === "Canberra" && i === 5) {
        marks++;
      }
      else if (a === "Mars" && i === 6) {
        marks++;
      }
      else if (a === "Yen" && i === 7) {
        marks++;
      }
      else if (a === "Japan" && i === 8) {
        marks++;
      }
      else if (a === "Mount Everest" && i === 9) {
        marks++;
      }
      else if (a === "Asia" && i === 10) {
        marks++;
      }
    }
    alert("Your total marks is: " + marks);
    window.location.reload();
  }
  return (
    <div >
      <form onSubmit={getResults}>
        <Question
          q="1. What is java ?"
          op1="Java is oops language."
          op2="Java is wora."
          op3="Java is a Architecture nutral langauage."
          op4="All of the above."
          name="q1" />
        <Question
          q="2. What is SQL ?"
          op1="SQL is query language."
          op2="SQL performs CRUD operation on RDB."
          op3="SQL is works on only Relational DB. "
          op4="All of the above."
          name="q2" />
        <Question
          q="3. What is the largest organ in the human body?"
          op1="Heart"
          op2="Liver"
          op3="Brain"
          op4="Skin"
          name="q3" />
        <Question
          q="4. What is the largest ocean in the world?"
          op1="Atlantic Ocean"
          op2="Indian Ocean"
          op3="Arctic Ocean"
          op4="Pacific Ocean"
          name="q4" />
        <Question
          q="5. What is the capital of Australia?"
          op1="Sydney"
          op2="Melbourne"
          op3="Canberra"
          op4="Perth"
          name="q5" />
        <Question
          q="6. Which planet is known as the 'Red Planet'? "
          op1="Venus"
          op2="Mars"
          op3="Jupiter"
          op4="Saturn"
          name="q6" />
        <Question
          q="7. What is the currency of Japan?"
          op1="Yen"
          op2="Euro"
          op3="Dollar"
          op4="Rupee"
          name="q7" />
        <Question
          q="8. Which country is known as the 'Land of the Rising Sun'?"
          op1="China"
          op2="South Korea"
          op3="Japan"
          op4="Thailand"
          name="q8" />
        <Question
          q="9. What is the tallest mountain in the world?"
          op1="Mount Kilimanjaro"
          op2="Mount Everest"
          op3="Mount McKinley"
          op4="Mount Fuji"
          name="q9" />
        <Question
          q="10. Which continent is the most populous?"
          op1="Asia"
          op2="Africa"
          op3="Europe"
          op4="North America"
          name="q10" />
        <br></br>
        <input type="submit" style={{ backgroundColor: "orangered" }} value="submit the quiz"></input>

        <br></br>
        <br></br>
      </form>
    </div>

  );
}

function Question(props) {
  return (
    <div>
      <h2>{props.q}</h2>

      <label>
        <input type="radio" name={props.name} value={props.op1} />
        {props.op1}<br></br>

        <input type="radio" name={props.name} value={props.op2} />
        {props.op2}<br></br>

        <input type="radio" name={props.name} value={props.op3} />
        {props.op3}<br></br>

        <input type="radio" name={props.name} value={props.op4} />
        {props.op4}
      </label>

    </div>);
}

function Footer() {
  return <footer>ankur29mishra</footer>;
}