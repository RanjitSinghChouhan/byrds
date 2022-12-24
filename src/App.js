import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Dashboard />
    </div>

    // <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    //   <div>
    //     <div className="text-xl font-medium text-red-500">ChitChat</div>
    //     <p className="text-slate-500">You have a new message!</p>
    //   </div>
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
