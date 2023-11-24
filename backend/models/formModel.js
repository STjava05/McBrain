const mongoose = require('mongoose');
const formSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    countryOfBirth: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    maritalStatus: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    postal: {
        type: String,
        required: true,
    },
    countryOfOrigin: {
        type: String,
        required: true,
    },
    stateOfOrigin: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    documentType: {
        type: String,
        required: true,
    },
    documentNumber: {
        type: String,
        required: true,
    },
    documentIssueDate: {
        type: Date,
        required: true,
    },
    documentExpiryDate: {
        type: Date,
        required: true,
    },
  placeOfIssue: {
        type:String,
        required: true,
    },
    nameOfKin : {
        type: String,
        required: true,
    },
    relationship: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }


}
, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);

        



