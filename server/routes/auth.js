const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtkey = 'e-com';
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.category);
        return cb(null, "./public/upload");
    },
    filename: function (req, file, cb) {

        return cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });
require('../db/conn');
const uploadPhoto = require("../middleware/uploads");
const BasicDetail = require('../model/basicDetailSchema');
const User = require('../model/user');
const Navbar = require('../model/navbarSchema');
const Law = require('../model/LawsSchema');
const Judgement = require('../model/JudgementSchema');
const { addslider, showslider, deleteslider, updateslider, showoneslider } = require("../controller/SliderController");
const { addtemplate, showtemplate, deletetemplate, updatetemplate, showonetemplate } = require("../controller/TemplateController");
const { addabout, showabout, deleteabout, updateabout, showoneabout } = require("../controller/AboutController");
const { addblog, showblog,showbloglimit, deleteblog, updateblog, showoneblog } = require("../controller/BlogController");
const { addcontact, showcontact, deletecontact } = require("../controller/ContactController");
const { addmeeting, showmeeting, deletemeeting, updatemeeting, showonemeeting } = require("../controller/MeetingController");
const { addgallery, showgallery, deletegallery, updategallery, showonegallery } = require("../controller/GalleryController");
const { addhero, showhero, deletehero, updatehero, showonehero } = require("../controller/HerosController");
router.get('/', (req, res) => {
    res.send("heool from server");
})
router.post('/addslider', uploadPhoto.single('image'), addslider);
router.get('/showslider', showslider);
router.get('/showoneslider/:id', showoneslider);
router.delete('/deleteslider/:id', deleteslider);
router.put('/updateslider/:id', uploadPhoto.single('image'), updateslider);

router.post('/addtemplate', uploadPhoto.single('image'), addtemplate);
router.get('/showtemplate', showtemplate);
router.get('/showonetemplate/:id', showonetemplate);
router.delete('/deletetemplate/:id', deletetemplate);
router.put('/updatetemplate/:id', uploadPhoto.single('image'), updatetemplate);

router.post('/addabout', uploadPhoto.single('image'), addabout);
router.get('/showabout', showabout);
router.get('/showoneabout/:id', showoneabout);
router.delete('/deleteabout/:id', deleteabout);
router.put('/updateabout/:id', uploadPhoto.single('image'), updateabout);

router.post('/addblog', uploadPhoto.single('image'), addblog);
router.get('/showblog', showblog);
router.get('/showbloglimit', showbloglimit);
router.get('/showoneblog/:id', showoneblog);
router.delete('/deleteblog/:id', deleteblog);
router.put('/updateblog/:id', uploadPhoto.single('image'), updateblog);

router.post('/addcontact', addcontact);
router.get('/showcontact', showcontact);
router.delete('/deletecontact/:id', deletecontact);

router.post('/addmeeting', uploadPhoto.single('image'), addmeeting);
router.get('/showmeeting', showmeeting);
router.get('/showonemeeting/:id', showonemeeting);
router.delete('/deletemeeting/:id', deletemeeting);
router.put('/updatemeeting/:id', uploadPhoto.single('image'), updatemeeting);

router.post('/addgallery', uploadPhoto.single('image'), addgallery);
router.get('/showgallery', showgallery);
router.get('/showonegallery/:id', showonegallery);
router.delete('/deletegallery/:id', deletegallery);
router.put('/updategallery/:id', uploadPhoto.single('image'), updategallery);

router.post('/addhero', uploadPhoto.single('image'), addhero);
router.get('/showhero', showhero);
router.get('/showonehero/:id', showonehero);
router.delete('/deletehero/:id', deletehero);
router.put('/updatehero/:id', uploadPhoto.single('image'), updatehero);

router.post('/basicdetails', async (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(422).json({ error: "plz fill" });
    }

    try {
        const basicdetail = new BasicDetail({ name, age });
        const basic = await basicdetail.save();
        if (basic) {
            res.status(201).json({ message: "registered successfully" });
        }
        else {
            res.status(500).json({ error: "not registered " });
        }
    } catch (error) {
        console.log("error==", error);
    }
})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ 'err': 'plz fill details' });
        }
        //       database username:username is you typed        
        const userLogin = await User.findOne({ username: username });

        if (!password == userLogin.password) {
            res.status(400).json({ error: "invalid" });
        } else {
            // if (userLogin) {
            //     console.log(userLogin);
            //     jwt.sign({ userLogin }, jwtkey, { expiresIn: "2h" }, (err, token) => {
            //         if (err) {
            //             res.json({ message: "jwt error" });
            //         }
            //         console.log(token);
            //         res.json({ userLogin, auth: token })
            //     })
            // }
            res.json({ message: "user login successfully" });
        }
    } catch (error) {
        console.log(error);
    }
})
router.get('/navbardata', async (req, res) => {
    try {
        const navbardata = await Navbar.find({});
        console.log(navbardata);
        res.send({ status: 'ok', data: navbardata })
    } catch (error) {
        console.log(error);
    }
})

// add law
router.post('/addlaw', async (req, res) => {
    const { law_title, law_Subtitle, law_details,category } = req.body;

    try {
        const laws = new Law({ law_title, law_Subtitle, law_details,category });
        const law = await laws.save();
        if (law) {
            res.status(201).json({ message: 'data send success' });
        } else {
            res.status(500).json({ error: "not registered " });
        }
    } catch (error) {
        console.log(error);
    }
})

// show all law data
router.get('/lawdata', async (req, res) => {
    try {
        const lawdata = await Law.find({});
        res.send({ status: 'ok', data: lawdata })

    } catch (error) {
        console.log(error);
    }
})
// show all data for navbar with limit
router.get('/lawdatanavbar', async (req, res) => {
    try {
        const lawdata = await Law.find({}).limit(5);
        res.send({ status: 'ok', data: lawdata })

    } catch (error) {
        console.log(error);
    }
})
// law single Show
router.get('/lawdataone/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const lawdataone = await Law.findOne({ _id: id });
        res.send({ status: 'ok', data: lawdataone })

        if (lawdataone) {
            res.status(201).json({ message: "show one law data" });
        } else {
            res.status(500).json({ message: 'nothing to show data' });
        }

    } catch (error) {
        console.log(error);
    }
})
// law Delete
router.delete('/dellaw/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        const lawdel = await Law.deleteOne({ _id });
        if (lawdel) {
            res.status(201).json({ message: "deleted" });
        } else {
            res.status(500).json({ message: 'not deleted' });
        }
    } catch (error) {
        console.log(error);
    }
})

// Law update
router.put('/lawdataone/:id', async (req, res) => {
    const { id } = req.params;

    const result = await Law.updateOne(
        { _id: id },
        {
            $set: req.body
        }
    )
    if (result) {
        res.status(201).json({ message: 'data updated success' });
    } else {
        res.status(500).json({ error: "not registered " });
    }
})

// insert judgementc
router.post('/addjudgement', uploadPhoto.single('image'), async (req, res) => {
    const { title, subtitle, details, category } = req.body;
    const image = req.file.path;
    console.log(req.file, req.body);
    try {
        const judge = new Judgement({ title, subtitle, details, category, image });
        const result = await judge.save();
        console.log(result);
        if (result) {
            res.status(201).json({ message: 'judgement saved' });
        } else {
            res.status(500).json({ message: 'judgement not saved' })
        }
    } catch (error) {
        console.log(error);
    }
})

//show judgement
router.get('/showjudgement', async (req, res) => {
    try {

        const result = await Judgement.find({});
        res.send({ status: 'ok', data: result })

    } catch (error) {
        console.log(error);
    }
})

//show judegent _ with limit
router.get('/showjudgementlimit', async (req, res) => {
    try {

        const result = await Judgement.find({}).limit(5);
        res.send({ status: 'ok', data: result })

    } catch (error) {
        console.log(error);
    }
})
//show one judgement
router.get('/getonejudgement/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Judgement.findOne({ _id: id });
        res.send({ status: 'ok', data: result })

        if (result) {
            res.status(201).json({ message: "judgement delete" });
        } else {
            res.status(500).json({ message: "judgement not delete" });
        }
    } catch (error) {
        console.log(error);
    }
})

// delete judgement
router.delete('/deletejudgement/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        const data1 = await Judgement.findOne({ _id: _id });
        fs.unlink(data1.image, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
        const result = await Judgement.deleteOne({ _id: _id });
        if (result) {
            res.status(201).json({ message: "judgement delete" });
        } else {
            res.status(500).json({ message: "judgement not delete" });
        }
    } catch (error) {
        console.log(error);
    }
})
router.put('/updatejudgement/:id', uploadPhoto.single('image'), async (req, res) => {
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
            const data1 = await Judgement.findOne({ _id: id });
            fs.unlink(data1.image, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        const result = await Judgement.updateOne(
            { _id: id },
            data
        )
        if (result) {
            res.status(201).json({ message: 'judgement data updated success' });
        } else {
            res.status(500).json({ error: "not updated" });
        }
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;
