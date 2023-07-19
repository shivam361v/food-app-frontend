import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Badge from "react-bootstrap/Badge";
import Model from '../Model';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function Navbar() 
{
  let data = useCart();
  const [cartView, setCartView] = useState(false)
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">

        <div className='container-fluid'>

        <Link className="navbar-brand fs-1 fst-italic" to="/">YumFood</Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
        
          <ul className="navbar-nav me-auto mb-2">

            <li className="nav-item active">
              <Link className="nav-link active fs-5" aria-current="page" to="/">Home <span className="sr-only"></span></Link>
            </li>
            
            {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" href="#">Action</Link>
                <Link className="dropdown-item" href="#">Another action</Link>
                <Link className="dropdown-item" href="#">Something else here</Link>
              </div>
            </li> */}
            {
              (localStorage.getItem("authToken")) ? 
              <li className='nav-item'>
                <Link className='nav-link active fs-5' aria-current="page" to="/myorder"> My Order</Link>
              </li>
              : ""              
            }
          </ul>
          {
            (!localStorage.getItem("authToken")) ?
            <div className='d-flex'>
              
              <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
              <Link className="btn bg-white text-success mx-1" to="/signup">SignUp</Link>
            
            </div>
            :
            <div>
              <div className='btn bg-white text-success mx-2' onClick={() => setCartView(true)}>
                My Cart{""}
                <Badge pill bg="danger">{data.length}</Badge>
              </div>
              {
                cartView ?
                <Model onClose={() => setCartView(false)}><Cart/></Model> :
                null
              }
              <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>Logout</div>
            </div>
          }
        </div>
        </div>
      </nav>

    </div>
  )
}
