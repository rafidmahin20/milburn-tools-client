import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import AllUsers from './Pages/Dashboard/AllUsers';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import RequireAdmin from './Pages/RequireAdmin/RequireAdmin';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import SignUp from './Pages/SignUp/SignUp';
import ToolDetailsPage from './Pages/Tools/ToolDetailsPage';
import ToolsPage from './Pages/Tools/ToolsPage';
import { ToastContainer } from 'react-toastify';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/blogs' element={<Blogs/>}/>
       <Route path='/portfolio' element={<MyPortfolio/>}/>
       <Route path='/tools' element={<ToolsPage/>}/>
       <Route path='/tool/toolDetails/:toolId' element={
         <RequireAuth>
           <ToolDetailsPage/>
         </RequireAuth>
       }/>
       <Route path='/dashboard' element={
         <RequireAuth>
           <Dashboard/>
         </RequireAuth>
       }>
         <Route index element={<MyOrders></MyOrders>}></Route>
         <Route path='addreview' element={<AddReview></AddReview>}></Route>
         <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
         <Route path='payment/:id' element={<Payment></Payment>}></Route>
         <Route path='allUsers' element={
           <RequireAdmin>
             <AllUsers></AllUsers>
           </RequireAdmin>
         }></Route>
         <Route path='addproduct' element={
           <RequireAdmin>
             <AddProduct></AddProduct>
           </RequireAdmin>
         }></Route>
         <Route path='manageproduct' element={
           <RequireAdmin>
             <ManageProducts></ManageProducts>
           </RequireAdmin>
         }></Route>
         <Route path='manageorders' element={
           <RequireAdmin>
            <ManageOrders></ManageOrders>
           </RequireAdmin>
         }></Route>
       </Route>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='*' element={<NotFound/>}/>
     </Routes>
     <ToastContainer/>
     <Footer></Footer>
    </div>
  );
}

export default App;
