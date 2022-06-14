const router = require('express').Router();
const {Blog, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try { // Get all blog posts and JOIN with user data
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ]
        });

        // Serialize data
        const blog = blogData.map((blog) => blog.get({plain: true}));

        // Pass serialized data and session
        res.render('homepage', {blog, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ]
        });

        const blog = blogData.get({plain: true});

        res.render('blog', {
            ... blog,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// withAuth middleware prevents access to route
router.get('/profile', withAuth, async (req, res) => {
    try { // Find logged in user based on session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {
                exclude: ['password']
            },
            include: [
                {
                    model: Blog
                }
            ]
        });

        const user = userData.get({plain: true});

        res.render('profile', {
            ... user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => { // When user is logged in, redirect request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;
