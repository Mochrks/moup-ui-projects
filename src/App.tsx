import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router';

function App() {

  return (
    <>
      <div>
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </>
  )
}

export default App
