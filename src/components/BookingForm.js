import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bookPackage, getPackageById } from '../api'; // Import necessary API functions

const BookingForm = () => {
    const { packageId } = useParams(); // Get the packageId from URL params
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        travelers: 1,
        specialRequests: '',
    });
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [invoiceUrl, setInvoiceUrl] = useState(null); // Stores the URL for the invoice PDF
    const [isSubmitted, setIsSubmitted] = useState(false); // Tracks whether the form is submitted
    const [loading, setLoading] = useState(true); // Loading state for fetching package data
    const [error, setError] = useState(null); // Stores any errors

    // Fetch the package data when the component mounts
    useEffect(() => {
        const fetchPackageData = async () => {
            try {
                const response = await getPackageById(packageId);
                setSelectedPackage(response.data); // Set package details into state
                setLoading(false);
            } catch (error) {
                console.error('Error fetching package data:', error);
                setError('Unable to load package details. Please try again later.');
                setLoading(false);
            }
        };

        if (packageId) {
            fetchPackageData();
        }
    }, [packageId]);

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const bookingData = {
                ...formData,
                packageId: selectedPackage._id,
            };
            const response = await bookPackage(bookingData);

            setInvoiceUrl(response.data.pdfUrl);
            setIsSubmitted(true); 
            alert('Booking successful! You can now download your invoice.');
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert('There was an error processing your booking. Please try again later.');
        }
    };

    if (loading) return <div>Loading package details...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Book: {selectedPackage.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold">Number of Travelers</label>
                    <input
                        type="number"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        min="1"
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold">Special Requests</label>
                    <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Submit Booking
                </button>
            </form>

            {isSubmitted && invoiceUrl && (
                <div className="mt-4">
                    <a
                        href={invoiceUrl}
                        download={`invoice-${selectedPackage._id}.pdf`} // Filename suggestion for client-side
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Download Invoice
                    </a>
                </div>
            )}

        </div>
    );
};

export default BookingForm;
