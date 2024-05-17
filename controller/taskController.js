const Task=require("../model/taskModel");

//===create task =====
const createTask=async (req,res)=>{

      const data=req.body;
      const{title,description}=data;
    try {
        if(!title|| !/^[a-zA-Z\s]*$/.test(title)){
            return res.status(400).send({message:"Title filed is required and must contain only alphabetic character and space"})
        }
       
        if(!description){
            return res.status(400).send({message:"description filed is required"})
        }
    
        const savedData=await Task.create(data) 
        res.status(201).send({message:"Successfully created",savedData})
    } catch (error) {
       console.error("Error",error) ;
       res.status(500).send({message:"Internal Server Error",error}) 
    }
    
}

//==========fetched ============

const getTask=async(req,res)=>{
    try {

        const fetchedTask=await Task.find();
        if(!fetchedTask){
            return res.status(404).send({message:"task not found"})
        }
        res.status(200).send({message:"Task fetched successfully",fetchedTask})
    } catch (error) {
        
    }
}

//============update ===============
const updateTask=async(req,res)=>{
    try {
        const id=req.params.id
        const {title,description}=req.body;
        //console.log("iddddd:",id);
        const task=await Task.findByIdAndUpdate(id,
            {
             title:title,
             description:description,
            
            },{new:true}
        )
        if(!task){
            return res.status(404).send({message:"Task not found"})
        }
     
        res.status(200).send({message:"Updated Task Details",task})
    } catch (error) {
        console.log("Error:",error);
        res.status(500).send({message:"Internal server Error",error})
    }
}

//========search ==========

const searchTask=async(req,res)=>{
    try {
        const data=req.query;
        const searchData=await Task.find(data);
        if(!searchData){
         return res.status(404).send({message:"not found Task"})
        }
        res.status(200).send({message:"Task search Successfully",searchData})
    } catch (error) {
       console.log("error:",error) ;
       res.status(500).send({message:"Internal Server Error"});
    }
 

}

//============delete==========
const deleteTask=async(req,res)=>{
    try {
        const id=req.params.id
        //console.log("idddddd:",id)
        const deletedData=await Task.findByIdAndDelete(id);
        res.status(200).send({message:"Data Deleted Successfully",deletedData});
    } catch (error) {
        console.log("Error:",error);
        res.status(500).send({message:"Internal Server Error",error})
    }
}

module.exports={createTask,getTask,updateTask,searchTask,deleteTask}
