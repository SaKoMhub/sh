const Router = require('express').Router;

const mainController = require('../controllers/mainControll');
const adminController = require('../controllers/adminControll');
const mainRouter = Router();
mainRouter.get('/', mainController.getMain);
mainRouter.get('/another-page', mainController.getAnotherPage);
mainRouter.get('/reg', mainController.getReg);
mainRouter.post('/create-news', mainController.postCreateNews);
mainRouter.post('/registrate-user', adminController.postCreateUser);
mainRouter.post('/authorizate-user', adminController.postAutoUser);
mainRouter.get('/artist', adminController.getArtist);
mainRouter.post('/upload', adminController.upload, adminController.postAddartist);
mainRouter.get('/shmot', adminController.getShmot);
mainRouter.post('/addshmot', adminController.uploadd, adminController.postAddshmot);
mainRouter.get('/auto', mainController.getAuto);
mainRouter.get('/profile', mainController.getProfile);
mainRouter.get('/reg', mainController.getReg);
mainRouter.get('/reg', mainController.getReg);
mainRouter.get('/shmotki', mainController.getShmotka);
mainRouter.get('/menart', mainController.getArtist);
mainRouter.post('/quit', mainController.postQuit);
mainRouter.post('/reiting', mainController.postReit);
mainRouter.post('/update-news', mainController.postUpdatenews);
mainRouter.post('/delete-news', mainController.postdeleteNews);
mainRouter.post('/regprofile', adminController.postAutoUser);
mainRouter.post('/updateuser', adminController.postUpdateuser);
mainRouter.post('/korz', adminController.postKorz);
mainRouter.get('/korzina', mainController.getKorzina);
mainRouter.get('/zakaz', mainController.getZakaz);
mainRouter.post('/oformzakaz', mainController.postZakaz);


module.exports = mainRouter;