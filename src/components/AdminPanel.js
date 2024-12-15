import React, { useState, useEffect } from 'react';
import { getPackages, addPackage, deletePackage } from '../api';

const AdminPanel = () => {
    const [packages, setPackages] = useState([]);
    const [newPackage, setNewPackage] = useState({
        title: '',
        description: '',
        price: '',
        availableDates: '',
        image: '',
    });

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

    const handleAddPackage = async () => {
        try {
            const { data } = await addPackage(newPackage);
            setPackages([...packages, data]);
            setNewPackage({
                title: '',
                description: '',
                price: '',
                availableDates: '',
                image: '',
            });
        } catch (error) {
            console.error('Error adding package:', error);
        }
    };

    const handleDeletePackage = async (id) => {
        try {
            await deletePackage(id);
            setPackages(packages.filter((pkg) => pkg._id !== id));
        } catch (error) {
            console.error('Error deleting package:', error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Add New Package</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={newPackage.title}
                    onChange={(e) => setNewPackage({ ...newPackage, title: e.target.value })}
                    className="border rounded px-2 py-1 mr-2"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newPackage.description}
                    onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
                    className="border rounded px-2 py-1 mr-2"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newPackage.price}
                    onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
                    className="border rounded px-2 py-1 mr-2"
                />
                <input
                    type="text"
                    placeholder="Available Dates (comma-separated)"
                    value={newPackage.availableDates}
                    onChange={(e) =>
                        setNewPackage({ ...newPackage, availableDates: e.target.value })
                    }
                    className="border rounded px-2 py-1 mr-2"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newPackage.image}
                    onChange={(e) => setNewPackage({ ...newPackage, image: e.target.value })}
                    className="border rounded px-2 py-1 mr-2"
                />
                <button
                    onClick={handleAddPackage}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Add Package
                </button>
            </div>
            <h3 className="font-semibold mb-2">Manage Packages</h3>
            <ul>
                {packages.map((pkg) => (
                    <li key={pkg._id} className="mb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="font-bold">{pkg.title}</h4>
                                <p>{pkg.description}</p>
                                <p>${pkg.price}</p>
                            </div>
                            <button
                                onClick={() => handleDeletePackage(pkg._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
