const News = require('../models/news');
const Users = require('../models/users');
const Artist = require('../models/artist');
const Shmot = require('../models/shmot');
const Korz = require('../models/korz');
const Zakaz = require('../models/zakazi');



exports.getMain = (req, res, next) => {
    const userId = req.query.userId;
    console.log(userId);
    const pop = 1;
    News.findAll()
        .then(news => {
            Users.findByPk(userId)
                .then(user => {
                    Shmot.findAll({ where: { popular: pop } }).then(
                        shmot => {
                            Artist.findAll().then(artist => {
                                res.render('main/main', {
                                    news: news,
                                    user: user,
                                    shmot: shmot,
                                    artist: artist
                                });
                            })


                        }
                    )
                });
        });

}
exports.getProfile = (req, res, next) => {
    const id = req.query.userId;
    Users.findByPk(id)
        .then(user => {
            res.render('main/profile', {
                user: user
            });
        })


}
exports.postQuit = (req, res, next) => {

    res.redirect('/');



}
exports.postUpdatenews = (req, res) => {
    const id = req.body.id;
    const text = req.body.update;
    let idid = req.body.idartistnew;
    Artist.findOne({ where: { id: idid } }).then(artist => {
        if (!artist) {
            res.send("<a href=" + "/main/another-page" + ">" + "<h1>Eror 404</h1><br> Артиста с таким id не существует");
        } else {
            News.update({
                    description: text,
                }, {
                    where: { id: id },
                })
                .then(() => {
                    res.redirect('/main/another-page');
                })
        }
    })



}
exports.postdeleteNews = (req, res) => {
    const id = req.body.iddel;
    News.destroy({
        where: { id: id },
    }).then(() => {
        res.redirect('/main/another-page');
    })



}
exports.getArtist = (req, res, next) => {
    const userId = req.query.userId;

    const raz = req.query.raz;

    Artist.findAll({
        where: { pol: raz },
    }).then(artist => {
        Users.findByPk(userId)
            .then(user => {
                res.render('main/menart', {
                    artist: artist,
                    user: user
                });
            })

    })

}
exports.getShmotka = (req, res) => {

    Shmot.findAll({
        where: { artistId: req.query.art },
    }).then(
        shmot => {
            Users.findByPk(req.query.userId).then(
                user => {
                    Artist.findAll({
                        where: { id: req.query.art },
                    }).then(
                        artist => {
                            res.render('main/shmotka', {
                                user: user,
                                shmot: shmot,
                                artist: artist
                            })
                        }
                    )
                }
            )
        })

}
exports.postReit = (req, res) => {
    let n = req.body.reitrad;
    let id = req.query.sh;
    let user = req.query.user;
    let newr = 0;
    Shmot.findAll({
        where: {
            id: id
        }
    }).then(shmot => {
        var q = shmot[0].reit;
        var qwe = parseInt(n);
        var text = shmot[0].reitkol + 1;
        qwe = qwe + q;
        Shmot.update({
            reitkol: text,
            reit: qwe
        }, {
            where: { id: id },
        }).then(
            res.redirect(`/main/korzina?userId=${user}`)
        )
    })
}
exports.postZakaz = (req, res) => {
    const useri = req.query.userId;
    const sh = req.query.sh;
    let cost;
    let stoim1 = 0;
    let i;


    if (!sh) {
        Users.findByPk(useri).then(user => {

            Korz.findAll({
                where: {
                    iduser: useri
                }
            }).then(items => {

                let info;

                Shmot.findAll().then(shmot => {
                    for (let it of items) {
                        info += "ID Вещи= " + it.idshmot + " Размер= " + it.rz + "  Цвет= " + it.cl + "  Количество= " + it.kol + "  |  ";
                        for (let sho of shmot) {

                            if (it.idshmot == sho.id) {
                                stoim1 = stoim1 + sho.cost;
                            }
                        }

                    }

                    info = info.slice(9);
                    info += " Сумма= " + stoim1;
                    let infouser = "Userid " + user.id + "  " + req.body.name1 + "  " + req.body.name2 + "  " + req.body.name3 + "  Номер: " + req.body.tel;
                    let newZak = {
                        danuser: infouser,
                        infoshmot: info,
                        sobr: 0,
                        otpr: 0,
                        pol: 0
                    }
                    console.log(newZak);
                })





            })
        })
    } else {
        Korz.findOne({
            where: {
                id: sh
            }
        }).then(korz => {
            Shmot.findOne({
                where: {
                    id: korz.idshmot
                }
            }).then(shmotka => {
                cost = shmotka.cost;
                console.log(cost);
                let stoim = cost * korz.kol;
                console.log("st" + stoim);
                let info = "ID Вещи " + korz.idshmot + " Размер " + korz.rz + "  Цвет " + korz.cl + "  Количество " + korz.kol + " Сумма " + stoim;
                Users.findByPk(useri).then(user => {
                    let infouser = "Userid " + user.id + "  " + req.body.name1 + "  " + req.body.name2 + "  " + req.body.name3 + "  Номер: " + req.body.tel;
                    let newZak = {
                        danuser: infouser,
                        infoshmot: info,
                        sobr: 0,
                        otpr: 0,
                        pol: 0
                    }

                    Zakaz.create(newZak);
                    res.redirect(`/main?userId=${useri}`);
                })


            })
        })
    }
}
exports.getKorzina = (req, res) => {
    const userId = req.query.userId;

    Users.findByPk(userId)
        .then(user => {
            Korz.findAll({ where: { iduser: userId } })
                .then(korz => {
                    Shmot.findAll().then(shmot => {
                        res.render('main/korz', {
                            user: user,
                            shmot: shmot,
                            korz: korz
                        })
                    })

                });


        })

}
exports.getZakaz = (req, res) => {
    const userId = req.query.userId;
    const idshmot = req.query.idshmot;
    let l = "";
    if (idshmot == "all") {
        Users.findByPk(userId)
            .then(user => {

                Korz.findAll({ where: { iduser: userId } })
                    .then(korz => {
                        Shmot.findAll().then(shmot => {

                            res.render('main/zakaz', {
                                user: user,
                                shmot: shmot,
                                korz: korz,
                                idshmot: l
                            })
                        })

                    })
            })
    } else {
        Users.findByPk(userId)
            .then(user => {
                Korz.findAll({ where: { id: idshmot } })
                    .then(korz => {
                        Shmot.findAll().then(shmot => {
                            res.render('main/zakaz', {
                                user: user,
                                shmot: shmot,
                                korz: korz,
                                idshmot: idshmot
                            })
                        })

                    });
            })

    }

}
exports.getAnotherPage = (req, res) => {
    const userId = req.query.userId;
    News.findAll().then(news => {
        Users.findByPk(userId)
            .then(user => {
                res.render('main/another-page', {
                    news: news,
                    user: user
                });
            })

    })

}

exports.postCreateNews = (req, res) => {
    let id = req.body.idartist;
    console.log(id);
    Artist.findOne({ where: { id: id } }).then(artist => {
        if (!artist) {
            res.send("<a href=" + "/main/another-page" + ">" + "<h1>Eror 404</h1><br> Артиста с таким id не существует");
        } else {
            const newNews = {
                description: req.body.help,
                idartist: id
            }
            News.create(newNews)
                .then(() => {
                    res.redirect('/main/another-page');
                })
        }
    })


}
exports.getReg = (req, res) => {
    res.render('main/reg');
}
exports.getAuto = (req, res) => {
    res.render('main/auto');
}