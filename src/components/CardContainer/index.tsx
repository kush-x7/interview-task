import "./cardContainer.css";
import CardRow from "./CardRow";
import { cardsData } from "./cardsData";
import { useState } from "react";

const CardContainer = () => {
  // 1 State to check whether the user have clicked on the arrow and started dragging it or not.
  const [isDraggableArrowActive, setIsDraggableArrowActive] = useState(false);
  const [currentArrowId, setCurrentArrowId] = useState(undefined);

  const addBorder = (e: Event & { target: HTMLElement }) => {
    const parentNode = e.target.parentNode as NonNullable<HTMLElement>;
    parentNode.classList.add("border-color");
  };

  const removeBorder = (e: Event & { target: HTMLElement }) => {
    const parentNode = e.target.parentNode as NonNullable<HTMLElement>;
    parentNode.classList.remove("border-color");
  };

  // When we bring the arrow inside that little circle at right
  const handlePointerEnter = (e: Event & { target: HTMLElement }) => {
    if (isDraggableArrowActive) {
      addBorder(e);
    }
  };

  // When we are leaving the circle
  const handlePointerLeave = (e: Event & { target: HTMLElement }) => {
    const totalClassesArrLength = e.target.classList.length;
    // We are checking length of classes of that little circle because initially it has only one and when we attach an arrow then we are adding it's class to this circle for the reference.
    if (totalClassesArrLength > 1) return;
    if (isDraggableArrowActive) {
      removeBorder(e);
    }
  };

  // So Now when we bring our draggable arrow and drop it on the circle || Releasing the mouse
  const handlePointerUp = (e: Event & { target: HTMLElement }) => {
    if (isDraggableArrowActive) {
      const littleCircleClassList = e.target.classList;
      littleCircleClassList.add(`${currentArrowId}`);
      setCurrentArrowId(undefined);
      e.target.style.opacity = "0";
      addBorder(e);
      setIsDraggableArrowActive(false);
    }
  };

  // Again clicking the arrow that we left on our little circle
  const handlePointerDownCapture = (e: Event & { target: HTMLElement }) => {
    const littleCircleClassList = e.target.classList;

    if (littleCircleClassList.length > 1) {
      const arrowNameToBeRemoved = e.target.classList[1];
      littleCircleClassList.remove(`${arrowNameToBeRemoved}`);
      e.target.style.opacity = "0.2";
      e.target.style.zIndex = "1";
      removeBorder(e);
      setTimeout(() => {
        e.target.style.zIndex = "100";
      }, 2000);
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
              isDraggableArrowActive={isDraggableArrowActive}
              setIsDraggableArrowActive={setIsDraggableArrowActive}
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
