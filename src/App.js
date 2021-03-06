import './App.css';
import Navbar from './components/Navbar';
import { publicRoute } from './routes/PublicRoute';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div  >
      <Navbar>
      <Routes>
          {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
