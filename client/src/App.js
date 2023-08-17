
import './App.css';
import Homes from './screens/Homes';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Login from './screens/Login';
import'../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';

function App() {
  return (
    <Router>
    <div >
      <CartProvider>
    <Routes>
    <Route exact path="/" element={<Homes/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/createuser" element={<Signup/>} />
    <Route exact path="/myorder" element={<MyOrder/>} />
      </Routes>
      </CartProvider>
    </div>
    </Router>
  );
}

export default App;
