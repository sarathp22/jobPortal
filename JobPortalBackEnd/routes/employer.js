var express = require('express');
var router = express.Router();
var passport = require('passport');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'oulook',
  auth: {
    user: 'sarathp22@outlook.com',
    pass: '12345678'
  }
});
var authenticate = require('../authenticate');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
var Employer = require('../models/employer');
var JobPosts = require('../models/jobPosts');
var JobSeeker = require('../models/jobSeeker');
var JobApply = require('../models/jobApply');

/* GET users listing. */
// router.route('/')
// .get(function(req, res, next) {
//   res.send('respond with a resource');
// })
// .post((req,res,next)=>{
    
//     Employer.findOne({email:req.body.email}).then((temp)=>{
//       if(temp)
//       {
//         res.status(404).send({e:"Email already registered"});
        
//       }

//       else
//       {
//         Employer.create(req.body).then((data)=>{
//           res.status(200).send({respo:"signup successfull"});
//         },
//         (err)=>{ next(err) }
//         )
//         .catch((err)=>next(err))
//       }


//     })
// });

router.route('/signup')
.post((req, res, next) => {
  Employer.register(new Employer({username:req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      if (req.body.username)
        user.email = req.body.username;
      if (req.body.cname)
        user.cname = req.body.cname;
      if (req.body.phone)
        user.phone = req.body.phone;
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('localEmployer')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      });
    }
  });
});

// router.route('/login')
// .post((req,res,next)=>{
//   console.log("Hai");
//   // res.send("signup successfull");

//   console.log(req.body);
//   Employer.findOne({email:req.body.email}).then((user)=>{
//     if(user)
//     {
//       if(user.password == req.body.password)
//       {
//         res.status(200).send({userId:user._id});
//       }
//       else
//       {
//         res.status(404).send({e:"Wrong Password"});
//       }
//     }
//     else
//     {
//       res.status(404).send({e:"Email not registered"});
//     }
//   })


// });


router.route('/login')
.post((req, res, next) => {

  passport.authenticate('localEmployer', (err, user, info) => {
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
        if(user.status == true)
        {
          var token = authenticate.getToken({_id: req.user._id});
           res.statusCode = 200;
          // console.log(req.user._id);
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Login Successful!', token: token,userType:2,id:req.user._id});
        }
        else
        {
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 401;
          res.json({success: false, status: 'Contact admin for approval', err:{message:'Contact admin for approval'}});
        }
      
    }); 
  }) (req, res, next);
});


router.route('/checkJWTtoken')
.get((req, res) => {
  passport.authenticate('jwt', {session: false}, (err, user, info) => {
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



router.route('/user/:id')
.get(authenticate.verifyEmployer,(req,res,next)=>
{
  console.log("entered");
  Employer.findOne({_id:req.params.id},{userType:0,completed:0,password:0}).then((data)=>
    {
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>next(err))
})
.put((req,res,next)=>
{
  console.log("entered");
  Employer.findOneAndUpdate({_id:req.params.id},{$set:{ companyCategory:req.body.companyCategory,since:req.body.since,teamSize:req.body.teamSize,description:req.body.description,address:req.body.address,city:req.body.city,state:req.body.state,country:req.body.country, }},{new:true}).then((data)=>
    {
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>next(err))
});


router.route('/postedJobs/:id')
.get((req,res,next)=>
{
  console.log("entered");
  JobPosts.find({companyId:req.params.id}).then((data)=>
    {
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>next(err))
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

router.route('/shortList/:id')
.get((req,res,next)=>
{
  console.log("entered");
  JobApply.findOneAndUpdate({_id:req.params.id},{$set:{status:"Shortlisted"}}).then((data)=>
    {
      console.log(data);

      //logic here

      JobPosts.findOne({_id:data.jobId}).then((data1)=>{
        
        console.log('You are short listed for the post ' + data1.jobTitle);
        // var mailOptions = {
        //   from: 'sarathp22@outlook.com',
        //   to: 'data.email',
        //   subject: data1.name + 'Job Interview',
        //   text: 'You are short listed for the post ' + data1.jobTitle
        // };
  
        // transporter.sendMail(mailOptions, function(error, info){
        //   if (error) {
        //     console.log(error);
        //   } else {
        //     console.log('Email sent: ' + info.response);
        //   }
        // });
  
        res.status(200).send(data);


      },(err)=>{next(err)}
      )
      .catch((err)=>next(err));

      
    },
    (err)=>{next(err)}
    )
    .catch((err)=>next(err))
});

router.route('/changePassword')
.post((req,res,next)=>
{
  console.log("entered");
  Employer.findOne({_id:req.body.employerId},(err,user)=>{
    // console.log(req.body);
    if(err){
      res.setHeader('Content-Type', 'application/json');
      res.json({success:false,message:err});
    }
    else{
      if(!user)
      {
        res.setHeader('Content-Type', 'application/json');
        res.json({success:false,message:'User not found'})
      }
      else{
        user.changePassword(req.body.oldpassword, req.body.newpassword, function(err){
          if(err){
            if(err.name === 'IncorrectPasswordError'){
              res.setHeader('Content-Type', 'application/json');
              res.json({success:false,message:'Incorrect password'});
            }
            else{
              res.setHeader('Content-Type', 'application/json');
              res.json({success:false, message: 'Something went wrong!! please try again after sometimes.'})
            }
          }
          else{
            console.log(success);
            res.setHeader('Content-Type', 'application/json');
            res.json({success:true, message:'Your password has been changed sucsessfully'});
          }
        })
      }
    }
  })
});






module.exports = router;
