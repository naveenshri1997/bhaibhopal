require('../db/conn');
const express = require('express');
const About = require('../model/AbouSchema');
const fs = require('fs');
module.exports.addabout = async (req, res) => {
    const { title,ordering, subtitle, details, category } = req.body;
    const image = req.file.path;
    console.log(image);
    console.log(req.file, req.body);
    try {
        const slide = new About({ title,ordering, subtitle, details, category, image });
        const result = await slide.save();
        console.log(result);
        if (result) {
            res.status(201).json({ message: 'About saved' });
        } else {
            res.status(500).json({ message: 'About not saved' })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.showabout = async (req, res) => {
    try {
        const data = await About.find({}).sort({ordering:1});
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.showoneabout = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await About.findOne({ _id: id });
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteabout = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await About.findOne({ _id: id });
        fs.unlink(data.image, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        const result = await About.deleteOne({ _id: id });
        if (result) {
            res.status(201).json({ message: "Template delete" });
        } else {
            res.status(500).json({ message: "Template not delete" });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.updateabout = async (req, res) => {
    const { id } = req.params;
    if (req.file) {
        var data = {
            title: req.body.title,
            ordering:req.body.ordering,
            subtitle: req.body.subtitle,
            details: req.body.details,
            category: req.body.category,
            image: req.file.path,
        }
    } else {
        var data = {
            title: req.body.title,
            ordering:req.body.ordering,
            subtitle: req.body.subtitle,
            details: req.body.details,
            category: req.body.category,
        }
    }
    try {
        if (data.image) {
            const data1 = await About.findOne({ _id: id });
            fs.unlink(data1.image, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        const result = await About.updateOne({ _id: id },
            data
        )
        if (result) {
            res.status(201).json({ message: 'Template data updated success' });
        } else {
            res.status(500).json({ error: "Template not updated" });
        }
    } catch (error) {

    }
}


