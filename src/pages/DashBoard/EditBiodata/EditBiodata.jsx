// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
// import Swal from "sweetalert2";
// import { useParams, useNavigate } from "react-router-dom";

// const EditBiodata = () => {
//   const { user } = useContext(AuthContext);
//   const { id } = useParams(); // Get biodata ID from route params
//   const navigate = useNavigate();

//   const [biodata, setBiodata] = useState({
//     biodataType: "",
//     name: "",
//     profileImage: "",
//     dateOfBirth: "",
//     height: "",
//     weight: "",
//     age: "",
//     occupation: "",
//     race: "",
//     fathersName: "", 
//     mothersName: "", 
//     permanentDivisionname: "",
//     presentDivisionname: "",
//     expectedPartnerAge: "",
//     expectedPartnerHeight: "",
//     expectedPartnerWeight: "",
//     contactEmail: user?.email || "",
//     mobileNumber: "",
//   });

//   useEffect(() => {
//     const fetchBiodata = async () => {
//       try {
//         const response = await fetch(`https://matrimony-platform-server.vercel.app/biodata/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setBiodata(data);
//         } else {
//           throw new Error("Failed to fetch biodata");
//         }
//       } catch (error) {
//         console.error("Error fetching biodata:", error);
//         Swal.fire({
//           title: "Error!",
//           text: "An error occurred while fetching biodata.",
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//       }
//     };

//     fetchBiodata();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBiodata((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // try {
//       const response = await fetch(`https://matrimony-platform-server.vercel.app/biodata/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(biodata),
//       })
  
//       // if (!response.ok) {
//       //   const errorData = await response.json();
//       //   console.error("Error response:", errorData);
//       //   throw new Error(errorData.message || "Failed to update biodata");
//       // }
  
//     //   const result = await response.json();
//     //   Swal.fire({
//     //     title: "Success!",
//     //     text: "Biodata updated successfully!",
//     //     icon: "success",
//     //     confirmButtonText: "OK",
//     //   });
//     //   navigate("/biodata"); // Redirect to biodata list
//     // } catch (error) {
//     //   console.error("Error updating biodata:", error);
//     //   Swal.fire({
//     //     title: "Error!",
//     //     text: error.message || "An error occurred while updating biodata.",
//     //     icon: "error",
//     //     confirmButtonText: "OK",
//     //   });
//     // }





// .then((res) => res.json())
//  .then((data) => {
//  if (data.modifiedCount>0) {
//  Swal.fire({
//  title: 'Success!',
//  text: 'Biodata updated successfully',
//  icon: 'success',
//  });
//  navigate('/dashboard/viewbiodata');
//  } else {
//  Swal.fire({
//  title: 'Error!',
//  text: data.message || 'Failed to update biodata',
//  icon: 'error',
//  });
//  }
//  });
//   };
//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         maxWidth: "600px",
//         margin: "auto",
//         padding: "20px",
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//         backgroundColor: "#f9f9f9",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Edit Biodata</h2>
//       {[ 
//         { label: "Biodata Type", name: "biodataType", type: "select", options: ["Male", "Female"] },
//         { label: "Name", name: "name", type: "text" },
//         { label: "Profile Image", name: "profileImage", type: "text", placeholder: "Paste image link" },
//         { label: "Date of Birth", name: "dateOfBirth", type: "date" },
//         { label: "Height", name: "height", type: "text", placeholder: "Enter your height" },
//         { label: "Weight", name: "weight", type: "text", placeholder: "Enter your weight" },
//         { label: "Age", name: "age", type: "number" },
//         { label: "Occupation", name: "occupation", type: "text", placeholder: "Enter your occupation" },
//         { label: "Race", name: "race", type: "select", options: ["Fair", "Wheatish", "Dark"] },
//         { label: "Father's Name", name: "fathersName", type: "text" },
//         { label: "Mother's Name", name: "mothersName", type: "text" },
//         { label: "Permanent Division", name: "permanentDivisionname", type: "select", options: ["Dhaka", "Chattagra", "Rangpur", "Barisal", "Khulna", "Mymensingh", "Sylhet"] },
//         { label: "Present Division", name: "presentDivisionname", type: "select", options: ["Dhaka", "Chattagra", "Rangpur", "Barisal", "Khulna", "Mymensingh", "Sylhet"] },
//         { label: "Expected Partner Age", name: "expectedPartnerAge", type: "number" },
//         { label: "Expected Partner Height", name: "expectedPartnerHeight", type: "text", placeholder: "Enter expected partner height" },
//         { label: "Expected Partner Weight", name: "expectedPartnerWeight", type: "text", placeholder: "Enter expected partner weight" },
//         { label: "Contact Email", name: "contactEmail", type: "email", readOnly: true },
//         { label: "Mobile Number", name: "mobileNumber", type: "text" },
//       ].map((field, index) => (
//         <div key={index} style={{ marginBottom: "15px" }}>
//           <label
//             style={{
//               display: "block",
//               marginBottom: "5px",
//               fontWeight: "bold",
//             }}
//           >
//             {field.label}
//           </label>
//           {field.type === "select" ? (
//             <select
//               name={field.name}
//               value={biodata[field.name]}
//               onChange={handleChange}
//               required={!field.readOnly}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             >
//               <option value="">Select</option>
//               {field.options.map((option, i) => (
//                 <option key={i} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           ) : (
//             <input
//               type={field.type}
//               name={field.name}
//               value={biodata[field.name]}
//               onChange={handleChange}
//               readOnly={field.readOnly}
//               placeholder={field.placeholder || ""}
//               required={!field.readOnly}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             />
//           )}
//         </div>
//       ))}

//       <button
//         type="submit"
//         style={{
//           width: "100%",
//           padding: "10px",
//           backgroundColor: "#007BFF",
//           color: "#fff",
//           border: "none",
//           borderRadius: "4px",
//           fontSize: "16px",
//           cursor: "pointer",
//         }}
//       >
//         Update Biodata
//       </button>
//     </form>
//   );
// };

// export default EditBiodata;



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Label, TextInput, Button } from 'flowbite-react';
import Swal from 'sweetalert2';

const EditBiodata = () => {
 const { id } = useParams(); 
 const navigate = useNavigate();
 const [biodata, setBiodata] = useState({});

 useEffect(() => {
 fetch(`https://matrimony-platform-server.vercel.app/biodata/${id}`)
 .then((response) => response.json())
 .then((data) => setBiodata(data));
 }, [id]);

 const handleUpdateBio = (event) => {
 event.preventDefault();
 const form = event.target;

 const updatedBio = {
 biodataType: form.biodataType?.value || '',
 name: form.name?.value || '',
 profileImage: form.profileImage?.value || '',
 dateOfBirth: form.dob?.value || '',
 height: form.height?.value || '',
 weight: form.weight?.value || '',
 age: form.age?.value || '',
 occupation: form.occupation?.value || '',
 race: form.race?.value || '',
 fathersName: form.fathersName?.value || '',
 mothersName: form.mothersName?.value || '',
 permanentDivisionname: form.permanentDivisionname?.value || '',
 presentDivisionname: form.presentDivisionname?.value || '',
 expectedPartnerAge: form.expectedPartnerAge?.value || '',
 expectedPartneHeight: form.expectedPartnerHeight?.value || '',
 expectedPartnerWeight: form.expectedPartnerWeight?.value || '',
 mobileNumber: form.mobileNumber?.value || '',
 };

 fetch(`https://matrimony-platform-server.vercel.app/biodata/${id}`, {
 method: 'PUT',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(updatedBio),
 })
 .then((res) => res.json())
 .then((data) => {
 if (data.modifiedCount>0) {
 Swal.fire({
 title: 'Success!',
 text: 'Biodata updated successfully',
 icon: 'success',
 });
 navigate('/dashboard/viewbiodata');
 } else {
 Swal.fire({
 title: 'Error!',
 text: data.message || 'Failed to update biodata',
 icon: 'error',
 });
 }
 });
 };

 return (
 <form onSubmit={handleUpdateBio} className="flex max-w-md flex-col gap-4">
 <div>
 <Label htmlFor="biodataType" value="Biodata Type" />
 <TextInput
 id="biodataType"
 name="biodataType"
 type="text"
 defaultValue={biodata.biodataType}
 required
 />
 </div>

 <div>
 <Label htmlFor="name" value="Name" />
 <TextInput
 id="name"
 name="name"
 type="text"
 defaultValue={biodata.name}
 required
 />
 </div>

 <div>
 <Label htmlFor="profileImage" value="Profile Image URL" />
 <TextInput
 id="profileImage"
 name="profileImage"
 type="url"
 defaultValue={biodata.profileImage}
 />
 </div>

 <div>
 <Label htmlFor="dob" value="Date of Birth" />
 <TextInput
 id="dob"
 name="dob"
 type="date"
 defaultValue={biodata.dateOfBirth}
 required
 />
 </div>

 <div>
 <Label htmlFor="height" value="Height" />
 <TextInput
 id="height"
 name="height"
 type="text"
 defaultValue={biodata.height}
 />
 </div>

 <div>
 <Label htmlFor="weight" value="Weight" />
 <TextInput
 id="weight"
 name="weight"
 type="text"
 defaultValue={biodata.weight}
 />
 </div>

 <div>
 <Label htmlFor="age" value="Age" />
 <TextInput id="age" name="age" type="number" defaultValue={biodata.age} />
 </div>

 <div>
 <Label htmlFor="occupation" value="Occupation" />
 <TextInput
 id="occupation"
 name="occupation"
 type="text"
 defaultValue={biodata.occupation}
 />
 </div>

 <div>
 <Label htmlFor="race" value="Race" />
 <TextInput id="race" name="race" type="text" defaultValue={biodata.race} />
 </div>

 <div>
 <Label htmlFor="fatherName" value="Father's Name" />
 <TextInput
 id="fatherName"
 name="fathersName"
 type="text"
 defaultValue={biodata.fathersName}
 />
 </div>

 <div>
 <Label htmlFor="motherName" value="Mother's Name" />
 <TextInput
 id="motherName"
 name="mothersName"
 type="text"
 defaultValue={biodata.mothersName}
 />
 </div>

 <div>
 <Label htmlFor="permanentDivision" value="Permanent Division" />
 <TextInput
 id="permanentDivision"
 name="permanentDivisionname"
 type="text"
 defaultValue={biodata.permanentDivisionname}
 />
 </div>

 <div>
 <Label htmlFor="presentDivision" value="Present Division" />
 <TextInput
 id="presentDivision"
 name="presentDivisionname"
 type="text"
 defaultValue={biodata.presentDivisionname}
 />
 </div>

 <div>
 <Label htmlFor="partnerAge" value="Expected Partner Age" />
 <TextInput
 id="partnerAge"
 name="expectedPartnerAge"
 type="number"
 defaultValue={biodata.expectedPartnerAge}
 />
 </div>

 <div>
 <Label htmlFor="partnerHeight" value="Expected Partner Height" />
 <TextInput
 id="partnerHeight"
 name="expectedPartnerHeight"
 type="text"
 defaultValue={biodata.expectedPartnerHeight}
 />
 </div>

 <div>
 <Label htmlFor="expectedPartnerWeight" value="Expected Partner Weight" />
 <TextInput
 id="expectedPartnerWeight"
 name="expectedPartnerWeight"
 type="text"
 defaultValue={biodata.expectedPartnerWeight}
 />
 </div>

 <div>
 <Label htmlFor="mobileNumber" value="Mobile Number" />
 <TextInput
 id="mobileNumber"
 name="mobileNumber"
 type="text"
 defaultValue={biodata.mobileNumber}
 required
 />
 </div>

 <div>
 <Label htmlFor="contactEmail" value="Contact Email" />
 <TextInput
 id="contactEmail"
 name="contactEmail"
 type="email"
 defaultValue={biodata.contactEmail}
 readOnly
 disabled
 />
 </div>

 <Button  gradientMonochrome="info" type="submit">Update</Button>
 






 
 </form>
 );
};

export default EditBiodata;