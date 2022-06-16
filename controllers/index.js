const router = require('express').Router();
const apiRoutes = require('./api');
const dashRoutes = require('./dashRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/dash', dashRoutes);
router.use('/home', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;