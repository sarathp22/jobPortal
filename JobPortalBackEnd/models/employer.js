var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var employerSchema = new schema({
    cname:{
            type:String,
            default:''
                        },
    email:{
            type:String,
            default:''
                    },
    
    phone:{
                type:String,
                default:null
            },
            companyCategory:{
                type:String,
                default:null
            },
            since:{
                type:String,
                default:null
            },
            teamSize:{
                type:Number,
                default:null
            },
            description:{
                type:String,
                default:null
            },
            address:{
                type:String,
                default:null
            },
            city:{
                type:String,
                default:''
            },
            state:{
                type:String,
                default:''
            },
            country:{
                type:String,
                default:''
            },
            logoImage:{
                type:String,
                default:''
            },

    userType:{
                type:Number,
                default:2
                                },
        completed:{
                type:Boolean,
                default:false
                                },
    status:{
                type:Boolean,
                default:false
                                },

});

employerSchema.plugin(passportLocalMongoose);
var Employers = mongoose.model('Employer',employerSchema);
module.exports = Employers;