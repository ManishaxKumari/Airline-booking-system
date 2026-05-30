const {StatusCodes} = require('http-status-codes');
const info=(req, res) =>{
    return res.status(StatusCodes.OK).json({
        success:true,
        message:"This is info page",
        error:{},
        data:{}
        
    })
}



module.exports={
    info
}