exports.create =async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Blog Create Success"
    })
}
exports.read=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Blog Read Success"
    })
}

exports.delete = async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Blog Delete Success"
    })
}

exports.update=async(req,res)=>{
    res.status(200).json({
        status:"success",
        data:"Blog Update Success"
    })
}