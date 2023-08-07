module.exports = {
    verifySession: (req, res, next) => {
        const userid = req.session.userid
        if(!userid) return res.status(401).json({
            status: "Error",
            message: "Unauthorized"
        })

        try {
            next()
        } catch (error) {
            res.status(500).json({
                status: "Error",
                message: "Internal Server Error"
            })
        }
    }
}