import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import { useState, useRef, useEffect } from "react";

const DraggableBox = ({
  id,
  rightArrowHidden,
  isArrowActive,
  setIsArrowActive,
  setCurrentArrowId,
}: any) => {
  const updateXarrow = useXarrow();

  useEffect(() => {
    console.log("Arrow state is: ", isArrowActive);
  }, [isArrowActive]);

  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div
        // When we press the mouse
        onPointerDown={(e: any) => {
          console.log("arrow ko click kara");
          setCurrentArrowId(e.target.id);
          setIsArrowActive(true);
        }}
        // When we release the mouse
        onPointerUpCapture={() => {
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
  setIsArrowActive,
  isArrowActive,
  leftCardPosition,
  rightCardPosition,
  whichRowArrow,
  leftCardText,
  rightCardText,
  handlePointerEnter,
  handlePointerLeave,
  handlePointerUp,
  handlePointerDownCapture,
  setCurrentArrowId,
}: any) => {
  return (
    <>
      <div className="card_with_attached_arrow--container right-card">
        <Xwrapper>
          <div className="card" id={leftCardPosition}>
            {leftCardText}
          </div>
          <DraggableBox
            id={whichRowArrow}
            setIsArrowActive={setIsArrowActive}
            isArrowActive={isArrowActive}
            setCurrentArrowId={setCurrentArrowId}
          />
          <ArrowStyling
            whichRowArrow={whichRowArrow}
            leftCardPosition={leftCardPosition}
          />
        </Xwrapper>
      </div>

      <div className="card_with_attached_arrow--container">
        <Xwrapper>
          <div className="card tempBorder" id={rightCardPosition}>
            {rightCardText}
            <div
              className="mergeArrow"
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
              onPointerUpCapture={handlePointerUp}
              onPointerDownCapture={handlePointerDownCapture}
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
