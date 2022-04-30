import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import About from './Pages/About/About'
import PracticeAreas from './Pages/Home/PracticeAreas/PracticeAreas';
import Blogs from './Pages/Blogs/Blogs'
import Login from './Pages/Login/Login';
import AllPracticeArea from './Pages/Home/AllPracticeArea/AllPracticeArea';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Register/Register'
import CheckOut from './Pages/CheckOut/CheckOut';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/practiceareas' element={<AllPracticeArea></AllPracticeArea>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>

            <ServiceDetails></ServiceDetails>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='*' element={<NotFound></NotFound>}> </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
