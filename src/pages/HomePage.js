import React from 'react';
import PackageList from '../components/PackageList.js';

const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">Tour Packages</h1>
            <PackageList />
        </div>
    );
};

export default HomePage;
