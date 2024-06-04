
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import StartupSprintRoutes from './startupsprintRoutes/StartupSprintRoutes';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomepageNavbar from './components/HomePageNavbar';

function App() {
  
  return(
    <>
      <BrowserRouter>
        <HomepageNavbar/>
        <StartupSprintRoutes />
      </BrowserRouter>
    </>
  )
}
export default App;

