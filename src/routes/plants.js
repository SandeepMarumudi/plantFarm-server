const express=require("express")
const Plants = require("../models/plants")

const plantRouter=express.Router()

plantRouter.get("/allPlants",async(req,res)=>{
    try{
        const plants=await Plants.find({})
        res.send(plants)
    }catch(err){
      res.status(400).json({message:err.message})
    }
})

plantRouter.post("/newPlant",async(req,res)=>{
    try{

        const {name,price,categories,available,image,about}=req.body
        const plant=new Plants({name,price,categories,available,image,about})
         await plant.save()
         res.json({message:"successfully added",data:plant})
    }catch(err){
        res.status(400).json({message:err.message})
    }


})

plantRouter.patch("/plant/edit/:id",async(req,res)=>{
    try{

        const updatedPlant=await Plants.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        if(!updatedPlant){
            res.status(400).json({error:"plant not found"})
        }
        res.send(updatedPlant)
    }catch(err){
        res.status(400).json({message:err.message})
    }

})

plantRouter.delete("/delete/:_id",async(req,res)=>{
    const deletedUser=await Plants.findByIdAndDelete({_id:req.params._id})
    if(!deletedUser)  return res.json({message:"user not found"})
        res.json({message:"successfully deleted",data:deletedUser})
})
module.exports=plantRouter
