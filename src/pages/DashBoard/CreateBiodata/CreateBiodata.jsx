import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Button } from "flowbite-react";

const CreateBiodata = () => {



const { user } = useContext(AuthContext);
  const [biodata, setBiodata] = useState({
  
    biodataType: "",
    name: "",
    profileImage: "",
    dateOfBirth: "",
    height: "",
    weight: "",
    age: "",
    occupation: "",
    race: "",
    fathersName: "",
    mothersName: "",
    permanentDivisionname: "",
    presentDivisionname: "",
    expectedPartnerAge: "",
    expectedPartnerHeight: "",
    expectedPartnerWeight: "",
    contactEmail: user?.email || "",
    mobileNumber: "",
    member:"normal",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiodata({ ...biodata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/biodata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(biodata),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Biodata submitted successfully:", result);
  
       
        Swal.fire({
          title: 'Success!',
          text: 'Biodata submitted successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
  
        setBiodata({
        
          
          biodataType: "",
          profileImage: "",
          permanentDivisionname: "",
          presentDivisionname: "",
          age: "",
          occupation: "",
          race: "",
          fathersName: "",
          mothersName: "",
          dateOfBirth: "",
          height: "",
          weight: "",
          expectedPartnerAge: "",
          expectedPartnerHeight: "",
          expectedPartnerWeight: "",
          contactEmail: "",
          mobileNumber: "",
          member: ""
        });
      } else {
        console.error("Failed to submit biodata:", response.statusText);
  
      
        Swal.fire({
          title: 'Error!',
          text: 'Failed to submit biodata. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error("Error while submitting biodata:", error);
  
   
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while submitting biodata. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Create Biodata</h2>

      {[


        {
          label: "Biodata Type",
          type: "select",
          name: "biodataType",
          options: ["Male", "Female"],
        },
        { label: "Name", type: "text", name: "name" },
        {
          label: "Profile Image",
          type: "url",
          name: "profileImage",
          placeholder: "Paste image link",
        },
        { label: "Date of Birth", type: "date", name: "dateOfBirth" },
        { label: "Height", type: "text", name: "height", placeholder: "Enter your height" },
        { label: "Weight", type: "text", name: "weight", placeholder: "Enter your weight" },
        { label: "Age", type: "number", name: "age" },
        {
          label: "Occupation",
          type: "text",
          name: "occupation",
          placeholder: "Enter your occupation",
        },
        {
          label: "Race",
          type: "select",
          name: "race",
          options: ["Fair", "Wheatish", "Dark"],
        },
        { label: "Father's Name", type: "text", name: "fathersName" },
        { label: "Mother's Name", type: "text", name: "mothersName" },
        {
          label: "Permanent Division",
          type: "select",
          name: "permanentDivisionname",
          options: [
            "Dhaka",
            "Chattagra",
            "Rangpur",
            "Barisal",
            "Khulna",
            "Mymensingh",
            "Sylhet",
          ],
        },
        {
          label: "Present Division",
          type: "select",
          name: "presentDivisionname",
          options: [
            "Dhaka",
            "Chattagra",
            "Rangpur",
            "Barisal",
            "Khulna",
            "Mymensingh",
            "Sylhet",
          ],
        },
        {
          label: "Expected Partner Age",
          type: "number",
          name: "expectedPartnerAge",
        },
        {
          label: "Expected Partner Height",
          type: "text",
          name: "expectedPartnerHeight",
          placeholder: "Enter expected partner height",
        },
        {
          label: "Expected Partner Weight",
          type: "text",
          name: "expectedPartnerWeight",
          placeholder: "Enter expected partner weight",
        },
        {
          label: "Contact Email",
          type: "email",
          name: "contactEmail",
          readOnly: true,
        },
        { label: "Mobile Number", type: "text", name: "mobileNumber" },
      ].map((field, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            {field.label}
          </label>
          {field.type === "select" ? (
            <select
              name={field.name}
              value={biodata[field.name]}
              onChange={handleChange}
              required={!field.readOnly}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              <option value="">Select</option>
              {field.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={biodata[field.name]}
              onChange={handleChange}
              readOnly={field.readOnly}
              placeholder={field.placeholder || ""}
              required={!field.readOnly}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          )}
        </div>
      ))}

      <Button  gradientMonochrome="info"
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Save and Publish Now
      </Button>
    </form>
  );
};

export default CreateBiodata;
