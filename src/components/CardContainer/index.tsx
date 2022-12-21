import "./cardContainer.css";
import CardRow from "./CardRow";
import { useRef, useState } from "react";

const cardData = [
  {
    key: 1,
    leftCardText: "Match me with the options, I am 2",
    leftCardPosition: "1",
    rightCardText: "This is option 1 of MTF",
    rightCardPosition: "2",
    whichRowArrow: "first",
  },
  {
    key: 2,
    leftCardText: "Match me with the options, I am 1",
    leftCardPosition: "3",
    rightCardText: "This is option 2 of MTF",
    rightCardPosition: "4",
    whichRowArrow: "second",
  },
  {
    key: 3,
    leftCardText: "Match me with the options, I am 3",
    leftCardPosition: "5",
    rightCardText: "This is option 3 of MTF",
    rightCardPosition: "6",
    whichRowArrow: "third",
  },
];

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
    <>
      <div className="cards-container">
        {cardData.map((data) => {
          return (
            <CardRow
              key={data.key}
              leftCardPosition={data.leftCardPosition}
              leftCardText={data.leftCardText}
              rightCardPosition={data.rightCardPosition}
              rightCardText={data.rightCardText}
              whichRowArrow={data.whichRowArrow}
              handlePointerEnter={handlePointerEnter}
              handlePointerLeave={handlePointerLeave}
              handlePointerUp={handlePointerUp}
              mergeArrow={mergeArrow}
              isArrowActive={isArrowActive}
              setIsArrowActive={setIsArrowActive}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
