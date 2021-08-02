const express = require('express');

const Post = require('../models/post');

const router = express.Router();

router.get('', (req, res, next) => {
  // const posts = [
  //   {
  //     id: '0',
  //     title: 'Title1',
  //     category: 'Google Cloud',
  //     date: '2021-08-01',
  //     content: 'Content1'
  //   },
  //   {
  //     id: '1',
  //     title: 'Title2',
  //     category: 'AWS',
  //     date: '2021-08-02',
  //     content: 'Content2'
  //   },
  // ];
  Post.find()
    .then(documents => {
      // console.log(documents);
      res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: documents
      });
    });
});

module.exports = router;
