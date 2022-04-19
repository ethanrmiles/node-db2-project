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

router.get('/:id', (req,res) => {
    Cars.getById(req.params.id)
    .then(car => {
        res.json(car)
    })
    .catch(err => {
        res.status(404).json({ message: `failed to retreive car with that id ${err.message}`})
    })
})

router.post('/', (req,res) => {
    
})

module.exports = router;