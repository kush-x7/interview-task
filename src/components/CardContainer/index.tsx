import "./cardContainer.css";
import CardRow from "./CardRow";
import { cardsData } from "./cardsData";
import { useState } from "react";

const CardContainer = () => {
  // 1 State to check whether the user have clicked the arrow for dragging or not
  const [isArrowActive, setIsArrowActive] = useState(false);
  const [isCircleActive, setCircleActive] = useState(false);
  const [isArrowBelowCircle, setIsArrowBelowCircle] = useState(false);
  const [currentArrowId, setCurrentArrowId] = useState(undefined);

  // When we bring the arrow inside that little circle at right
  const handlePointerEnter = (e: any) => {
    if (isArrowActive) {
      console.log("hum circle ke andar agye hai");
      e.target.parentNode.classList.add("border-color");
    }
  };
  // When we are leaving the circle
  const handlePointerLeave = (e: any) => {
    if (e.target.classList.length > 1) return;
    if (isArrowActive) {
      console.log("hum circle ke bahar jarahe hai");
      e.target.parentNode.classList.remove("border-color");
    }
  };

  const handlePointerUp = (e: any) => {
    if (isArrowActive) {
      console.log("arrow circle ke andar hai");
      setCircleActive(true);
      setIsArrowBelowCircle(true);
      e.target.classList.add(`${currentArrowId}`);
      setCurrentArrowId(undefined);
      e.target.style.opacity = "0";
      e.target.parentNode.classList.add("border-color");
      setIsArrowActive(false);
    }
  };

  const handlePointerDownCapture = (e: any) => {
    const totalClasses = e.target.classList.length;
    const classNameToBeRemoved = e.target.classList[1];

    if (totalClasses > 1) {
      setIsArrowBelowCircle(false);
      e.target.classList.remove(`${classNameToBeRemoved}`);
      e.target.style.opacity = "0.2";
      e.target.style.zIndex = "1";
      e.target.parentNode.classList.remove("border-color");
      setTimeout(() => {
        e.target.style.zIndex = "100";
      }, 1000);
      console.log("fhirse click kara");
    }
  };

  return (
    <>
      <div className="cards-container">
        {cardsData.map((data) => {
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
              isArrowActive={isArrowActive}
              setIsArrowActive={setIsArrowActive}
              handlePointerDownCapture={handlePointerDownCapture}
              setCurrentArrowId={setCurrentArrowId}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
