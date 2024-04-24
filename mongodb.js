const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://test:test@cluster0.ijivkcx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("mongodb atlas connected")
})

.catch(()=>{
    console.log("failed to connect")
})