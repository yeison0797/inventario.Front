import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import { PantallaPrincipal } from './paginas/PantallaPrincipal';
import Usuarios from './paginas/Usuarios';
import Productos from './paginas/Productos';
import Informes from './paginas/Informes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<PantallaPrincipal/> } />
              <Route path="productos" element={<Productos/>}/>
              <Route path="informes" element={<Informes/>}/>
              <Route path="usuarios" element={<Usuarios/>}/>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
};
export default App;
