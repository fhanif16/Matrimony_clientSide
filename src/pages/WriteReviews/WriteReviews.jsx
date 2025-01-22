import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { Button } from 'flowbite-react';
import { AuthContext } from '../../providers/AuthProvider';

const WriteReviews = () => {
  const { user } = useContext(AuthContext);
  const [biodata, setBiodata] = useState({
    id: "",
    name: "",
    image: "",
    marriageDate: "",
    reviewStar: "",
    successStory: "",
    partnerId: "",
    marriageStatus: "Completed", // Default value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiodata((prevBiodata) => ({
      ...prevBiodata,
      [name]: name === "reviewStar" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(biodata), // Include marriageStatus here
      });

      if (response.ok) {
        const result = await response.json();
        Swal.fire({
          title: 'Success!',
          text: 'Review submitted successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Reset form after successful submission
        setBiodata({
          id: "",
          name: "",
          image: "",
          marriageDate: "",
          reviewStar: "",
          successStory: "",
          partnerId: "",
          marriageStatus: "Completed", // Reset to default
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to submit the review. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while submitting the review. Please try again.',
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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Write a Review</h2>

      {[
        { label: "Name", type: "text", name: "name" },
        { label: "Profile Image", type: "url", name: "image", placeholder: "Paste image link" },
        { label: "Date of Marriage", type: "date", name: "marriageDate" },
        { label: "Your ID", type: "number", name: "id" },
        { label: "Partner ID", type: "number", name: "partnerId" },
        { label: "Rating (1-5)", type: "number", name: "reviewStar", placeholder: "Enter rating (1-5)" },
        { label: "Success Story", type: "text", name: "successStory", placeholder: "Enter your success story" },
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
          <input
            type={field.type}
            name={field.name}
            value={biodata[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder || ""}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
      ))}

      <Button
        gradientMonochrome="info"
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

export default WriteReviews;
