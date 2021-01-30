"use strict";
const Rating = require("../models/rating");

/**
 * @method create: A method to create rating of movie
 * @param {Object} data rating of movie from previous/parent api method
 */
const create = async (data) => {
    let rating = false;
    try {
        await new Rating(data)
            .save()
            .then((res) => {
                if (res) {
                    rating = JSON.parse(JSON.stringify(res));
                }
            })
            .catch((err) => {
                console.log("create-rating", err);
            });
        return rating;
    } catch (err) {
        console.log("create-rating-err", err);
        return rating;
    }
};

/**
 * @method find: A method use to find movie rating
 * @param {Object} cond matching fields from previous/parent api method
 */
const find = async (cond) => {
    let rating = false;
    try {
      await Rating.findOne(cond)
        .then((res) => {
          if (res) rating = JSON.parse(JSON.stringify(res));
        })
        .catch((err) => {
          console.log("find-rating", err);
        });
      return rating;
    } catch (err) {
      console.log("find-rating-err", err);
      return rating;
    }
  };
module.exports = {
    create,find
};