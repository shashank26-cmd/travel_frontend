import axios from 'axios';

const API = axios.create({ baseURL: 'https://travel-backend-anz8.onrender.com' });

export const getPackages = () => API.get('/api/packages/packages');
export const getPackageById = (id) => API.get(`api/packages/packages/${id}`);
export const addPackage = (packageData) => API.post('/api/packages/admin/packages', packageData);
export const deletePackage = (id) => API.delete(`/api/packages/admin/packages/${id}`);
export const bookPackage = (bookingData) => API.post('/api/bookings/booking/create', bookingData);
