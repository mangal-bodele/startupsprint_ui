import './App.css';
import { BrowserRouter } from 'react-router-dom';
import StartupSprintRoutes from './startupsprintRoutes/StartupSprintRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <BrowserRouter>
      <StartupSprintRoutes/>
    </BrowserRouter>
  );
}

export default App;

