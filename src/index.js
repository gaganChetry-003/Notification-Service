const express=require('express');
const mailsender = require('./config/email-config')
const {ServerConfig}=require('./config');
const apiRoutes=require('./routes');



const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api',apiRoutes);
app.listen(ServerConfig.PORT,async()=>{
    console.log(`Successfully started the server:${ServerConfig.PORT}`);
    try{
        const response=await mailsender.sendMail({
            from:ServerConfig.GMAIL_EMAIL,
            to:'bishalchetry4212@gmail.com',
            subject:'Is the service working',
            text:'YES its working'
        });
        console.log(response);
    }catch(error){
     console.log(error);
    }
   
})
