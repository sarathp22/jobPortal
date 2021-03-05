var mongoose = require('mongoose');
var schema = mongoose.Schema;
var jobPostSchema = new schema({

    companyId:{
        type:String,
        required: true
                    },
    cname:{
        type:String,
        required: true
                    },
    jobCode:{
            type:String,
            required: true
                        },
    description:{
            type:String,
            required: true
                    },
    jobTitle:{
                type:String,
                required: true
                    },
    email:{
            type:String,
            required: true
                    },
    jobType:{
                type:String,
                required: true
            },
            nop:{
                type:Number,
                required: true
            },
            salary:{
                type:Number,
                required: true
            },
            experience:{
                type:Number,
                required: true
            },
            qualification:{
                type:String,
                required: true
            },
            industry:{
                type:String,
                required: true
            },
            genderRequired:{
                type:String,
                required: true
            },
            country:{
                type:String,
                required: true
            },
            city:{
                type:String,
                required: true
            },
            deadlineDate:{
                type:String,
                required: true
                                },
            reqSkills:{
                type:String,
                required: true
            },  
            eduExp:{
                type:String,
                required: true
            },                  
            workLogo:{
                type:String,
                default:''
            },
        status:{
                type:String,
                default:'Posted'
                                },

},{
    timestamps:true,
})

var JobPosts = mongoose.model('JobPost',jobPostSchema);

module.exports = JobPosts