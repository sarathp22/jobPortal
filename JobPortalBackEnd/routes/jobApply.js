var express = require('express');
var router = express.Router();
var JobApply = require('../models/jobApply');
var authenticate = require('../authenticate');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Job apply page");
});

router.route('/job')
.post(authenticate.verifyJobseeker,(req,res,next)=>{

    // console.log(req.user);
    req.body.name=req.user.fname + " " + req.user.lname;
    req.body.jobLocation=req.user.jobLocation;
    req.body.gender=req.user.gender;
    req.body.profileImage=req.user.profileImage;
    req.body.jobseekerId=req.user._id;
    req.body.dob=req.user.dateOfBirth;
    req.body.email=req.user.email;
    req.body.phone=req.user.phone;
    console.log(req.body);
    JobApply.create(req.body).then((data)=>{
      res.send({status:"applied successfully"});
    },(err)=>{next(err)})
    .catch((err)=>{next(err)})

});


router.route('/appliedJobs/:id')
.get(authenticate.verifyEmployer,(req,res,next)=>{
  JobApply.find({jobId:req.params.id,companyId:req.user._id}).then((data)=>{
    res.send(data);
  },(err)=>{next(err)})
  .catch((err)=>{next(err)})
});




module.exports = router;