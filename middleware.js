module.exports =reqFilter = (req,res,next) => {
    if (!req.query.age) {
        res.send("Please Provide the AGE!!")
    }
    else if(req.query.age <18) {
        res.send("You are not access the page")
    }
    else {
        next()
    }
}