import CounterDisplay from "./components/CounterDisplay.jsx";
import CounterControls from "./components/CounterControls.jsx";
import './App.css'

function App() {
    return (
        <>
            <div className="App">
                <h1>Лічильник з Context</h1>
                <CounterDisplay />
                <CounterControls />
            </div>
        </>
    );
}

export default App
