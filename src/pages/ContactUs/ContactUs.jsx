import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        Swal.fire({
            title: 'Message Sent!',
            text: 'Thank you for contacting us. We will get back to you shortly.',
            icon: 'success',
            confirmButtonText: 'OK',
        }).then(() => {
           
            e.target.reset();
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Subject"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Write your message here..."
                            required
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
