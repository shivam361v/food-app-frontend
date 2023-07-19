import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Cart from './screens/Cart';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';

function App() {
  return (

    // Single page routing for the application
    <CartProvider>
      <Router>
      <div>
        {/* //<h2>Hi Shivam. Lets start your project</h2> */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/myorder" element={<MyOrder/>} />
          {/* 
          
          */}
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
