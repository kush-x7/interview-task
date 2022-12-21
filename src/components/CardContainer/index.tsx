import "./cardContainer.css";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import CardRow from "./CardRow";
import { useRef, useState } from "react";

const CardContainer = () => {
  const [isArrowActive, setIsArrowActive] = useState(false);
  const mergeArrow = useRef() as React.MutableRefObject<HTMLDivElement>;
  const handlePointerEnter = (e: any) => {
    if (isArrowActive) {
      console.log(e.target);
      e.target.parentNode.classList.add("border-color");
    }
  };
  const handlePointerLeave = (e: any) => {
    if (isArrowActive) {
      e.target.parentNode.classList.remove("border-color");
    }
  };

  const handlePointerUp = (e: any) => {
    if (isArrowActive) {
      e.target.style.opacity = "1";
      e.target.parentNode.classList.add("border-color");
      setIsArrowActive(false);
    }
  };

  return (
    <div className="cards-container">
      <CardRow
        leftCardPosition="1"
        leftCardText="Match me with the options, I am 2"
        rightCardPosition="2"
        rightCardText="This is option 1 of MTF"
        whichRowArrow="first"
        handlePointerEnter={handlePointerEnter}
        handlePointerLeave={handlePointerLeave}
        handlePointerUp={handlePointerUp}
        mergeArrow={mergeArrow}
        isArrowActive={isArrowActive}
        setIsArrowActive={setIsArrowActive}
      />
      <CardRow
        leftCardPosition="3"
        leftCardText="Match me with the options, I am 1"
        rightCardPosition="4"
        rightCardText="This is option 2 of MTF"
        whichRowArrow="second"
        handlePointerEnter={handlePointerEnter}
        handlePointerLeave={handlePointerLeave}
        handlePointerUp={handlePointerUp}
        mergeArrow={mergeArrow}
        isArrowActive={isArrowActive}
        setIsArrowActive={setIsArrowActive}
      />
    </div>
  );
};

export default CardContainer;
