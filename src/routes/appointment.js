import {appointment,getAppointment, getUsers, updateAppointment, updateUsers} from "../controllers/Appointments"


module.exports =(app)=>{
app.post("/appointment", appointment)
app.get("/get-appoint",getAppointment)
app.get("/get-users",getUsers)
app.post('/update-appointment',updateAppointment)
app.post('/update-user',updateUsers)
}