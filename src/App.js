import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import StartupSprintRoutes from './startupsprintRoutes/StartupSprintRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <StartupSprintRoutes/>
    </BrowserRouter>
  );
}

export default App;
