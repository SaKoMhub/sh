const express = require('express');
const Users = require('../models/users');
const Artist = require('../models/artist');
const Shmot = require('../models/shmot');
const Korz = require('../models/korz');
const multer = require('multer');
const path = require('path');


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/products');
    },
    filename: (req, file, cb) => {
        const pathh = Date.now() + '-' + file.originalname;
        cb(null, pathh);
    }
});
const fileStorage1 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/shmot');
    },
    filename: (req, file, cb) => {
        const pathh = Date.now() + '-' + file.originalname;
        cb(null, pathh);
    }
});
const fileFilter = (req, file, cb) => {
    cb(null, true);
}
exports.upload = (multer({
    storage: fileStorage,
    fileFilter: fileFilter
}).single('avatar'));
exports.uploadd = (multer({
    storage: fileStorage1,
    fileFilter: fileFilter
}).single('avatar'));
exports.getArtist = (req, res, next) => {

    Artist.findAll().then(artist => {
        res.render('main/addartist', {
            artist: artist
        });
    })

}

function typee(per) {
    if (per == "on") {
        return true;

    } else {
        return false;
    }
}

exports.postAddartist = (req, res) => {
    const name = req.body.namee;
    const pol = req.body.poll;
    let filedata = req.file.filename;
    if (!filedata) {
        filedata = "1.png"
    }
    const newArtist = {
        name: name,
        pol: pol,
        avatar: filedata

    }
    Artist.create(newArtist);

    res.redirect('/main/artist')

}
exports.getShmot = (req, res) => {

    Artist.findAll().then(artist => {
        res.render('main/shmot', {
            artist: artist
        });
    })
}
exports.postAddshmot = (req, res) => {
    let filedata = req.file.filename;



    const reit = 0;
    const newShmot = {
        artistId: req.body.idartist,
        name: req.body.name,
        content: req.body.content,
        kol: req.body.kol,
        reit: reit,
        cost: req.body.cost,
        picture: filedata,
        popular: typee(req.body.popular),
        white: typee(req.body.white),
        black: typee(req.body.black),
        red: typee(req.body.red),
        grey: typee(req.body.grey),
        yel: typee(req.body.yel),
        blue: typee(req.body.blue),
        xxs: typee(req.body.xxs),
        xs: typee(req.body.xs),
        s: typee(req.body.s),
        m: typee(req.body.m),
        l: typee(req.body.l),
        xl: typee(req.body.xl),
        xxl: typee(req.body.xxl),
        xxxl: typee(req.body.xxxl),
        reitkol: 0
    }
    console.log(newShmot);
    let id = req.body.idartist;
    Artist.findOne({ where: { id: id } }).then(artist => {
        if (!artist) {
            res.send("<a href=" + "/main/shmot" + ">" + "<h1>Eror 404</h1><br> Артиста с таким id не существует");
        } else {
            res.redirect('/main/shmot');
        }
    })
    Shmot.create(newShmot);
}
exports.postCreateUser = (req, res) => {
    const newUser = {
        login: req.body.login,
        parol: req.body.password,

    };
    console.log(newUser);
    Users.findAll({
            where: {
                login: req.body.login
            }
        })
        .then(users => {

            if (!users[0]) {


                console.log(users[0] + '**********');
                Users.create(newUser)
                    .then(() => {
                        res.redirect('/');
                    })
                    .catch(err => console.log(err));
            } else {
                res.redirect('/main/reg');
                console.log(users[0] + '**********USersuch');
            };

        });



};

exports.postUpdateuser = (req, res, next) => {

    const id = req.query.userId;

    Users.update({
            name1: req.body.name1,
            name2: req.body.name2,
            name3: req.body.name3,
            dom: req.body.dom,
            street: req.body.street,
            gorod: req.body.gorod,
            kv: req.body.kv,
            tel: req.body.tel,
            country: req.body.country,
        }, {
            where: { id: id },
        })
        .then(() => {
            res.redirect(`/main/profile?userId=${id}`);
        })


};
exports.postKorz = (req, res) => {
    let i = req.query.item;
    let user = req.query.userId;
    let artist = req.query.artist;
    let kol = req.body.kol;
    let rz = req.body.rz;
    let cl = req.body.cl;
    let newElem = {
        iduser: user,
        idshmot: i,
        rz: rz,
        cl: cl,
        kol: kol

    }
    Korz.create(newElem);
    res.redirect(`/main/shmotki?art=${artist}&userId=${user}`);
}
exports.postAutoUser = (req, res, next) => {
    const login = req.body.login;
    const password = req.body.password;
    Users.findAll({
            where: {
                login: login
            }
        })
        .then(users => {
            console.log(users[0]);
            if (users[0].parol == password) {

                console.log(users[0].id);
                res.redirect(`/main?userId=${users[0].id}`);
            } else {
                res.redirect('/main/auto');
            }
        })
        .catch(err => console.log(err));

};