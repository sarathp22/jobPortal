var express = require('express');
var router = express.Router();
var JobPosts = require('../models/jobPosts');

router.route('/jobs')
.get((req,res,next)=>
{
  
  JobPosts.find({}).then((data)=>
    {
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>{console.log(err);next(err)})
});

router.route('/jobsLimit')
.get((req,res,next)=>
{
  
  JobPosts.find({}).sort({createdAt:1}).limit(6).then((data)=>
    {
      res.status(200).send(data);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>{console.log(err);next(err)})
});


router.route('/cityFilterData/:id')
.put((req,res,next)=>
{
  
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
.put((req,res,next)=>
{
  
  
  JobPosts.find({industry:req.body.industry}).then((data1)=>
    {
      res.status(200).send(data1);
    },
    (err)=>{next(err)}
    )
    .catch((err)=>{console.log(err);next(err)})
});


module.exports = router;