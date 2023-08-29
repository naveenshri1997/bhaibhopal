require('../db/conn');
const express = require('express');
const Blog = require('../model/BlogSchema');
const fs = require('fs');
module.exports.addblog = async (req, res) => {
    const { title, subtitle, details, category } = req.body;
    const image = req.file.path;
    console.log(image);
    console.log(req.file, req.body);
    try {
        const slide = new Blog({ title, subtitle, details, category, image });
        const result = await slide.save();
        console.log(result);
        if (result) {
            res.status(201).json({ message: 'Blog saved' });
        } else {
            res.status(500).json({ message: 'Blog not saved' })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.showblog = async (req, res) => {
    try {
        const data = await Blog.find({});
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}
module.exports.showbloglimit = async (req, res) => {
    try {
        const data = await Blog.find({}).limit(5);
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.showoneblog = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Blog.findOne({ _id: id });
        res.send({ status: 'ok', data: data })

    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteblog = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Blog.findOne({ _id: id });
        fs.unlink(data.image, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        const result = await Blog.deleteOne({ _id: id });
        if (result) {
            res.status(201).json({ message: "Blog delete" });
        } else {
            res.status(500).json({ message: "Blog not delete" });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports.updateblog = async (req, res) => {
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
            const data1 = await Blog.findOne({ _id: id });
            fs.unlink(data1.image, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        const result = await Blog.updateOne({ _id: id },
            data
        )
        if (result) {
            res.status(201).json({ message: 'Blog data updated success' });
        } else {
            res.status(500).json({ error: "Blog not updated" });
        }
    } catch (error) {

    }
}


