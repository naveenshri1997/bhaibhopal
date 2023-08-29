require('../db/conn');
const express = require('express');
const Gallery = require('../model/GallerySchema');
const fs = require('fs');
module.exports.addgallery = async (req, res) => {
    const { title, imagecategory, category } = req.body;
    const image = req.file.path;
    console.log(image);
    console.log(req.file, req.body);
    try {
        const slide = new Gallery({ title, imagecategory, category, image });
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

module.exports.showgallery = async (req, res) => {
    try {
        const data = await Gallery.find({});
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.showonegallery = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Gallery.findOne({ _id: id });
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}
module.exports.deletegallery = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Gallery.findOne({ _id: id });
        fs.unlink(data.image, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        const result = await Gallery.deleteOne({ _id: id });
        if (result) {
            res.status(201).json({ message: "Slider delete" });
        } else {
            res.status(500).json({ message: "Slider not delete" });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.updategallery = async (req, res) => {
    const { id } = req.params;
    if (req.file) {
        var data = {
            title: req.body.title,
            imagecategory: req.body.imagecategory,
            category: req.body.category,
            image: req.file.path,
        }
    } else {
        var data = {
            title: req.body.title,
            imagecategory: req.body.imagecategory,
            category: req.body.category,
        }
    }

    try {
        if (data.image) {
            const data1 = await Gallery.findOne({ _id: id });
            fs.unlink(data1.image, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        const result = await Gallery.updateOne({ _id: id }, data)
        if (result) {
            res.status(201).json({ message: 'Slider data updated success' });
        } else {
            res.status(500).json({ error: "Slider not updated" });
        }

    } catch (error) {
        console.log(error);
    }
}


