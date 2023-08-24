import React,{ useState } from 'react'
import { Link,useNavigate} from "react-router-dom"

import { useCart, useDispatchCart } from '../components/ContextReducer';
import Modals from '../Modals';
import Badge from 'react-bootstrap/Badge';
import Cart from '../screens/Cart';


export default function Navbar(props) {
  const [cartView, setCartView] = useState(false)
  let data = useCart();
  const navigate = useNavigate();

  const handleLogout=()=>{

    
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-bold" to="/">Crave Hub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fst-bold fs-4" aria-current="page" to="/" style={{ color: 'black' }} >Home</Link>
        </li>
        {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-4 mx-4 active fst-bold " aria-current="page" to="/myOrder" style={{ color: 'black' }}  >My Orders</Link> 
                                </li> : ""}

       
      </ul>
      {(!localStorage.getItem("authToken")) ?
       < div className='d-flex'>
          <Link className="btn bg-white text text-success mx-2 " to="/login">Login</Link>
        
          <Link className="btn bg-white text text-success mx-2" to="/createuser">Signup</Link>
        </div>
        :
        <div>

   <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>
         MyCart{" "}
         <Badge pill bg="danger"> 2</Badge>
         </div>
         {cartView ? <Modals onClose={() => setCartView(false)}><Cart></Cart></Modals> :null }

        <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
        Logout</div>

       
        </div>
        }
       
    
    </div>
    
  </div>
</nav>
    </div>
  )
}
