import "./cardContainer.css";
import CardRow from "./CardRow";
import { cardsData } from "./cardsData";
import { useRef, useState } from "react";

const CardContainer = () => {
  const [isArrowActive, setIsArrowActive] = useState(false);
  const mergeArrow = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handlePointerEnter = (e: any) => {
    if (isArrowActive) {
      console.log(e.target.style);

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
