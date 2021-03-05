var express = require('express');
var fs = require('fs');
var pdf = require("pdf-creator-node");
var router = express.Router();
var passport = require('passport');
var authenticate = require('../authenticate');
var Employer = require('../models/employer');
var JobPosts =require('../models/jobPosts');
var JobApply = require('../models/jobApply');
var JobSeeker = require('../models/jobSeeker');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/login')
.post((req, res, next) => {
    console.log(req.body);
    console.log("login credentials");
    passport.authenticate('local', (err, user, info) => {
      if (err)
        return next(err);
  
      if (!user) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, status: 'Login Unsuccessful!', err: info});
      }
      req.logIn(user, (err) => {
        if (err) {
          res.statusCode = 401;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: false, status: 'Login Unsuccessful!', err: 'Could not log in user!'});          
        }

        //logic here
      if(user.userType == 0)
      {
        var token = authenticate.getToken({_id: req.user._id});
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'Login Successful!', token: token, id:user._id, userType: 1});
      }
      else
      {
        var token = authenticate.getToken({_id: req.user._id});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Login Successful!', token: token, id:user._id, userType: 0});
      }
      }); 
    }) (req, res, next);
  });

  router.route('/checkJWTtoken')
.get((req, res) => {
  passport.authenticate('admin', {session: false}, (err, user, info) => {
    if (err)
      return next(err);
    
    if (!user) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      return res.json({status: 'JWT invalid!', success: false, err: info});
    }
    else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.json({status: 'JWT valid!', success: true, user: user});

    }
  }) (req, res);
});

router.route('/employerForApproval')
.get((req,res,next)=>{
    Employer.find({status:false}).then((data)=>{
        res.status(200).send(data);
    },(err)=>{next(err)})
    .catch((err)=>{next(err)})
});

router.route('/employerForApproval/:id')
.put((req,res,next)=>{
    Employer.findOneAndUpdate({_id:req.params.id},{$set:{status:true}},{new:true}).then((data)=>{
        res.status(200).send(data);
    },(err)=>{next(err)})
    .catch((err)=>{next(err)})
});


router.route('/getEmployersList')
.get((req,res,next)=>{
    Employer.find({status:true}).then((data)=>{
        res.status(200).send(data);
    },(err)=>{next(err)})
    .catch((err)=>{next(err)})
});

router.route('/getEmployersList/:id')
.get((req,res,next)=>{
    Employer.findOne({_id:req.params.id}).then((data)=>{
        res.status(200).send(data);
    },(err)=>{next(err)})
    .catch((err)=>{next(err)})
});

router.route('/getEmployerPostedJobs/:id')
.get((req,res,next)=>{
  JobPosts.find({companyId:req.params.id}).then((data)=>{
        res.status(200).send(data);
    },(err)=>{next(err)})
    .catch((err)=>{next(err)})
});

router.route('/getPostedJobDetails/:id')
.get((req,res,next)=>{
  JobPosts.findOne({_id:req.params.id}).then((data)=>{
        res.status(200).send(data);
    },(err)=>{next(err)})
    .catch((err)=>{next(err)})
})
.delete((req,res,next)=>{
  JobPosts.findOneAndDelete({_id:req.params.id}).then((data)=>{
        res.status(200).send({status:"deleted successfully"});
    },(err)=>{next(err)})
    .catch((err)=>{next(err)})
});

router.route('/getApplicantDetails/:id')
.get((req,res,next)=>{
  JobApply.find({jobId:req.params.id}).then((data)=>{
        res.status(200).send(data);
    },(err)=>{next(err)})
    .catch((err)=>{next(err)})
});

router.route('/profileData/:id')
.get((req,res,next)=>
{
  console.log("entered");
 JobSeeker.findOne({_id:req.params.id},{password:0,usertype:0}).then((data)=>
    {
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>next(err))
});


router.route('/createProfilePdf/:id')
.get((req,res,next)=>
{
  console.log("entered");
//  JobSeeker.findOne({_id:req.params.id},{password:0,usertype:0}).then((data)=>
//     {
//       res.status(200).send(data);
//     },
//     (err)=>{next(err)}
//     )
//     .catch((err)=>next(err))
var id = req.params.id;
JobSeeker.findOne({_id:req.params.id}).then((data)=>{
  var qual=`<div style="display:flex;flex-direction: row;">`;
  var work=`<div style="display:flex;flex-direction: row;">`;
  function qualification()
  {
    for(var i=0;i<data.qualification.length;i++)
    {
      
      qual+= `<div>`+"          " + `<span>${data.qualification[i].qualification} </span>` + "          " +  `<span> ${data.qualification[i].university} </span>` + "          "+ `<span>${data.qualification[i].marks}</span>`+"\n"+`</div>`
    }
    qual+=`</div>`
    return qual;
  }

  function workExperience()
  {

    for(var i=0;i<data.workExperience.length;i++)
    {
      work+= `<div>`+"      " + `<span>${data.workExperience[i].companyName} </span>` + "      " + `<span>${data.workExperience[i].role} </span>` + "      "+`<span>${data.workExperience[i].from} </span>`+"      "+`<span>${data.workExperience[i].to} </span>`+"\n"
    }
    work+=`</div>`;
    return work;

  }
  var userSkills="";
  function skills()
  {
    for(var i=0;i<data.skills.length;i++)
    {
      userSkills+=data.skills[i] + ", " 
    }
    return userSkills;
  }

  var userName=data.fname+ " " +data.lname;
  var profileImage=data.profileImage;

  var html=`<!DOCTYPE html>
  <html>
      <head>
          <mate charest="utf-8" />
          <title>Hello world!</title>
      </head>
      <body>
          <div>
               <img src="http://localhost:3000/images/${profileImage}" width="150px" height="150px" alt="profile pic" style="float: right;">
          </div>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <div style="display:flex;flex-direction: row;">
            <span>Name: </span>
            <span style="color: red;">${userName}</span>
          </div>
          <div style="display:flex;flex-direction: row;">
            <span>Phone: </span>
            <span>${data.phone}</span>
          </div>
          <div style="display:flex;flex-direction: row;">
            <span>Email: </span>
            <span>${data.username}</span>
          </div>
          <div style="display:flex;flex-direction: row;">
            <span>Address: </span>
            <span>${data.address}</span>
          </div>
          <div style="display:flex;flex-direction: row;">
            <span>Date of Birth: </span>
            <span>${data.dateOfBirth}</span>
          </div>
          <div style="display:flex;flex-direction: row;">
            <span>Qualification </span>
            <span>University</span>
            <span>Marks</span>
          </div>
          ${qualification()}
          ${workExperience()}
          <div style="display:flex;flex-direction: row;">
          <span>Skills: </span><span>${skills()}</span>
          </div>
      </body>
  </html>`;

  var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;"><h3>Profile</h3></div>'
    },
    "footer": {
        "height": "28mm",
        "contents": {
        first: 'Cover page',
        2: 'Second page', // Any page number is working. 1-based index
        default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
        last: 'Last Page'
    }
  }
  };

  var document = {
    html: html,
    path: './public/files/'+req.params.id+'.pdf'
};
  

  pdf.create(document, options)
  .then(res => {
      console.log(res)
  })
  .catch(error => {
      console.error(error)
  });

  // fs.writeFile('./public/files/'+req.params.id+'.pdf' ,"Name: "+data.fname+" "+data.lname+"\n"+"contact: "+data.phone+"\n"+"Email: "+data.username+"\n"+"Address: "+data.address+"\n"+"Date of Birth: "+data.dateOfBirth+"\n"+"\n"+"Qualifications"+"\n"+"\n"+"      "+"Qualification"+"      "+"University"+"      "+"Marks"+"\n"+"\n"+qualification()+"\n"+"\n"+"Work Experience"+"\n"+"\n"+"      "+"Company Name"+"      "+"Role"+"      "+"From"+"      "+"To"+"\n"+"\n"+workExperience()+"\n"+"\n"+"Skills"+"\n"+"\n"+"Skills: "+skills(),(err)=>{
  //   if(err)
  //   {
  //     console.log(err);
  //   }
  // });
},(err)=>{
  next(err);
})
.catch((err)=>{next(err)})


});

module.exports = router;
