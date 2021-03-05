var express = require('express');
var router = express.Router();
var JobSeeker = require('../models/jobSeeker');
var Employer = require('../models/employer')
var multer  = require('multer');
const DIR = './public/images';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()+ '-' +file.originalname);
    }
});
let upload = multer({storage: storage});


/* GET home page. */
router.route('/')
.get(function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.route('/upload/uploadLogo/:id')
.put(upload.single('logo'),(req,res,next)=>{
    var user = req.params.id;
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });

      } else {
        console.log('file received');
        Employer.findOneAndUpdate({_id:user},{$set:{ logoImage:req.file.filename, }},{new:true}).then((t)=>{
            res.send(t);
                                                    
                                                            }
        , (err) => next(err)).catch((err)=>next(err));




        console.log(req.file.path);
        console.log(req.file.filename);
        // return res.send({
        //   success: true
        // })
      }


});



router.route('/upload/uploadImage/:id')
.put(upload.single('profilePic'),(req,res,next)=>{
    var user = req.params.id;
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });

      } else {
        console.log('file received');
        JobSeeker.findOneAndUpdate({_id:user},{$set:{ profileImage:req.file.filename, }},{new:true}).then((t)=>{
            res.send(t);
                                                    
                                                            }
        , (err) => next(err)).catch((err)=>next(err));




        console.log(req.file.path);
        console.log(req.file.filename);
        // return res.send({
        //   success: true
        // })
      }


});



router.route('/upload/resume/:id')
.put(upload.single('resume'),(req,res,next)=>{
    var user = req.params.id;
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });

      } else {
        console.log('file received');
        JobSeeker.findOneAndUpdate({_id:user},{$set:{ resume:req.file.filename, }},{new:true}).then((t)=>{
            res.send(t);
                                                    
                                                            }
        , (err) => next(err)).catch((err)=>next(err));




        console.log(req.file.path);
        console.log(req.file.filename);
        // return res.send({
        //   success: true
        // })
      }


});

module.exports = router;