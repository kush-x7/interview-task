import Draggable from "react-draggable";
import { useXarrow } from "react-xarrows";

interface DraggableBoxProps {
  id: string;
  hideArrow?: boolean;
  setIsDraggableArrowActive: (isDraggableArrowActive: boolean) => void;
  setCurrentArrowId: (currentArrowId: string) => void;
}

const DraggableArrow = ({
  id,
  hideArrow,
  setIsDraggableArrowActive,
  setCurrentArrowId,
}: DraggableBoxProps) => {
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

export default DraggableArrow;
