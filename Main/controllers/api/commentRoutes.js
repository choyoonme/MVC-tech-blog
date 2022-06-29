const router = require('express').Router();
const Comment = require('../../models/Comment');
const User = require('../..models/User');
const Project = require('../..models/Project');

router.get('/', async (req, res) => {
  try {
    const comment_data = await Comment.findAll({
      attributes: ['comment_data'],
    });
    res.status(200).json(comment_data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    if (res.session) {
      const commentPost = await Comment.create({
        comment_data: req.body.comment_data,
        project_id: req.body.project_id,
        user_id: req.session.user_id,
      });
      res.status(200).json(commentPost);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
