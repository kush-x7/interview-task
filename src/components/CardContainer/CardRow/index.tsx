import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import { useState, useRef } from "react";

const DraggableBox = ({
  id,
  rightArrowHidden,
  setIsArrowActive,
  isArrowActive,
}: any) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div
        onPointerDown={() => setIsArrowActive(true)}
        onPointerUp={() => setIsArrowActive(false)}
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
  handlePointerEnter,
  handlePointerLeave,
  handlePointerUp,
  mergeArrow,
  isArrowActive,
  setIsArrowActive,
}: any) => {
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
            isArrowActive={isArrowActive}
          />
          <ArrowStyling
            whichRowArrow={whichRowArrow}
            leftCardPosition={leftCardPosition}
          />
        </Xwrapper>
      </div>

      <div className="arrow_plus_card_container">
        <Xwrapper>
          <div className="card tempBorder" id={rightCardPosition}>
            {rightCardText}
            <div
              ref={mergeArrow}
              className="mergeArrow"
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
              onPointerUpCapture={handlePointerUp}
            ></div>
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
