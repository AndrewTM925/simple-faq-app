// import logo from './logo.svg';
import './App.css';
import './components/FAQ'
import FAQ from './components/FAQ';

const questions = [
  {
    question: "Where are you from?",
    answer: "Born in Virginia Beach, VA and raised in Raleigh, NC.",
  },
  {
    question: "What are you passionate about?",
    answer: "I'm obsessed with growth and new challenges. And soccer too of course.",
  },
  {
    question: "What does your nickname stand for?",
    answer: "A.T.",
  },
  {
    question: "What is the most valuable lesson you've learned as of late?",
    answer: "You cannot be afriad to fail. Without failure are you evening trying?"
  }
];


function App() {
  return (
      <FAQ questions={questions}/>
  );
}

export default App;
