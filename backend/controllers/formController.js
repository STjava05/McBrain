const formModel = require('../models/formModel');


module.exports.setForm = async (req, res) => {
    const { firstName, middleName,surname,dateOfBirth,countryOfBirth,nationality,maritalStatus, region,province,city,street,postal,
        countryOfOrigin,stateOfOrigin,phone, 
        email, height, documentType, documentNumber, 
        documentIssueDate, documentExpiryDate, placeOfIssue, nameOfKin, relationship, 
        phoneNumber, emailAddress, address } = req.body;
    try {
        const form = await formModel.create({
            firstName,
            middleName,
            surname ,
            dateOfBirth,
            countryOfBirth,
            nationality,
            maritalStatus,
            region,
            province,
            city,
            street,
            postal,
            countryOfOrigin,
            stateOfOrigin,
            phone,
            email,
            height,
            documentType,
            documentNumber,
            documentIssueDate,
            documentExpiryDate,
            placeOfIssue,
            nameOfKin,
            relationship,
            phoneNumber,
            emailAddress,
            address
        });
        res.status(201).json(form);
    } catch (err) {
        res.status(400).json(err);
    }
    }

module.exports.getForm = async (req, res) => {
    try {
        const form = await formModel.find();
        res.status(200).json(form);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports.updateForm = async (req, res) => {
    const { id } = req.params;
    const { firstName, middleName,surname,dateOfBirth,countryOfBirth,nationality,maritalStatus, region,province,city,street,postal,
        countryOfOrigin,stateOfOrigin,phone, 
        email, height, documentType, documentNumber, 
        documentIssueDate, documentExpiryDate, placeOfIssue, nameOfKin, relationship, 
        phoneNumber, emailAddress, address } = req.body;
    try {
        const form = await formModel.findByIdAndUpdate(id, {
            firstName,
            middleName,
            surname ,
            dateOfBirth,
            countryOfBirth,
            nationality,
            maritalStatus,
            region,
            province,
            city,
            street,
            postal,
            countryOfOrigin,
            stateOfOrigin,
            phone,
            email,
            height,
            documentType,
            documentNumber,
            documentIssueDate,
            documentExpiryDate,
            placeOfIssue,
            nameOfKin,
            relationship,
            phoneNumber,
            emailAddress,
            address
        }, { new: true });
        res.status(200).json(form);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports.deleteForm = async (req, res) => {
    const { id } = req.params;
    try {
        const form = await formModel.findByIdAndDelete(id);
        res.status(200).json(form);
    } catch (err) {
        res.status(400).json(err);
    }
}