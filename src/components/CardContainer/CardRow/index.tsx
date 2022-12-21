import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";

// This for the draggable arrow
const DraggableBox = ({
  id,
  hideArrow,
  setIsDraggableArrowActive,
  setCurrentArrowId,
}: any) => {
  const updateXarrow = useXarrow();

  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div
        // When we start dragging our arrow
        onPointerDown={(e: React.MouseEvent<HTMLElement>) => {
          const element = e.target as Element;
          setCurrentArrowId(element.id);
          setIsDraggableArrowActive(true);
        }}
        // When we release the mouse
        onPointerUpCapture={() => {
          setIsDraggableArrowActive(false);
        }}
        className={hideArrow ? "" : "arrow"}
        id={id}
      ></div>
    </Draggable>
  );
};

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
      //   passProps={{ cursor: "pointer", pointerEvents: "none" }}
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
          <DraggableBox
            id={whichRowArrow}
            setIsDraggableArrowActive={setIsDraggableArrowActive}
            isDraggableArrowActive={isDraggableArrowActive}
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
          <DraggableBox id={whichRowArrow + 10} hideArrow={true} />
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
