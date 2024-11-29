import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="w-4/5 mx-auto mt-8">
      <p className="text-2xl font-bold mb-6">My Appointments</p>
      <div className="flex flex-col gap-6">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between border border-gray-200 rounded-lg p-6 shadow-md"
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-full"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 mt-4 md:mt-0 md:ml-6">
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
              <p className="mt-4 text-sm font-medium text-gray-700">Address:</p>
              <p className="text-sm text-gray-500">{item.address.line1}</p>
              <p className="text-sm text-gray-500">{item.address.line2}</p>
              <p className="mt-4 text-sm text-gray-700">
                <span className="font-medium">Date & Time:</span> 25, july, 2024 | 8:30 PM
              </p>
            </div>

            {/* Appointment Actions */}
            <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-3">
              <button className="bg-white-500 text-gray-600 px-4 py-2 rounded-lg   hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer ">
                Pay Online
              </button>
              <button className="bg-white-500 text-gray-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300  cursor-pointer">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
