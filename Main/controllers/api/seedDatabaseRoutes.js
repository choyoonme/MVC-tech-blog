const router = require('express').Router();
const { User, Project } = require('../../models');

const userData = require('../../seeds/userData.json');
const projectData = require('../../seeds/projectData.json');

router.post('/', (req, res) => {
    res.json({test:'Turtle lives', userData, projectData})
});

module.exports = router;