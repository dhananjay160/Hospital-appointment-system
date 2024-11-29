// import React, { useState } from "react";

// import { assets } from "../assets/assets";

// const Myprofile = () => {
//   const [userData, setUser] = useState({
//     name: "DK",
//     image: assets.profile_pic,
//     email: "dk@gmail.com",
//     phone: " +1 1234567890",
//     address: {
//       line1: "57th Cross, Richmond ",
//       line2: "Circle, Church Road,London",
//     },
//     gender: "Male",
//     dob: "2000-01-20",
//   });

//   const [isEdit, setIsEdit] = useState(true);

//   return (
//     <div>
//       <img src={userData.image} alt="" />

//       {isEdit ? (
//         <input
//           type="text"
//           value={userData.name}
//           onChange={(e) =>
//             setUserData((prev) => ({ ...prev, name: e.target.value }))
//           }
//         />
//       ) : (
//         <p className="ml-24">{userData.name}</p>
//       )}

//       <hr />
//       <div>
//         <p>CONTACT INFORMATION</p>
//         <div>
//           <p>Email id:</p>
//           <p>{userData.email}</p>
//           <p>phone</p>
//           <p>{userData.phone}</p> 
//           <p>Address:</p>
//           {
//             isEdit
//             ? <p>
//               <input onChange={(e) => setUserData({...prev,address :{ ...prev, line1:e.target.value}})} value={userData.address.line1} type="text" />
//               <br />
//               <input onChange={(e) => setUserData({...prev,address :{ ...prev, line2:e.target.value}})} value={userData.address.line2} type="text" />
//             </p>
//             : <p>
//               {userData.address.line1}
//               <br />
//               {userData.address.line2}

//             </p>
//           }
//             </div>
//           </div>
//           <div>
//             <p>
//             BASIC INFORMATION
//             </p>
// <p>Gender:</p>
// {isEdit ?
// <select onChange={(e) => setUserData(prev =>({...prev,gender:e.target.value}))} name="" id="">  <option value="Male">"Male</option>
// <option value="Female">Female</option></select>
// : (
//         <p className="">{userData.gender}</p>
//       )}
//       <p>Birthday:</p>
//       {

//         isEdit ? <input  type= "date" onChange={(e) => setUserData(prev =>({...prev,dob:e.target.value}))} vlaue={userData.dob} /> 
//         : <p className="">{userData.dob}</p>
//       }
//           </div>
//          <div>
//           {
//             isEdit ? <button onClick={() => setIsEdit(false)}> Save information </button>:
//             <button onClick={() => setIsEdit(true)}>Edit</button>
//           }
//          </div>
//         </div>
    
//   );
// };

// export default Myprofile;









import React, { useState } from "react";
import { assets } from "../assets/assets";

const Myprofile = () => {
  const [userData, setUser] = useState({
    name: "DK",
    image: assets.profile_pic,
    email: "dk@gmail.com",
    phone: "+1 1234567890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {/* Profile Image */}
      <img src={userData.image} alt="Profile" className="w-32 h-32 rounded-full" />

      {/* Name Field */}
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
          className="border p-2 rounded"
        />
      ) : (
        <p className="text-lg font-bold">{userData.name}</p>
      )}

      <hr />

      {/* Contact Information */}
      <div>
        <p className="text-xl font-semibold underline">CONTACT INFORMATION</p>
        <div>
          <p>Email ID:</p>
          {isEdit ? (
            <input
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              className="border p-2 rounded"
            />
          ) : (
            <p>{userData.email}</p>
          )}

          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="border p-2 rounded"
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p>Address:</p>
          {isEdit ? (
            <div>
              <input
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                className="border p-2 rounded mb-2"
              />
              <input
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                className="border p-2 rounded"
              />
            </div>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <p className="text-xl font-semibold underline ">BASIC INFORMATION</p>
        <p>Gender:</p>
        {isEdit ? (
          <select
            value={userData.gender}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, gender: e.target.value }))
            }
            className="border p-2 rounded"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          <p>{userData.gender}</p>
        )}

        <p>Birthday:</p>
        {isEdit ? (
          <input
            type="date"
            value={userData.dob}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, dob: e.target.value }))
            }
            className="border p-2 rounded"
          />
        ) : (
          <p>{userData.dob}</p>
        )}
      </div>

      {/* Edit/Save Button */}
      <div>
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="bg-white text-gray-600 px-4 py-2 rounded mt-4  hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer "
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-white text-gray-600 px-4 py-2 rounded mt-4 hover:bg-primary hover:text-white transition-all duration-300  cursor-pointer"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Myprofile;
