import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        React + Mobx를 사용한 Todo App 코드 입니다.
      </header>
      <main>
        <h1>Today</h1>
        <ol className="TODO-List">
          <li>
            <input type="checkbox" id="abc" checked />
            <label htmlFor="abc">abc</label>
          </li>
          <li>
            <input type="checkbox" id="abc2" checked />
            <label htmlFor="abc2">abc2</label>
          </li>
          <li>
            <input type="checkbox" id="abc3" checked />
            <label htmlFor="abc3">abc3</label>
          </li>
        </ol>
      </main>
    </div>
  );
}

export default App;
