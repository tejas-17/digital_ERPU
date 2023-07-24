import React, { useState } from 'react';
import axios from 'axios';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        balance: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the backend registration API
            const apiUrl = 'http://localhost:4000/backendApi/register';
            const response = await axios.post(apiUrl, formData);

            // Handle the response (if needed)
            console.log(response.data);

            // Reset the form data after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                balance: '',
            });
        } catch (error) {
            // Handle errors (if any)
            console.error('Registration failed:', error);
        }
    };

    return (
        <div ><br></br>
            <h2 className="d-flex justify-content-center">Registration Form</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>

                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
                </div><br></br>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
                </div><br></br>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
                </div><br></br>
                <div>
                    <label>e₹ Balance:</label>
                    <input type="number" name="balance" value={formData.balance} onChange={handleChange} className="form-control" />
                </div><br></br>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>

    );
}
