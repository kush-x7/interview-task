import Xarrow, { Xwrapper } from "react-xarrows";
import DraggableArrow from "../DragableArrow";

// This for the draggable arrow

interface ArrowStylingProps {
  leftCardPosition: string;
  whichRowArrow: string;
  rightCardPosition: string;
}

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
      startAnchor={rightCardPosition ? "left" : "right"}
      zIndex={10}
    />
  );
};

const CardRow = ({
  setIsDraggableArrowActive,
  isDraggableArrowActive,
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
          <DraggableArrow
            id={whichRowArrow}
            setIsDraggableArrowActive={setIsDraggableArrowActive}
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
