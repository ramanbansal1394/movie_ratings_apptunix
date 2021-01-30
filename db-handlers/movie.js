"use strict";
const Movie = require("../models/movie");

/**
 * @method find: A method use to get movie
 * @param {Object} cond matching fields from previous/parent api method
 */
const find = async (cond) => {
    let movie = false;
    try {
        await Movie.findOne(cond)
            .then((res) => {
                if (res) movie = JSON.parse(JSON.stringify(res));
            })
            .catch((err) => {
                console.log("find-movie", err);
            });
        return movie;
    } catch (err) {
        console.log("find-movie-err", err);
        return movie;
    }
};

module.exports = {
    find,
};
