// import React, { useState, useEffect } from 'react';
// import { Button, Table } from 'flowbite-react';
// import Swal from 'sweetalert2';

// const ManageUser = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://matrimony-platform-server.vercel.app/users");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleMakeAdmin = async (email) => {
//     try {
//       const response = await fetch(`https://matrimony-platform-server.vercel.app/users/make-admin`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, role: "admin" }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update role");
//       }

//       // Update the state to reflect the change
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user.email === email ? { ...user, role: "admin" } : user
//         )
//       );

//       // Display success alert
//       Swal.fire({
//         icon: "success",
//         title: "Success!",
//         text: "User role updated to Admin.",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//     } catch (err) {
//       console.error(err.message);
//       setError("Failed to update user role");
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="overflow-x-auto">
//       <Table hoverable={true} striped={true}>
//         <Table.Head>
//           <Table.HeadCell>Email</Table.HeadCell>
//           <Table.HeadCell>Make Admin</Table.HeadCell>
//           <Table.HeadCell>Make Premium</Table.HeadCell>
//         </Table.Head>
//         <Table.Body>
//           {users.map((user) => (
//             <Table.Row key={user.id}>
//               <Table.Cell>{user.email}</Table.Cell>
//               <Table.Cell>
//                 {!user.role === "admin" && (
//                   <Button className='btn'
//                     color="primary"
//                     onClick={() => handleMakeAdmin(user.email)}
//                   >
//                     Make Admin
//                   </Button>
//                 )}
//                 {user.role === "admin" && <span>Admin</span>}
//               </Table.Cell>
//               <Table.Cell>
//                 {!user.isPremium && (
//                   <Button color="secondary">Make Premium</Button>
//                 )}
//                 {user.isPremium && <span>Premium</span>}
//               </Table.Cell>
//             </Table.Row>
//           ))}
//         </Table.Body>
//       </Table>
//     </div>
//   );
// };

// export default ManageUser;


import React, { useState, useEffect } from "react";
import { Button, Table } from "flowbite-react";
import Swal from "sweetalert2";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://matrimony-platform-server.vercel.app/users");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 
  //   try {
  //     const response = await fetch(`https://matrimony-platform-server.vercel.app//users/makeadmin`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, [field]: value }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to update user");
  //     }

  //     const updatedUser = await response.json();

      
  //     setUsers((prevUsers) =>
  //       prevUsers.map((user) =>
  //         user.email === email ? { ...user, ...updatedUser } : user
  //       )
  //     );

      
  //     Swal.fire({
  //       icon: "success",
  //       title: "Success!",
  //       text: `User updated to ${value === "admin" ? "Admin" : "Premium Member"}.`,
  //       showConfirmButton: false,
  //       timer: 2000,
  //     });
  //   } catch (err) {
  //     console.error(err.message);
  //     setError(`Failed to update user to ${field}`);
  //   }
  // };



  const handleUpdateRole = (email) => {
    fetch(`https://matrimony-platform-server.vercel.app/updateMemberByEmail`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, role: 'admin' }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Membership upgraded to Admin.',
          });
          setUsers((prev) =>
            prev.map((user) =>
              user.email === email ? { ...user, role: 'admin' } : user
            )
          );
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to update membership.',
          });
        }
      })
      .catch((error) => {
        console.error('Error updating membership:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while updating membership.',
        });
      });
  };


  const handleMakePremium = (contactEmail) => {
    fetch(`https://matrimony-platform-server.vercel.app/biodata/updatemember`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contactEmail: contactEmail, member: 'premium' }),
    })
    .then((res) => res.json())
    .then((data) => {
    if (data.modifiedCount > 0) {
    Swal.fire({
    icon: 'success',
    title: 'Success',
    text: `User ${contactEmail} has been changed.`,
    });
    
    setUsers((prev) =>
    prev.map((user) =>
    user.email === contactEmail ? { ...user, role: 'premium' } : user
    )
    );
    } else {
    Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Failed to update biodata.',
    });
    }
    })
    .catch((error) => {
    console.error('Error updating biodata:', error);
    Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'An error occurred while updating biodata.',
    });
    });
    };
  
  
   
   

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <Table hoverable={true} striped={true}>
        <Table.Head>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Premium</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                {user.role === "admin" ? (
                  <span className="text-green-600 font-bold">Admin</span>
                ) : (
                  <Button  gradientMonochrome="info"
                    color="primary"
                    onClick={() => handleUpdateRole(user.email)}                  >
                    Make Admin
                  </Button>
                )}
              </Table.Cell>
              <Table.Cell>
                {user.member==="premium" ? (
                  <span className="text-yellow-600 font-bold">Premium</span>
                ) : (
                  <Button  gradientMonochrome="info"
                    color="secondary"
                    onClick={() =>
                      handleMakePremium(user.email)
                    }
                  >
                    Make Premium
                  </Button>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageUser;

