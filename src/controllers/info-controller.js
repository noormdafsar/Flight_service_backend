const info = (req, res) => {
    return res.json({
        success: true,
        message: 'API is live',
        error: {},
        data: {
            
        },
        status: "ok"
    })
}

module.exports = {
    info
}