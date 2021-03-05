var mongoose = require('mongoose');
var schema = mongoose.Schema;
var jobApplySchema = new schema({

    name:{
        type:String,
        required: true
                    },
    dob:{
        type:String,
        required: true
                    },
     phone:{
        type:Number,
        required: true
                    },
    email:{
        type:String,
        required: true
                    },
    jobLocation:{
        type:String,
        required: true
                    },
    gender:{
        type:String,
        required: true
                    },
    profileImage:{
        type:String,
        required: true
                    },
    jobId:{
        type:String,
        required: true
                    },
    companyId:{
        type:String,
        required: true
                    },
    jobseekerId:{
        type:String,
        required: true
                    },
    status:{
        type:String,
        default:"Applied"
                    },


});

var JobApply = mongoose.model('JobApply',jobApplySchema);

module.exports = JobApply;