const userdetailsmodel = require("../models/details.model")

const create = async (req,res)=>{
    try{
          const createUser = new userdetailsmodel({
              Name:req.body.Name,
              DateOfBirth:req.body.DateOfBirth,
              mobilenumber:req.body.mobilenumber,
              Email:req.body.Email
          })
          const final = await createUser.save();
          res.send(["Data Saved Sucessfully" , final])
    }
    catch(error){
        res.send(["there is an error" , error])
    }
}

const update = async (req,res)=>{
    try{
        const updateuser = {
            Name:req.body.Name,
            DateOfBirth:req.body.DateOfBirth,
            Email:req.body.Email,
            mobilenumber:req.body.mobilenumber
        }
        const id = { id:req.params.id}
        const final = await userdetailsmodel.updateMany(id,updateuser)
        res.send(["Data update sucessfully" , updateuser])
    }
    catch(error){
        res.send(["there is an error " , error])
    }

}

const read = async(req,res)=>{
    try{
      const getuser = await userdetailsmodel.findById(req.params.id)
      res.send(["Here is your requested data", getuser])
    }
    catch(error){
        res.send(["there is an error ", error])
    }
}


const readall = async(req,res)=>{
  try{
      const getalluser = await userdetailsmodel.find()
         res.send(["Here is the data in your database", getalluser])
  }
 catch(error){
      res.send(["there is an error", error])
   }
}

const destroy= async(req,res)=>{
    try{
      const destroy = await userdetailsmodel.findByIdAndDelete(req.params.id);
      res.send(["the requested data is deleted sucessfully",destroy]);
    }
    catch(error){+
        res.send(["there is an error" , error])
    }
}


const demolish = async(req,res)=>{
    try{
       const destroyall = await userdetailsmodel.deleteMany()
     res.send("All the data in your Database is Deleted Sucessfully")
    }
    catch(error){
          res.send(["There is an error" , error])

    }
}

module.exports ={
    create,
    update,
    read,
    readall,
    destroy,
    demolish
}