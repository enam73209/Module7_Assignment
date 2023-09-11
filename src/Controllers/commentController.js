exports.create =async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Comment Create Success"
    })
}
exports.read=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Comment Read Success"
    })
}

exports.delete = async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Comment Delete Success"
    })
}

exports.update=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Comment Update Success"
    })
}