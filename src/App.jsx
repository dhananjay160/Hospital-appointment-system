// //App.jsx
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Navbar from './Component/Navbar';
// const App = () => {
//   return (
//     <div >
//      <Navbar /> 
//       <Routes>
//         <Route path='/' element ={<Home />} />
//         <Route path='/Doctor' element={<Doctor />} />
//         <Route path='/Doctor/:speciality' element={<Doctor />} />
//         <Route path='/Login' element={<Login />} />
//         <Route path='/About' element={<About />} />
//         <Route path='/Contact' element={<Contact />} />
//         <Route path='/my-profile' element={<Myprofile />} />
//         <Route path='/my-appointments' element={<MyAppoitment />} />
//         <Route path='/appointments/:docId' element={<Appointments />} />
//       </Routes>

//     </div>
//   )
// }

// export default App





// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Component/Navbar';
import Doctor from './pages/Doctor';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Myprofile from './pages/Myprofile';
import MyAppoitment from './pages/MyAppoitment';
import Appointments from './pages/Appointments';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/doctors/:speciality' element={<Doctor />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/my-profile' element={<Myprofile />} />
        <Route path='/my-appointments' element={<MyAppoitment />} />
        <Route path='/appointments/:docId' element={<Appointments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
