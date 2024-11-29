import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctor = () => {
  const [filterDoc, setFilterDoc] = useState([]);
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false); 
  const navigate = useNavigate();

  const applyfilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyfilter();
  }, [doctors, speciality]);
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-6 py-8 bg-gray-50 min-h-screen">
      {/* Left Sidebar */}
      <button className={`py-1 px-3  border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}
 onClick={()=>setShowFilter(prev => !prev)}>   Filter  </button>
      <div  className={`w-full lg:w-1/4 flex flex-col gap-4 ${showFilter ? 'flex' : ' hidden sm:flex'}`}>
        <p className="text-gray-700 font-semibold text-lg mb-4">
          Browse through the doctors' specialties:
        </p>
        <p
          onClick={() =>
            speciality === "General physician"
              ? navigate("/doctors")
              : navigate("/doctors/General physician")
          }
          className='w-full px-4 py-2 text-left border border-gray-300 rounded-lg text-gray-600 bg-white hover:bg-blue-50 hover:text-blue-700 transition-all cursor-pointer '
        >
          General physician
        </p>
        <p
          onClick={() =>
            speciality === "Dermatologist"
              ? navigate("/doctors")
              : navigate("/doctors/Dermatologist ")
          }
          className='w-full px-4 py-2 text-left border border-gray-300 rounded-lg text-gray-600 bg-white hover:bg-blue-50 hover:text-blue-700 transition-all cursor-pointer '
        >
          Dermatologist
        </p>
        <p
          onClick={() =>
            speciality === "Pediatricians"
              ? navigate("/doctors")
              : navigate("/doctors/Pediatricians")
          }
          className='w-full px-4 py-2 text-left border border-gray-300 rounded-lg text-gray-600 bg-white hover:bg-blue-50 hover:text-blue-700 transition-all cursor-pointer '
        >
          Pediatricians
        </p>
        <p
          onClick={() =>
            speciality === "Neurologist"
              ? navigate("/doctors")
              : navigate("/doctors/Neurologist")
          }
          className='w-full px-4 py-2 text-left border border-gray-300 rounded-lg text-gray-600 bg-white hover:bg-blue-50 hover:text-blue-700 transition-all cursor-pointer '
        >
          Neurologist
        </p>
        <p
          onClick={() =>
            speciality === "Gastroenterologist"
              ? navigate("/doctors")
              : navigate("/doctors/Gastroenterologist")
          }
          className='w-full px-4 py-2 text-left border border-gray-300 rounded-lg text-gray-600 bg-white hover:bg-blue-50 hover:text-blue-700 transition-all cursor-pointer  '
        >
          Gastroenterologist
        </p>
      </div>

      {/* Right Grid */}
      <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filterDoc.length > 0 ? (
          filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointments/${item._id}`)}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <img
                className="bg-blue-50 w-full h-48 object-contain"
                src={item.image}
                alt=""
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Available</span>
                </div>
                <p className="text-gray-800 text-lg font-medium mt-2">
                  {item.name}
                </p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-gray-600">
            No doctors available for this specialty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Doctor;





// {`py-1 px-3  border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}