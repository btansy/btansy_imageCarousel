const mongoose = require('mongoose');
// const mongoUrl = 'mongodb://database/gallery';
const mongoUrl = 'mongodb://localhost/gallery';
const GalleryModel = require('../db');

mongoose.connect(mongoUrl, { server: { reconnectTries: Number.MAX_VALUE } });

module.exports = {
  gallery: {
    insertAll: (data, cb) => {
      GalleryModel.insertMany(data)
        .then((docs) => {
          cb(null, docs);
        })
        .catch((err) => {
          cb(err);
        });
    },

    getOne: (id, cb) => {
      GalleryModel.find({ listing_id: Number(id) })
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },

    getAll: (cb) => {
      GalleryModel.find({})
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },

    deleteAll: (cb) => {
      GalleryModel.deleteMany({})
        .then((results) => {
          cb(null, results);
        })
        .catch((err) => {
          cb(err);
        });
    },
  },
};
