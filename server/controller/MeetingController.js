require('../db/conn');
const express = require('express');
const Meeting = require('../model/MeetingSchema');
const fs = require('fs');
module.exports.addmeeting = async (req, res) => {
    const { name, venue, time, day, contact, category } = req.body;
    const image = req.file.path;
    console.log(image);
    console.log(req.file, req.body);
    try {
        const slide = new Meeting({ name, venue, time, day, contact, category, image });
        const result = await slide.save();
        console.log(result);
        if (result) {
            res.status(201).json({ message: 'Meeting saved' });
        } else {
            res.status(500).json({ message: 'Meeting not saved' })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.showmeeting = async (req, res) => {
    try {
        const data = await Meeting.find({});
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.showonemeeting = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Meeting.findOne({ _id: id });
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.deletemeeting = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Meeting.findOne({ _id: id });
        fs.unlink(data.image, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        const result = await Meeting.deleteOne({ _id: id });
        if (result) {
            res.status(201).json({ message: "Meeting delete" });
        } else {
            res.status(500).json({ message: "Meeting not delete" });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.updatemeeting = async (req, res) => {
    const { id } = req.params;
    if (req.file) {
        var data = {
            name: req.body.name,
            venue: req.body.venue,
            time: req.body.time,
            day: req.body.day,
            contact: req.body.contact,
            category: req.body.category,
            image: req.file.path,
        }
    } else {
        var data = {
            name: req.body.name,
            venue: req.body.venue,
            time: req.body.time,
            day: req.body.day,
            contact: req.body.contact,
            category: req.body.category,
        }
    }
    try {
        if (data.image) {
            const data1 = await Meeting.findOne({ _id: id });
            fs.unlink(data1.image, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        const result = await Meeting.updateOne({ _id: id },
            data
        )
        if (result) {
            res.status(201).json({ message: 'Meeting data updated success' });
        } else {
            res.status(500).json({ error: "Meeting not updated" });
        }
    } catch (error) {

    }
}


