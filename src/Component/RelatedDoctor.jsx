// import React from 'react'

// const RelatedDoctor = () => {

// const RelatedDoctors = ({speciality,docId}) => {
// const {doctors} =useContext(AppContext)
// const[relDoc,setRelDocs] = useState([])

// useEffect(()=>{
// if(doctors.length > 0&& speciality){
//     const doctorsData = doctors.filter((doc)=>doc.speciality === speciality&& doc.id !== docId)
//     setRelDocs(doctorsData)
// }
// },[doctors,speciality,docId])
//   return (
//     (item, index) => (
//         <div  onClick={()=>navigate(`/appointments/${item._id}`)}
//           className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col items-center'
//           key={index}
//         >
//           {/* Centered Image */}
//           <img
//             className='bg-blue-50 w-full h-48 object-contain'
//             src={item.image}
//             alt=''
//           />
//           <div className='p-4 text-center'>
//             <div className='flex items-center gap-2 text-sm text-green-500 justify-center'>
//               <p className='w-2 h-2 bg-green-500 rounded-full'></p>
//               <p>Available</p>
//             </div>
//             <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//             <p className='text-gray-600 text-sm'>{item.speciality}</p>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* Centered Button */}
//     <div className='w-full flex justify-center mt-10'>
//       <button onClick ={()=> {navigate('/doctors'); scrollTo(0,0) }}  className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full'>More</button>
//     </div>
//   </div>
//   )
// }
// }
// export default RelatedDoctor






import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctor = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext); // Accessing the AppContext
  const [relDoc, setRelDocs] = useState([]); // State to hold related doctors
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      // Filter doctors based on speciality and exclude the current doctor
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>

      {/* Grid Layout for Images */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 pt-5 px-3 sm:px-0'>
        {relDoc.slice(0, 5).map((item, index) => (
          <div  onClick={()=>{navigate(`/appointments/${item._id}`); scrollTo(0,0)}}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col items-center'
            key={index}
          >
            {/* Centered Image */}
            <img
              className='bg-blue-50 w-full h-48 object-contain'
              src={item.image}
              alt=''
            />
            <div className='p-4 text-center'>
              <div className='flex items-center gap-2 text-sm text-green-500 justify-center'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className='w-full flex justify-center mt-10'>
        <button onClick ={()=> {navigate('/doctors'); scrollTo(0,0) }}  className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full'>More</button>
      </div>
    </div>
  );
};

export default RelatedDoctor;
