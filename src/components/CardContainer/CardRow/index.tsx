import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";

const DraggableBox = ({ id, rightArrowHidden }: any) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div className={rightArrowHidden ? "" : "arrow"} id={id}></div>
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
      headSize={4}
      tailColor={"#D3ECA7"}
      showTail={true}
      tailSize={4}
      lineColor={rightCardPosition ? "none" : "#D3ECA7"}
      strokeWidth={2}
      curveness={0.7}
      showHead={false}
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
  return (
    <>
      <div className="arrow_plus_card_container">
        <Xwrapper>
          <div className="card" id={leftCardPosition}>
            {leftCardText}
          </div>
          <DraggableBox id={whichRowArrow} />
          <ArrowStyling
            whichRowArrow={whichRowArrow}
            leftCardPosition={leftCardPosition}
          />
        </Xwrapper>
      </div>

      <div className="arrow_plus_card_container">
        <Xwrapper>
          <div className="card" id={rightCardPosition}>
            {rightCardText}
          </div>
          <DraggableBox id={whichRowArrow + 10} rightArrowHidden={true} />
          <ArrowStyling
            whichRowArrow={whichRowArrow + 10}
            rightCardPosition={rightCardPosition}
          />
        </Xwrapper>
      </div>
      {/* <div className="arrow_plus_card_container">
        <Xwrapper>
          <div className="card" id="box-2">
            Match me with the options, I am 2
          </div>
          <DraggableBox id={"arrow-2"} />
          <Xarrow
            start="box-2"
            end="arrow-2"
            startAnchor={"left"}
            headColor={"#D3ECA7"}
            lineColor={"#D3ECA7"}
            tailColor={"#D3ECA7"}
            strokeWidth={2}
            headSize={4}
            tailSize={4}
            curveness={0.7}
            headShape={"circle"}
            showTail={true}
            tailShape={"circle"}
            passProps={{ cursor: "pointer", pointerEvents: "none" }}
            showHead={false}
          />
        </Xwrapper>
      </div> */}
    </>
  );
};

export default CardRow;
