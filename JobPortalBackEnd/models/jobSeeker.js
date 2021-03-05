var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var experienceSchema = new Schema({
        companyName:{
                type:String,
                default:''
                            },
        role:{
                type:String,
                default:''
                            },
        from:{
                type:String,
                default:''
                            },
        to:{
                type:String,
                default:''
                            },
});

var qualificationSchema = new Schema({

        qualification:{
                type:String,
                default:''
                            },
        university:{
            type:String,
            default:''
                        },
        marks:{
            type:Number,
            default:null
                        },

});

// var skillsSchema = new mongoose.Schema ({

//                 type:String,
//                 required: true

// });






var jobSeekerSchema = new Schema({

    username: {
        type:String,
        default:''
                    },
    password: {
        type:String,
        default:''
                    },
    fname:{
            type:String,
            default:''
                        },
    lname:{
            type:String,
            default:''
                        },
    email:{
            type:String,
            default:'' 
                    },
    phone:{
                type:String,
                default:''
            },
            gender:{
                type:String,
                default:''
            },
            address:{
                type:String,
                default:''
            },
            profileImage:{
                type:String,
                default:''
            },
            dateOfBirth:{
                type:String,
                default:''
            },
            qualification:[qualificationSchema],
            resume:{
                type:String,
                default:''
            },
            jobCategory:{
                type:String,
                default:''
            },
            jobLocation:{
                type:String,
                default:''
            },
            skills:{
                type:Array,
                default:null
            },
            enRead:{
                type:Boolean,
                default:false
                            },
            enWrite:{
                type:Boolean,
                default:false
                            },
            enSpeak:{
                type:Boolean,
                default:false
                            },
            hiRead:{
                type:Boolean,
                default:false
                            },
            hiWrite:{
                type:Boolean,
                default:false
                            },
            hiSpeak:{
                type:Boolean,
                default:false
                            },
            moLang:{
                type:String,
                default:''
                            },
            moRead:{
                type:Boolean,
                default:false
                            },
            moWrite:{
                type:Boolean,
                default:false
                            },
            moSpeak:{
                type:Boolean,
                default:false
                            },
            workExperience:[experienceSchema],
    userType:{
                type:Number,
                default:1
                                },
        completed:{
                type:Boolean,
                default:false
                                },

});


jobSeekerSchema.plugin(passportLocalMongoose);
var JobSeekers = mongoose.model('JobSeeker',jobSeekerSchema);
module.exports = JobSeekers;