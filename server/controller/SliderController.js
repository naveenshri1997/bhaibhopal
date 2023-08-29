require('../db/conn');
const express = require('express');
const fs = require('fs');
const Slider = require('../model/SliderSchema');

module.exports.addslider = async (req, res) => {
    const { title, ordering, category } = req.body;
    const image = req.file.path;
    console.log(image);
    console.log(req.file, req.body);
    try {
        const slide = new Slider({ title, ordering, category, image });
        const result = await slide.save();
        console.log(result);
        if (result) {
            res.status(201).json({ message: 'slider saved' });
        } else {
            res.status(500).json({ message: 'slider not saved' })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.showslider = async (req, res) => {
    try {
        const data = await Slider.find({});
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.showoneslider = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Slider.findOne({ _id: id });
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}
module.exports.deleteslider = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Slider.findOne({ _id: id });
        const result = await Slider.deleteOne({ _id: id });
        fs.unlink(data.image, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        if (result) {
            res.status(201).json({ message: "Slider delete" });
        } else {
            res.status(500).json({ message: "Slider not delete" });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.updateslider = async (req, res) => {
    const { id } = req.params;
    if (req.file) {
        var data = {
            title: req.body.title,
            ordering: req.body.ordering,
            category: req.body.category,
            image: req.file.path,
        }
    } else {
        var data = {
            title: req.body.title,
            ordering: req.body.ordering,
            category: req.body.category,
        }
    }
    try {
        if (data.image) {
            const data1 = await Slider.findOne({ _id: id });
            fs.unlink(data1.image, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        const result = await Slider.updateOne({ _id: id }, data)
        if (result) {
            res.status(201).json({ message: 'Slider data updated success' });
        } else {
            res.status(500).json({ error: "Slider not updated" });
        }
    } catch (error) {

    }
}


