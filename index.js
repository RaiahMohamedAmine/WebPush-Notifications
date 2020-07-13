const express = require('express');
const bodyParser = require('body-parser');
const webPush = require('web-push');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,"client")));
app.use(bodyParser.json());

const publicVapidKey='BHfOjsIZ8VMKysiK2dZDz6AWMAcg1d887otTT-UQUIKYTY_DeQbg1tOYHXsWWCLlhy1DFSCgX4koh0Z_mLjJUfI';
const privateVapidKey='eArcW7T00p39BNmcBA8xe2A3KGWN5EvIx5TyssbVMLE';

webPush.setVapidDetails('mailto:raiah91@gmail.com',publicVapidKey,privateVapidKey);


app.post('/test',(req,res)=>{
    var subscription = req.body;

    res.status(201).json({message : "Well Done"});
    const payload = JSON.stringify({title :"Push Test"});
    webPush.sendNotification(subscription,payload,(err)=> {
        if(err) console.error(err);
        else console.log("YES")
    });
});


app.listen(5200,'0.0.0.0' , ()=> console.log('Server Started on port 5200'));