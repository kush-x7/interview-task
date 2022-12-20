import "./App.css";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
// import SimpleExample from "./SimpleExample";

const DraggableBox = ({ id }: any) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div className="card " id={id}>
        {id}
      </div>
    </Draggable>
  );
};

function App() {
  return (
    <>
      <main className="container">
        <div className="container__lesson">
          <div className="container__lesson--heading">
            <div className="heading__logo">logo</div>
            <div className="heading__text">Micro Lesson</div>
            <div className="heading__loader">loader</div>
          </div>

          <div className="container__lesson--title">
            <h2 className="title">
              Which team reflects a psychologically safe environment
            </h2>
          </div>

          <div className="container__lesson--cards-parent">
            <Xwrapper>
              <div className="card" id="box-1">
                Match me with the options, I am 2
              </div>
              <DraggableBox id={"box-2"} />
              <Xarrow
                start="box-1"
                end="box-2"
                headColor={"#D3ECA7"}
                lineColor={"#D3ECA7"}
                tailColor={"#D3ECA7"}
                strokeWidth={2}
                headSize={4}
                tailSize={4}
                curveness={0.7}
                // showHead={false}
                headShape={"circle"}
                showTail={true}
                tailShape={"circle"}
                passProps={{ cursor: "pointer", pointerEvents: "none" }}
              />
            </Xwrapper>

            <Xwrapper>
              <div className="card" id="box-3">
                Match me with the options, I am 2
              </div>
              <DraggableBox id={"box-4"} />
              <Xarrow
                start="box-3"
                end="box-4"
                headColor={"#D3ECA7"}
                lineColor={"#D3ECA7"}
                tailColor={"#D3ECA7"}
                strokeWidth={2}
                headSize={4}
                tailSize={4}
                curveness={0.7}
                // showHead={false}
                headShape={"circle"}
                showTail={true}
                tailShape={"circle"}
                passProps={{ cursor: "pointer", pointerEvents: "none" }}
              />
            </Xwrapper>

            {/* <Xwrapper>
              <div className="card" id="box-3"></div>
              <DraggableBox id={"box-4"} />
              <Xarrow start="box-3" end="box-4" />
            </Xwrapper>
            <Xwrapper>
              <div className="card" id="box-5"></div>
              <DraggableBox id={"box-6"} />
              <Xarrow start="box-5" end="box-6" />
            </Xwrapper> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
