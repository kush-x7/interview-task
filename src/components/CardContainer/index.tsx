import "./cardContainer.css";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import CardRow from "./CardRow";

const CardContainer = () => {
  return (
    <div className="cards-container">
      <CardRow
        leftCardPosition="1"
        leftCardText="Match me with the options, I am 2"
        rightCardPosition="2"
        rightCardText="This is option 1 of MTF"
        whichRowArrow="first"
      />
      <CardRow
        leftCardPosition="3"
        leftCardText="Match me with the options, I am 1"
        rightCardPosition="4"
        rightCardText="This is option 2 of MTF"
        whichRowArrow="second"
      />
    </div>
  );
};

export default CardContainer;
