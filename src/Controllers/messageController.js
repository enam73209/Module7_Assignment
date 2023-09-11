exports.create=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Message Create Success"
    })
}
exports.read=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Message Read Success"
    })
}
exports.delete=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Message Delete Success"
    })
}
exports.update=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Message Update Success"
    })
}