const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;
const responses = require("../common/responses");
const Rating = require("../models/rating");

/**
 * @method countAverageOfMovie: This method to calculate total count and average of movie ratings
 * @param {Object} req get request from the user
 * @param {Object} res send response to the user
 */
module.exports.countAverageOfMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ status: 400, message: errors.array() });
        }
        Rating.aggregate([
            { $match: { movie_id: ObjectID(id) } },
            {
                $group: {
                    _id: '$movie_id',
                    average: { $avg: "$rating" },
                    count: { $sum: 1 }
                },
            },
            {
                $lookup:
                {
                    from: 'movies',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'movie'
                }
            },
        ]).then(result => {
            const movieRating = result && result[0] || false;
            return res.json({
                status: 200, message: "Fetch movie rating Successfully",
                data: {
                    rating: movieRating &&
                    {
                        ...movieRating,
                        movie: movieRating.movie && movieRating.movie[0],
                    }
                        || {}
                }
            });
        }).catch(err => {
            console.log("countAverageOfMovie-err", err);
            return res.json(responses.failedError);
        })
    } catch (err) {
        console.log("countAverageOfMovie-err", err);
        return res.json(responses.failedError);
    }
};

/**
 * @method ratings: This method to get movie ratings
 * @param {Object} req get request from the user
 * @param {Object} res send response to the user
 */
module.exports.ratings = async (req, res) => {
    try {
        const { id } = req.params;
        const { limit, offset } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ status: 400, message: errors.array() });
        }
        Rating.find({ movie_id: ObjectID(id) })
            .sort({ rating: -1 })
            .limit(limit)
            .skip(offset)
            .then(result => {
                return res.json({
                    status: 200, message: "Fetch ratings Successfully",
                    data: {
                        ratings: result
                    }
                });
            }).catch(err => {
                console.log("ratings-err", err);
                return res.json(responses.failedError);
            })
    } catch (err) {
        console.log("ratings-err", err);
        return res.json(responses.failedError);
    }
};