const { generateToken } = require("../service/authService")


exports.logout = async(req,res) =>{
    try{
        const tokens = req.
        tokens = tokens.filter(el => el !== token )
        await req.user.save();
        res.status(204).json({
            status: 'success',
            data: null
        })
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}