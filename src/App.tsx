import "./App.css";

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
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
