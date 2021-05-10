import mongoose from 'mongoose'

function mongodb () {
  if(mongoose.connections[0].readyState){
     console.log("already connected")
     return
  }
  mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true, useUnifiedTopology: true
  })
  mongoose.connection.on('connected', ()=>{
    console.log (" connected to mongo")
  })
  mongoose.connection.on('error', (err)=>{
    console.log (" not connected to mongo",err)
  })
}
export default mongodb