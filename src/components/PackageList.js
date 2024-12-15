import React, { useState, useEffect } from 'react';
import { getPackages } from '../api';
import { useNavigate } from 'react-router-dom';

const PackageList = () => {
    const [packages, setPackages] = useState([]);
    const navigate = useNavigate();  

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const { data } = await getPackages();
                setPackages(data);
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        };

        fetchPackages();
    }, []);

    const handleBookNow = (packageId) => {
        navigate(`/packages/${packageId}`);
    };

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
                <div key={pkg._id} className="bg-white shadow-md rounded-lg p-4">
                    <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <h3 className="text-xl font-bold mt-2">{pkg.title}</h3>
                    <p className="text-gray-600">{pkg.description}</p>
                    <p className="text-lg font-semibold mt-2">${pkg.price} per person</p>
                    <p className="text-gray-500">Available Dates: {pkg.availableDates.join(', ')}</p>
                    <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => handleBookNow(pkg._id)}
                    >
                        Book Now
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PackageList;
