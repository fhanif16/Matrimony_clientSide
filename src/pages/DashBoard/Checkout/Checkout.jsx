// import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../../providers/AuthProvider';

// const Checkout = () => {

//     const {bioId} = useLoaderData();
//      const { user} = useContext(AuthContext);
//     //const biodataId=data?.bioId;

//     //console.log(_id)
//   const handleSubmit = (e) => {
//     e.preventDefault(); 
    
//     Swal.fire({
//       title: 'Message Sent!',
//       text: 'Thank you for your payment. We will get back to you shortly.',
//       icon: 'success',
//       confirmButtonText: 'OK',
//     }).then(() => {
//       e.target.reset();
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Payment</h2>
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="bioId" className="block text-sm font-medium text-gray-700">
                
              
//             </label>
//             <input
//               type="number"
//               id="bioId"
//               name="bioId"
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder={bioId}
//               required
//               readOnly
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder={user.email}
//               required
//               readOnly
//             />
//           </div>

//           <div>
//             <label htmlFor="number" className="block text-sm font-medium text-gray-700">
//               Card Number
//             </label>
//             <input
//               type="number"
//               id="number"
//               name="number"
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="Enter Your Card Number"
//               required
//             />
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Submit Button
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
import React, { useContext } from "react";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51QkYBZP6JC8ib9evV88JNGpVtYwwXOlWAoOHXFktBaEtaCkrQf582435NUaL6n3mSFriJhGJ8O9FTC7xPlYmMlr400DADurwTw"); // Replace with your actual Stripe public key

const CheckoutForm = ({ bioId, user }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Call backend to create a payment intent
    const response = await fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 500, email: user.email, bioId }), // $5 = 500 cents
    });

    const { clientSecret } = await response.json();
    console.log("clientSecret:", clientSecret);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          email: user.email,
        },
      },
    });
    

    if (error) {
      Swal.fire({
        title: "Payment Failed!",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      Swal.fire({
        title: "Payment Successful!",
        text: "Thank you for your payment. Your transaction was successful.",
        icon: "success",
        confirmButtonText: "OK",
      });
      e.target.reset();
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="bioId" className="block text-sm font-medium text-gray-700">
          Bio ID
        </label>
        <input
          type="number"
          id="bioId"
          name="bioId"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={bioId}
          readOnly
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={user.email}
          readOnly
        />
      </div>

      <div>
        <label htmlFor="card" className="block text-sm font-medium text-gray-700">
          Card Details
        </label>
        <div className="mt-1 border-gray-300 rounded-md shadow-sm p-2">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={!stripe}
        >
          Submit Payment
        </button>
      </div>
    </form>
  );
};

const Checkout = () => {
  const { bioId } = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Payment</h2>
          <CheckoutForm bioId={bioId} user={user} />
        </div>
      </div>
    </Elements>
  );
};

export default Checkout;
