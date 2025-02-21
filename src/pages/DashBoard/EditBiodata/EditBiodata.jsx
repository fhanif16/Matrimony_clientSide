



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