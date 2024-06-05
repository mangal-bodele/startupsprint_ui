
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import StartupSprintRoutes from './startupsprintRoutes/StartupSprintRoutes';

function App() {
  return (
    <BrowserRouter>
      <StartupSprintRoutes/>
    </BrowserRouter>
  );
}

export default App;
