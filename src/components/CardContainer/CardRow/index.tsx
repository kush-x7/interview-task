import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import { useState } from "react";

const DraggableBox = ({ id, rightArrowHidden, setIsArrowActive }: any) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div
        onMouseDownCapture={() => {
          console.log("arrow ko pakad liya");
          setIsArrowActive(true);
        }}
        onMouseUpCapture={() => {
          console.log("arrow ko chor diya");
          setIsArrowActive(false);
        }}
        className={rightArrowHidden ? "" : "arrow"}
        id={id}
      ></div>
    </Draggable>
  );
};

const ArrowStyling = ({
  leftCardPosition,
  whichRowArrow,
  rightCardPosition,
}: any) => {
  return (
    <Xarrow
      start={leftCardPosition ?? rightCardPosition}
      end={whichRowArrow}
      headColor={"#D3ECA7"}
      headShape={"circle"}
      showHead={false}
      headSize={4}
      tailColor={"#D3ECA7"}
      showTail={rightCardPosition ? false : true}
      tailSize={4}
      lineColor={rightCardPosition ? "none" : "#D3ECA7"}
      strokeWidth={2}
      curveness={0.7}
      tailShape={"circle"}
      //   passProps={{ cursor: "pointer", pointerEvents: "none" }}
      startAnchor={rightCardPosition ? "left" : "right"}
      zIndex={10}
    />
  );
};

const CardRow = ({
  leftCardPosition,
  rightCardPosition,
  whichRowArrow,
  leftCardText,
  rightCardText,
}: any) => {
  const [isArrowActive, setIsArrowActive] = useState(false);
  const [isCardActive, setIsCardActive] = useState(false);
  // const [isborderShowing, setIsBorderShowing] = useState(false);

  // const handleMouseEnter = (e: any) => {
  //   if (isArrowActive) {
  //     console.log("card ke andar agye");
  //     e.target.classList.add("border-color");
  //     setIsBorderShowing(true);

  //     // e.target.classList.add("border-color");
  //   }
  // };

  // const handleMouseLeave = (e: any) => {
  //   console.log("card se bahar agye");
  //   e.target.classList.remove("border-color");
  // };

  return (
    <>
      <div className="arrow_plus_card_container right-card">
        <Xwrapper>
          <div className="card" id={leftCardPosition}>
            {leftCardText}
          </div>
          <DraggableBox
            id={whichRowArrow}
            setIsArrowActive={setIsArrowActive}
          />
          <ArrowStyling
            whichRowArrow={whichRowArrow}
            leftCardPosition={leftCardPosition}
          />
        </Xwrapper>
      </div>

      <div className="arrow_plus_card_container">
        <Xwrapper>
          <div
            className="card tempBorder"
            id={rightCardPosition}
            onMouseEnter={(e: any) => {}}
            onMouseOut={(e: any) => e.target.classList.remove("border-color")}
          >
            {rightCardText}
            <div className="mergeArrow"></div>
          </div>
          <DraggableBox id={whichRowArrow + 10} rightArrowHidden={true} />
          <ArrowStyling
            whichRowArrow={whichRowArrow + 10}
            rightCardPosition={rightCardPosition}
          />
        </Xwrapper>
      </div>
    </>
  );
};

export default CardRow;
