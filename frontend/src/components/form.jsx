import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './form.css';


const ApplicationForm = () => {


    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        surname: '',
        dateOfBirth: '',
        countryOfBirth: '',
        nationality: '',
        maritalStatus: '',
        region: '',
        province: '',
        city: '',
        street: '',
        postal: '',
        countryOfOrigin: '',
        stateOfOrigin: '',
        phone: '',
        email: '',
        height: '',
        documentType: '',
        documentNumber: '',
        documentIssueDate: '',
        documentExpiryDate: '',
        placeOfIssue: '',
        nameOfKin: '',
        relationship: '',
        phoneNumber: '',
        emailAddress: '',
        address: ''

    });

    const { firstName, middleName, surname, dateOfBirth, countryOfBirth, nationality, maritalStatus, region, province, city, street,
        postal, countryOfOrigin, stateOfOrigin, phone, email, height, documentType, documentNumber, documentIssueDate,
        documentExpiryDate, placeOfIssue, nameOfKin, relationship, phoneNumber, emailAddress, address } = formData;

    const onInputChange = e => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };



    const onSubmit = async e => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);

        setFormData({
            firstName: '',
            middleName: '',
            surname: '',
            dateOfBirth: '',
            countryOfBirth: '',
            nationality: '',
            maritalStatus: '',
            region: '',
            province: '',
            city: '',
            street: '',
            postal: '',
            countryOfOrigin: '',
            stateOfOrigin: '',
            phone: '',
            email: '',
            height: '',
            documentType: '',
            documentNumber: '',
            documentIssueDate: '',
            documentExpiryDate: '',
            placeOfIssue: '',
            nameOfKin: '',
            relationship: '',
            phoneNumber: '',
            emailAddress: '',
            address: ''
        });
    
    };

   



    return (
        <div>
            <h1>NIN ENROLLMENT FORM</h1>
            <h5>NATIONAL IDENTITY MANAGEMENT SYSTEM  - ITALY</h5>
            <form onSubmit={e => onSubmit(e)}>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" onChange={(e) => onInputChange(e)} value={firstName} placeholder="Enter your first name" />
                </Form.Group>
                <Form.Group controlId="middleName">
                    <Form.Label>Middle Name:</Form.Label>
                    <Form.Control type="text" onChange={(e) => onInputChange(e)} value={middleName} placeholder="Enter your middle name" />
                </Form.Group>
                <Form.Group controlId="surname">
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control type="text" onChange={(e) => onInputChange(e)} value={surname} placeholder="Enter your surname" />
                </Form.Group>
                <Form.Group controlId='dateOfBirth'>
                    <Form.Label>Date of Birth:</Form.Label>
                    <Form.Control type='date' onChange={(e) => onInputChange(e)} value={dateOfBirth} placeholder='Enter your date of birth' />
                </Form.Group>

                <Form.Group controlId='countryOfBirth'>
                    <Form.Label>Country of Birth:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={countryOfBirth} placeholder='Enter your country of birth' />
                </Form.Group>

                <Form.Group controlId='nationality'>
                    <Form.Label>Nationality:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={nationality} placeholder='Enter nationality' />
                </Form.Group>
                <Form.Group controlId='maritalStatus'>
                    <Form.Label>Marital Status:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={maritalStatus} placeholder='Enter your marital status' />
                </Form.Group>

                <hr />
                <h5>Address in Diaspora</h5>
                <hr />
                <Form.Group controlId='region'>
                    <Form.Label>Region:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={region} placeholder='Enter your region' />
                </Form.Group>
                <Form.Group controlId='province'>
                    <Form.Label>Province:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={province} placeholder='Enter your province' />
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={city} placeholder='Enter your city' />
                </Form.Group>
                <Form.Group controlId='street'>
                    <Form.Label>Street:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={street} placeholder='Enter street' />
                </Form.Group>
                <Form.Group controlId='postal'>
                    <Form.Label>Postal/Zip Code:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={postal} placeholder='Enter your zip code' />
                </Form.Group>
                <Form.Group controlId='countryOfOrigin'>
                    <Form.Label>Country of Origin:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={countryOfOrigin} placeholder='Enter your country origin' />
                </Form.Group>
                <Form.Group controlId='stateOfOrigin'>
                    <Form.Label>State of Origin:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={stateOfOrigin} placeholder='Enter your state of origin' />
                </Form.Group>
                <h5>Other Details</h5>
                <Form.Group controlId='phone'>
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={phone} placeholder='Enter your phone number' />
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>E-mail Address:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={email} placeholder='Enter your mail' />
                </Form.Group>
                <Form.Group controlId='height'>
                    <Form.Label>height in cm:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={height} placeholder='Enter your height' />
                </Form.Group>
                <hr />
                <h5>Applicants Document Details</h5>
                <hr />
                <Form.Group controlId="documentType">
                    <Form.Label>Document Type:</Form.Label>
                    <Form.Control type="text" onChange={(e) => onInputChange(e)} value={documentType} placeholder="Enter your document type" />
                </Form.Group>
                <Form.Group controlId="documentNumber">
                    <Form.Label>Document Number:</Form.Label>
                    <Form.Control type="text" onChange={(e) => onInputChange(e)} value={documentNumber} placeholder="Enter your document number" />
                </Form.Group>
                <Form.Group controlId="documentIssueDate">
                    <Form.Label>Date Issued:</Form.Label>
                    <Form.Control type="date" onChange={(e) => onInputChange(e)} value={documentIssueDate} placeholder="date issued" />
                </Form.Group>
                <Form.Group controlId="documentExpiryDate">
                    <Form.Label>Document Expiry date:</Form.Label>
                    <Form.Control type="date" onChange={(e) => onInputChange(e)} value={documentExpiryDate} placeholder="expiry date" />
                </Form.Group>
                <Form.Group controlId="placeOfIssue">
                    <Form.Label>Place Of Issued:</Form.Label>
                    <Form.Control type="text" onChange={(e) => onInputChange(e)} value={placeOfIssue} placeholder="place of issued" />
                </Form.Group>
                <hr />
                <h5>Next of Kin</h5>
                <hr />
                <Form.Group controlId="nameOfKin">
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control type="text" onChange={(e) => onInputChange(e)} value={nameOfKin} placeholder="Enter your surname" />
                </Form.Group>
                <Form.Group controlId="relationship">
                    <Form.Label>Relationship:</Form.Label>
                    <Form.Control type="text" onChange={(e) => onInputChange(e)} value={relationship} placeholder="Enter your relationship" />
                </Form.Group>
                <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="text" onChange={(e) => onInputChange(e)} value={phoneNumber} placeholder="Enter your phone number" />
                </Form.Group>
                <Form.Group controlId='emailAddress'>
                    <Form.Label>E-mail Address:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={emailAddress} placeholder='Enter your mail' />
                </Form.Group>
                <Form.Group controlId='address'>
                    <Form.Label> Address:</Form.Label>
                    <Form.Control type='text' onChange={(e) => onInputChange(e)} value={address} placeholder='Enter your address' />
                </Form.Group>
                <hr />
                <Button variant="primary" type="submit">Submit</Button>
            </form>

        </div>
    );
};

export default ApplicationForm;


