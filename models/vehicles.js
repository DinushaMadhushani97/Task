const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({

    mileage:{
        type:Number,
        required:true
    },

    congestion_charge:{
        type:Boolean,
        required:true
   
    },
    
    no_of_Floor:{
        type:Number,    
        required:true
    },

    congestion_Charge:{
        type:Boolean,    
        required:true
    },

    late_Charge:{
        type:Boolean,    
        required:true
    },

    carbon_offset:{
        type:Boolean,    
        required:true
    },
    price:{
        type:Number,    
        required:true
    },
    driver_charge:{
        type:Number,    
        required:true
    },
    hourly_rate:{
        type:Number,    
        required:true
    },
    helper_charge:{
        type:Number,    
        required:true
    },
    van_type:{
        type:String,    
        required:true
    },
    driver_time:{
        type:Number,    
        required:true
    },
    total_time:{
        type:Number,    
        required:true
    }
   
});

module.exports = mongoose.model('Vehicles',vehicleSchema);