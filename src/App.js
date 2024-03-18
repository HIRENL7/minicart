import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Navbar from './Components/Navbar/Navbar';
import ProductUi from './Pages/ProductUi';
import OrderSummary from './Pages/OrderSummary';
import PrivateRoutes from './Components/permission/PrivateRoutes';
import Customer from './Pages/Customer';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* <Route path={['/', ':id', 'cart', 'customer']} element={<Navbar />} /> */}
          <Route path={"register"} element={<Register />} />
          <Route path={"login"} element={<Login />} />
          <Route path='/' element={<PrivateRoutes><Home /></PrivateRoutes>}>
            <Route path={":id"} element={<ProductUi />} />
          </Route>
          {/* <Route path={"productlisting"} element={<ProductUi />} /> */}
          <Route path={"cart"} element={<OrderSummary />} />
          {/* <Route path='/' element={<PrivateRoutes isAuthenticated={true}><Home /></PrivateRoutes>}></Route>
          <Route path='posts' element={<PrivateRoutes isAuthenticated={true} ><Posts /></PrivateRoutes>}>
            <Route path=':postid' element={<PostWithIdd />}>
              <Route path='new' element={<New />}></Route>
            </Route>
          </Route>
          <Route path='about' element={<PublicRoutes isAuthenticated={false}><About /></PublicRoutes>}></Route>
          <Route path='contact' element={<Home />}></Route> */}
          <Route path={"/*"} element={<h1 className='text-center text-warning mt-4'>404: Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
