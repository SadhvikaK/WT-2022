let express=require('express')
let app=express();
app.get('/get/:name',(req,res)=>{
    res.send("Hello "+req.params['name']);
});
app.listen(1005,()=>{
    console.log("Server is running at port 1005");
});