const express=require("express");
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    var a=req.query.a;
    var b=req.query.b;

    var data={
        "formula":`${a}+${b}`,
        "value":parseInt(a)+parseInt(b)
    };

    res.json(data);
});

app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`);
});
