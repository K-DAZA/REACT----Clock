import './App.css';
import Clock from './components/Clock';
import TimeCount from './components/TimeCount';

function App() {
	return (
        <div>
            <h1 className="p-4 text-center text-white">React CLOCK - K-DAZA</h1>
            <div className="">
                <Clock />
            </div>
            <div>
                <TimeCount />
            </div>
        </div>
    );
}

export default App;
