const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const seedDatabaseRoutes = require('./seedDatabaseRoutes');
router.use('/users', userRoutes);
router.use('/projects', blogRoutes);

router.use('/seedDatabase', seedDatabaseRoutes);

module.exports = router;
