
import './App.css';
import Navbar from './Share/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './Share/Footer';
import Home from './Page/Home/Home';
import Purchase from './Page/PurchasePage/Purchase';
import LogIn from './Page/LogIn/LogIn';
import SignUp from './Page/LogIn/SignUp';
import ControlPurchase from './Page/AcControlPurchase/ControlPurchase';
import FrameControl from './Page/FrameControl/FrameControl';
import RequiredAuth from './Page/LogIn/RequireAuth';
import Dashboard from './Page/DashBoard/Dashboard';
import MyOrders from './Page/DashBoard/User/MyOrders';
import AddAReview from './Page/DashBoard/User/AddAReview';
import MyProfile from './Page/DashBoard/User/MyProfile';
import Blog from './Page/Blog/Blog';





function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes >
   <Route path='/' element={<Home></Home>} ></Route>
   <Route path='/home' element={<Home></Home>} ></Route>
   <Route path='/blog' element={<Blog></Blog>} ></Route>
   <Route path='/purchase' element={<RequiredAuth><Purchase></Purchase></RequiredAuth>} ></Route>
   <Route path='/controlPurchase' element={<RequiredAuth><ControlPurchase></ControlPurchase></RequiredAuth>} ></Route>
   <Route path='/frameControl' element={<RequiredAuth><FrameControl></FrameControl></RequiredAuth>  } ></Route>
   <Route path='/logIn' element={<LogIn></LogIn>} ></Route>
   <Route path='/signUp' element={ <SignUp></SignUp>} ></Route>
   <Route path='/dashboard' element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>} >
   <Route index element={<MyOrders></MyOrders>}></Route>
   <Route path='addAReview' element={<AddAReview></AddAReview>}></Route>
   <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>





   </Route>




     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
