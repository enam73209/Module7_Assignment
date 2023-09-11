exports.create =async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Product Create Success"
    })
}
exports.read=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Product Read Success"
    })
}

exports.delete = async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Product Delete Success"
    })
}

exports.update=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Product Update Success"
    })
}