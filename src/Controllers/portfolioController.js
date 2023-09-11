exports.create =async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Portfolio Create Success"
    })
}
exports.read=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Portfolio Read Success"
    })
}

exports.delete = async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Portfolio Delete Success"
    })
}

exports.update=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Portfolio Update Success"
    })
}