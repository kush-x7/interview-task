import "./completeQuiz.css";
import CardContainer from "../CardContainer";
import Nav from "./Nav";
import Title from "./Title";

const CompleteQuiz = () => {
  return (
    <div className="quiz ">
      <Nav />
      <Title />
      <CardContainer />
    </div>
  );
};

export default CompleteQuiz;
