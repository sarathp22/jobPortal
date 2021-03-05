var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var passport = require('passport');
var authenticate = require('../authenticate');
router.use(bodyParser.json());
var JobSeeker = require('../models/jobSeeker');
var JobPosts = require('../models/jobPosts');
var authenticate = require('../authenticate');

/* GET users listing. */
// router.route('/')
// .get(function(req, res, next) {
//   res.send('respond with a resource');
// })
// .post((req,res,next)=>{
    
//     JobSeeker.findOne({email:req.body.email}).then((temp)=>{
//       if(temp)
//       {
//         res.status(404).send({e:"Email already registered"});
        
//       }

//       else
//       {
//         JobSeeker.create(req.body).then((data)=>{
//           res.status(200).send({respo:"signup successfull"});
//         },
//         (err)=>{ next(err) }
//         )
//         .catch((err)=>next(err))
//       }


//     })
  
//   });



  router.route('/signup')
.post((req, res, next) => {
  JobSeeker.register(new JobSeeker({username:req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      if (req.body.fname)
        user.fname = req.body.fname;
      if (req.body.lname)
        user.lname = req.body.lname;
      if (req.body.phone)
        user.phone = req.body.phone;
      if (req.body.username)
        user.email = req.body.username;
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
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
//   JobSeeker.findOne({email:req.body.email}).then((user)=>{
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
      if(user.userType == 1)
      {
        var token = authenticate.getToken({_id: req.user._id});
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'Login Successful!', token: token, id:user._id, userType: 1});
      }
      else
      {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 401;
        res.json({success: false, status: 'Invalid usename or password', err:{message:'Invalid usename or password'}});
      }

    }); 
  }) (req, res, next);
});

router.route('/checkJWTtoken')
.get((req, res) => {
  passport.authenticate('ordinary', {session: false}, (err, user, info) => {
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
.get(authenticate.verifyJobseeker,(req,res,next)=>
{
  console.log("entered");
    JobSeeker.findOne({_id:req.params.id},{userType:0,password:0}).then((data)=>
    {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>next(err))
})
.put((req,res,next)=>
{
  
  console.log(req.body.skills.skills);
  console.log("entered");
    JobSeeker.findOneAndUpdate({_id:req.params.id},{$set:{ gender:req.body.gender,address:req.body.address,jobCategory:req.body.jobCategory,dateOfBirth:req.body.dateOfBirth,jobLocation:req.body.jobLocation,qualification:req.body.qualification,skills:req.body.skills }},{new:true}).then((data)=>
    {
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>next(err))
});


router.route('/userLastPage/:id')
.get((req,res,next)=>
{
  console.log("entered");
    JobSeeker.findOne({_id:req.params.id},{userType:0,completed:0,password:0}).then((data)=>
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
  console.log(req.body);
    JobSeeker.findOneAndUpdate({_id:req.params.id},{$set:{ gender:req.body.gender,address:req.body.address,jobCategory:req.body.jobCategory,dateOfBirth:req.body.dateOfBirth,jobLocation:req.body.jobLocation,completed:true,enRead:req.body.enRead,enWrite:req.body.enWrite,enSpeak:req.body.enSpeak,hiRead:req.body.hiRead,hiWrite:req.body.hiWrite,hiSpeak:req.body.hiSpeak,moRead:req.body.moRead,moWrite:req.body.moWrite,moSpeak:req.body.moSpeak,moLang:req.body.moLang,skills:req.body.skills,workExperience:req.body.workExperience }},{new:true}).then((out)=>
    {
      // JobSeeker.findOne({_id:req.params.id}).then((data)=>{
      //   for(i=0;i<req.body.skills.length;i++)
      //   {
      //     data.skills.push(req.body.skills[i])
      //   }
      //   data.save().then((data2)=>{
        
      //   },(err)=> next(err) )
      //   .catch((err)=>{next(err)});
        
      // },(err)=> next(err) )
      // .catch((err)=>{next(err)});
      res.status(200).send(out);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>next(err))
});


router.route('/jobs')
.get(authenticate.verifyJobseeker,(req,res,next)=>
{
  
  var data = req.user.qualification;
  console.log(data);
  var len = data.length;
  var query=[];
  for(var i=0;i<len;i++)
  {
    var temp={qualification:data[i].qualification}
    query.push(temp);
  }
  console.log(query);
  
  JobPosts.find({ $or:query}).then((data)=>
    {
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>{console.log(err);next(err)})
});

router.route('/jobs/specificJob/:id')
.get((req,res,next)=>
{
  
  JobPosts.findOne({_id:req.params.id}).then((data)=>
    {
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>{console.log(err);next(err)})
});

router.route('/userDetail/specificData/:id')
.get((req,res,next)=>
{
  
  JobSeeker.findOne({_id:req.params.id},{fname:1,lname:1,jobLocation:1,gender:1,profileImage:1}).then((data)=>
    {
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>{console.log(err);next(err)})
});

router.route('/profileUpdate/:id')
.put((req,res,next)=>
{
  
  JobSeeker.findOneAndUpdate({_id:req.params.id},{$set:{qualification:req.body.qualification,workExperience:req.body.workExperience,jobCategory:req.body.jobCategory,jobLocation:req.body.jobLocation}},{new:true}).then((data)=>
    {
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>{console.log(err);next(err)})
});



router.route('/changePassword')
.post((req,res,next)=>
{
  console.log("entered");
  JobSeeker.findOne({_id:req.body.jobseekerId},(err,user)=>{
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


router.route('/cityFilterData/:id')
.put(authenticate.verifyJobseeker,(req,res,next)=>
{
  var qual = req.user.qualification;
  // console.log(qual);
  var len = qual.length;
  var query=[];
  for(var i=0;i<len;i++)
  {
    var temp={qualification:qual[i].qualification}
    query.push(temp);
  }
  console.log(query);

  var data={};
  if(req.body.city)
  {
    data.city= { $regex: new RegExp("^" + req.body.city.toLowerCase(), "i") };
  }
  if(req.body.keyWord)
  {
    data.jobTitle= { $regex: new RegExp("^" + req.body.keyWord.toLowerCase(), "i") };
  }
  // JobPosts.find({$and:[{$or:[data]},,{$or:query}]}).then((data1)=>
  JobPosts.find(data).then((data1)=>
    {
      res.status(200).send(data1);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>{console.log(err);next(err)})
});

router.route('/indusrtyFilterData/:id')
.put(authenticate.verifyJobseeker,(req,res,next)=>
{
  var qual = req.user.qualification;
  // console.log(qual);
  var len = qual.length;
  var query=[];
  for(var i=0;i<len;i++)
  {
    var temp={qualification:qual[i].qualification}
    query.push(temp);
  }
  console.log(query);

  // var data={};
  // if(req.body.city)
  // {
  //   data.city= { $regex: new RegExp("^" + req.body.city.toLowerCase(), "i") };
  // }
  // if(req.body.keyWord)
  // {
  //   data.jobTitle= { $regex: new RegExp("^" + req.body.keyWord.toLowerCase(), "i") };
  // }
  
  JobPosts.find({industry:req.body.industry}).then((data1)=>
    {
      res.status(200).send(data1);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>{console.log(err);next(err)})
});



module.exports = router;
