import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPackageById } from '../api'; // Assuming this is your API call to get package details
import BookingForm from '../components/BookingForm'; // Import the BookingForm component

const PackageDetails = () => {
    const { packageId } = useParams(); // Get packageId from URL
    const [selectedPackage, setSelectedPackage] = useState(null); // Store the fetched package data

    useEffect(() => {
        const fetchPackageData = async () => {
            try {
                const response = await getPackageById(packageId); // Fetch package details
                console.log('Package details:', response.data);
                setSelectedPackage(response.data); // Store the fetched package data
            } catch (error) {
                console.error('Error fetching package details:', error);
            }
        };

        fetchPackageData();
    }, [packageId]); // Trigger fetch when packageId changes

    if (!selectedPackage) {
        return <div>Loading...</div>; // Show loading message while data is being fetched
    }

    return (
        <div>
            {/* Pass the selectedPackage to the BookingForm component */}
            <BookingForm selectedPackage={selectedPackage} />
        </div>
    );
};

export default PackageDetails;
