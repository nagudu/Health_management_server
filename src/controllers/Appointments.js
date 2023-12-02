import db from "../models";



export const appointment =(req,res)=>{
const {
    department='', medical='', name='', email='', date='', time=''
}=req.body;

    db.sequelize.query(`INSERT INTO appointment(department, medical, name, email, date, time) 
    VALUES (:department,:medical,:name,:email,:date,:time)`,
    {
        replacements:{
            department, medical, name, email, date, time
        }
    }
    ).then((resp)=>res.json({success:true}))
    .catch(
        (err)=>{
            console.log(err);
            res.status(500).json({err,msg:'ann erro occured'})
        }
    )
}

export const getAppointment = (req,res)=>{

    db.sequelize.query(`SELECT * FROM appointment`)
    .then((resp)=>res.json({success:true,resp}))
    .catch(
        (err)=>{
            console.log(err);
            res.status(500).json({err,msg:'ann erro occured'})
        }
    )
}

export const getUsers = (req,res)=>{
      const {status}=req.query;
    db.sequelize.query(`SELECT * FROM users where role = "${status}"`)
    .then((resp)=>res.json({success:true,resp}))
    .catch(
        (err)=>{
            console.log(err);
            res.status(500).json({err,msg:'ann erro occured'})
        }
    )
}

export const updateAppointment =(req,res)=>{

    const {id=0}=req.body;

    db.sequelize.query(`update appointment set status='approved' where id=${id}`)
    .then((resp)=>res.json({success:true,resp}))
    .catch(
        (err)=>{
            console.log(err);
            res.status(500).json({err,msg:'ann erro occured'})
        }
    )
}

export const updateUsers =(req,res)=>{

    const {id=0}=req.body;

    db.sequelize.query(`update users set status='approved' where id=${id}`)
    .then((resp)=>res.json({success:true,resp}))
    .catch(
        (err)=>{
            console.log(err);
            res.status(500).json({err,msg:'ann erro occured'})
        }
    )
}
