// import {priscription,getPriscription } from "../controllers/priscriptions"

const { priscription, getPriscription } = require("../controllers/priscription")


module.exports =(app)=>{
app.post("/api/priscription", priscription)
app.get("/get-appoint",getPriscription)
}