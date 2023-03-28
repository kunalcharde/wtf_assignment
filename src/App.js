
import './App.css';
import { GymContextProvider } from './Context/gymContext';
import NavRoutes from './Routes';

function App() {
  return (
    <div className="App">
      <GymContextProvider>
          <NavRoutes/>
      </GymContextProvider>
    </div>
  );
}

export default App;
