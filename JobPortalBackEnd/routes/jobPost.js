var express = require('express');
var router = express.Router();
const authenticate = require('../authenticate');
var JobPost = require('../models/jobPosts');
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
router.get('/', function(req, res, next) {
  res.send("job Post page")
});

router.route('/employer/newJob')
.post(authenticate.verifyEmployer,upload.single('workLogo'),(req,res,next)=>{
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });

      } else {
        console.log('file received');
        JobPost.create({companyId:req.body.companyId,cname:req.user.cname,email:req.body.email,jobCode:req.body.jobCode,description:req.body.description,jobTitle:req.body.jobTitle,jobType:req.body.jobType,nop:req.body.nop,salary:req.body.salary,experience:req.body.experience,qualification:req.body.qualification,industry:req.body.industry,genderRequired:req.body.genderRequired,country:req.body.country,city:req.body.city,deadlineDate:req.body.deadlineDate,reqSkills:req.body.reqSkills,reqSkills:req.body.reqSkills,workLogo:req.file.filename,eduExp:req.body.eduExp}).then((data)=>{
          res.status(200).send({status:"true"});
        },(err)=>next(err))
        .catch((err)=>next(err));
        // console.log(req.body.companyId);
    }
    
});


module.exports = router;
