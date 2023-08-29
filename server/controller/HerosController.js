require('../db/conn');
const express = require('express');
const Hero = require('../model/HerosSchema');
const fs = require('fs');
module.exports.addhero = async (req, res) => {
    const { title, ordering, subtitle, details, category } = req.body;
    const image = req.file.path;
    console.log(image);
    console.log(req.file, req.body);
    try {
        const slide = new Hero({ title, ordering, subtitle, details, category, image });
        const result = await slide.save();
        console.log(result);
        if (result) {
            res.status(201).json({ message: 'Hero saved' });
        } else {
            res.status(500).json({ message: 'Hero not saved' })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.showhero = async (req, res) => {
    try {
        const data = await Hero.find({});
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.showonehero = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Hero.findOne({ _id: id });
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.deletehero = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Hero.findOne({ _id: id });
        fs.unlink(data.image, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        const result = await Hero.deleteOne({ _id: id });
        if (result) {
            res.status(201).json({ message: "Hero delete" });
        } else {
            res.status(500).json({ message: "Hero not delete" });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.updatehero = async (req, res) => {
    const { id } = req.params;
    if (req.file) {
        var data = {
            title: req.body.title,
            ordering: req.body.ordering,
            subtitle: req.body.subtitle,
            details: req.body.details,
            category: req.body.category,
            image: req.file.path,
        }
    } else {
        var data = {
            title: req.body.title,
            ordering: req.body.ordering,
            subtitle: req.body.subtitle,
            details: req.body.details,
            category: req.body.category,
        }
    }
    try {
        if (data.image) {
            const data1 = await Hero.findOne({ _id: id });
            fs.unlink(data1.image, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        const result = await Hero.updateOne({ _id: id },
            data
        )
        if (result) {
            res.status(201).json({ message: 'Hero data updated success' });
        } else {
            res.status(500).json({ error: "Hero not updated" });
        }
    } catch (error) {

    }
}


