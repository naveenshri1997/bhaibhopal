require('../db/conn');
const express = require('express');
const Template = require('../model/TemplateSchema');
const fs = require('fs');
module.exports.addtemplate = async (req, res) => {
    const { title, subtitle, details, category } = req.body;
    const image = req.file.path;
    console.log(image);
    console.log(req.file, req.body);
    try {
        const slide = new Template({ title, subtitle, details, category, image });
        const result = await slide.save();
        console.log(result);
        if (result) {
            res.status(201).json({ message: 'Template saved' });
        } else {
            res.status(500).json({ message: 'Template not saved' })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.showtemplate = async (req, res) => {
    try {
        const data = await Template.find({});
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.showonetemplate = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Template.findOne({ _id: id });
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.deletetemplate = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Template.findOne({ _id: id });
        fs.unlink(data.image, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        const result = await Template.deleteOne({ _id: id });
        if (result) {
            res.status(201).json({ message: "Template delete" });
        } else {
            res.status(500).json({ message: "Template not delete" });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.updatetemplate = async (req, res) => {
    const { id } = req.params;
    if (req.file) {
        var data = {
            title: req.body.title,
            subtitle: req.body.subtitle,
            details: req.body.details,
            category: req.body.category,
            image: req.file.path,
        }
    } else {
        var data = {
            title: req.body.title,
            subtitle: req.body.subtitle,
            details: req.body.details,
            category: req.body.category,
        }
    }

    try {
        if (data.image) {
            const data1 = await Template.findOne({ _id: id });
            fs.unlink(data1.image, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        const result = await Template.updateOne({ _id: id },
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


