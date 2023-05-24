import "./App.css";
import Clock from "./components/Clock";
import ClockContextProvider from "./context/ClockContext";

function App() {
  return (
    <div className="clock">
      <ClockContextProvider >
        <Clock />
      </ClockContextProvider>
    </div>
  );
}

export default App;
