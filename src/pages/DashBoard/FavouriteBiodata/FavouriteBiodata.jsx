import React, { useContext, useEffect, useState } from 'react';

import { Table } from 'flowbite-react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const FavouriteBiodata = () => {
   
    const { user, loading } = useContext(AuthContext); 
    const [favorite, setFavorite] = useState([]);
   
    useEffect(() => {
    if (user?.email) {
    console.log('User email:', user.email); 
    fetch(`https://matrimony-platform-server.vercel.app/favorites/user?email=${user.email}`)
    .then((response) => response.json())
    .then((data) => setFavorite(data))
    .catch((err) => console.error('Error fetching favorite biodata:', err));
    }
    }, [user]);
   
    
    // const handleDelete = (_id) => {
    // Swal.fire({
    // title: 'Are you sure?',
    // text: "You won't be able to revert this!",
    // icon: 'warning',
    // showCancelButton: true,
    // confirmButtonColor: 'hashtag#3085d6',
    // cancelButtonColor: 'hashtag#d33',
    // confirmButtonText: 'Yes, delete it!',
    // }).then((result) => {
    // if (result.isConfirmed) {
    // fetch(`https://matrimony-platform-server.vercel.app/favorites/delete/${_id}`, {
    // method: 'DELETE',
    // })
    // .then((res) => res.json())
    // .then((data) => {
    // if (data.deletedCount > 0) {
    // Swal.fire({
    // title: 'Deleted!',
    // text: 'The biodata has been deleted.',
    // icon: 'success',
    // });
    // setFavorite((prevFavorites) =>
    // prevFavorites.filter(
        
    //     (bio) => bio._id !== _id)
    // );
    // } else {
    // Swal.fire({
    // title: 'Error!',
    // text: 'Something went wrong, please try again.',
    // icon: 'error',
    // });
    // }
    // })
    // .catch((error) => {
    // Swal.fire({
    // title: 'Error!',
    // text: 'There was an issue with the server. Please try again later.',
    // icon: 'error',
    // });
    // });
    // }
    // });
    // };
   
    const handleDelete = (_id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://matrimony-platform-server.vercel.app/favorites/delete/${_id}`, {
              method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: 'Deleted!',
                    text: 'The biodata has been deleted.',
                    icon: 'success',
                  });
                  setFavorite((prevFavorites) =>
                    prevFavorites.filter((bio) => bio._id !== _id)
                  );
                } else {
                  Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong, please try again.',
                    icon: 'error',
                  });
                }
              })
              .catch((error) => {
                Swal.fire({
                  title: 'Error!',
                  text: 'There was an issue with the server. Please try again later.',
                  icon: 'error',
                });
              });
          }
        });
      };
      
    if (loading) {
    return <div>Loading...</div>;
    }
   
    if (!favorite.length) {
    return <div>No biodata found.</div>;
    }
   
    return (
    <div className="w-11/12 mx-auto">
    <h1 className="text-3xl font-bold text-center p-4">Favorite Biodata</h1>
    
    <Table>
    <Table.Head>
    <Table.HeadCell>Name</Table.HeadCell>
    <Table.HeadCell>Biodata ID</Table.HeadCell>
    <Table.HeadCell>Permanent Address</Table.HeadCell>
    <Table.HeadCell>Occupation</Table.HeadCell>
    <Table.HeadCell>Actions</Table.HeadCell>
    </Table.Head>
   
    <Table.Body className="divide-y">
    {favorite.map((bio, index) => (
    <Table.Row key={index}>
    <Table.Cell>{bio.name}</Table.Cell>
    <Table.Cell>{bio.bioDataId}</Table.Cell>
    <Table.Cell>{bio.permanentDivisionname}</Table.Cell>
    <Table.Cell>{bio.occupation}</Table.Cell>
    <Table.Cell>
    <button onClick={()=> handleDelete(bio._id)}
   
    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
    >
    Delete
    </button>
    </Table.Cell>
    </Table.Row>
    ))}
    </Table.Body>
    </Table>
    </div>
    );
   };

export default FavouriteBiodata;