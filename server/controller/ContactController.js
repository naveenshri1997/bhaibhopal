require('../db/conn');
const express = require('express');
const Contact = require('../model/ContactSchema');

module.exports.addcontact = async (req, res) => {
    const { name, contact_no, details, email } = req.body;
    try {
        const slide = new Contact({ name, contact_no, details, email });
        const result = await slide.save();
        console.log(result);
        if (result) {
            res.status(201).json({ message: 'Contact saved' });
        } else {
            res.status(500).json({ message: 'Contact not saved' })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.showcontact = async (req, res) => {
    try {
        const data = await Contact.find({});
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.deletecontact = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Contact.deleteOne({ _id: id });
        if (result) {
            res.status(201).json({ message: "Contact delete" });
        } else {
            res.status(500).json({ message: "Contact not delete" });
        }
    } catch (error) {
        console.log(error);
    }
}

