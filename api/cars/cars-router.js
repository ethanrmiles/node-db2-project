const router = require('express').Router()
const Cars = require('./cars-model')
const md = require('./cars-middleware')

router.get('/', (req,res) => {
    Cars.getAll()
        .then(cars => {
            res.json(cars)
        })
        .catch(err => {
            res.status(500).json({ message: `failed to retreive cars ${err.message}`})
        })
})

router.get('/:id', md.checkCarId, async(req,res,next) => {
    res.json(req.car)
})

router.post('/', (req,res) => {
    
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message})
})

module.exports = router;