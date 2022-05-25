import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import SignUp from './Pages/SignUp/SignUp';
import ToolDetailsPage from './Pages/Tools/ToolDetailsPage';
import ToolsPage from './Pages/Tools/ToolsPage';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
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
       </Route>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
