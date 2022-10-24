const express = require('express');
const vehicles = require('../models/vehicles');
const Vehicles = require('../models/vehicles');

const router = express.Router();

//save Vehicles

router.post('/vehicle/save',(req,res)=>{

    let newVehicle= new Vehicles(req.body);

    newVehicle.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Vehicles saved successfully"
        });
    });
});

// get Vehicles

router.get('/vehicles',(req,res) =>{
    Vehicles.find().exec((err,vehicles) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingVehicles:vehicles
        });
    });
});

// get a sepecific Vehicles

router.get("/vehicle/:id",(req,res) =>{

    let vehicleId = req.params.id;

    Vehicles.findById(vehicleId,(err,vehicle) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            vehicle
        });
    });


});

//update Vehicles

router.put('/vehicle/update/:id', (req,res)=>{
    Vehicles.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,vehicle)=>{
            if(err){
                return res.status(400).json({error:err});   
            }
            return res.status(200).json({
                success:"updated Successfuly"    
            });
        }
    );
});

//delete Vehicles

router.delete('/vehicle/delete/:id',(req,res) =>{
    Vehicles.findByIdAndRemove(req.params.id).exec((err,deletedVehicle) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successful",deletedVehicle
        });

    });
});

module.exports = router;