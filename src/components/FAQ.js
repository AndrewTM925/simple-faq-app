// import from "react";
import { React, useState } from "react";
import "./FAQ.css";

const QuestionDetails = ({ id, question, answer }) => {
  const [toggleOn, setToggleOn] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setToggleOn(!toggleOn)
  };

  return (
    <section id={id} className="faq">
      <div className="chevron">
        <button className="chevron" onClick={handleClick}>
          {toggleOn ? (
            <i>-</i>
          ) : (
            <i>+</i>
          )}
        </button>
      </div>
      <div>
        <p className="question-text">{question}</p>
        {toggleOn && <p className="answerText">{answer}</p>}
      </div>
    </section>
  );
};

const FAQ = ({ questions }) => {
  return (
    <main className="faq-container">
      <h1>FAQs</h1>
      {questions.map((question, index) => (
        <QuestionDetails
          key={index}
          id={'FAQ'+ index}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </main>
  );
};

export default FAQ;
