const { validationResult } = require("express-validator");
const userHandler = require("../db-handlers/user");
const movieHandler = require("../db-handlers/movie");
const ratingHandler = require("../db-handlers/rating");
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;
const responses = require("../common/responses");
const Rating = require("../models/rating");

/**
 * @method create: This method used to post movie rating
 * @param {Object} req get request from the user
 * @param {Object} res send response to the user
 */
module.exports.create = async (req, res) => {
    try {
        const { user_id, movie_id, rating, comment } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ status: 400, message: errors.array() });
        }
        const user = await userHandler.find({ _id: ObjectID(user_id) });
        if (!user) {
            return res.json({
                status: 400,
                message: "Invalid user ID.",
            });
        }
        const movie = await movieHandler.find({ _id: ObjectID(movie_id) });
        if (!movie) {
            return res.json({
                status: 400,
                message: "Invalid movie ID.",
            });
        }
        const oldRating = await ratingHandler.find({ movie_id: ObjectID(movie_id), user_id: ObjectID(user_id) });
        if (oldRating) {
            return res.json({
                status: 400,
                message: "You already added rating for this movie.",
            });
        }
        const newRating = await ratingHandler.create({ user_id, movie_id, rating, comment });
        if (newRating) {
            return res.json({
                status: 200,
                message: "Rating added successfully.",
                data: { rating: newRating }
            });
        } else {
            return res.json(responses.failedError);
        }
    } catch (err) {
        console.log("create-err", err);
        return res.json(responses.failedError);
    }
};

/**
 * @method allRatings: This method used to get all ratings
 * @param {Object} req get request from the user
 * @param {Object} res send response to the user
 */
module.exports.allRatings = async (req, res) => {
    try {
        const { limit, offset } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ status: 400, message: errors.array() });
        }
        Rating.aggregate([
            {
                $group: {
                    _id: '$movie_id',
                    // itemsSold: { $addToSet: "$user_id" }
                    ratings: { "$push": { user_id: "$user_id", rating: '$rating', comment: '$comment' } },
                    // $unwind: '$ratings',
                    // $sort: { 'ratings.rating': 1 }
                },
                // $sort : { 'ratings.rating' : -1 }
            },
            //  {
            //     $set: {
            //         user_id: "$user_id"
            //     }
            // },
            // {
            //     $project: {
            //         user_id: 1,
            //         rating: 1,
            //         comment: 1,
            //     },
            // },

            {
                $lookup:
                {
                    from: 'movies',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'movie'
                }
            },
            // {
            //     $lookup:
            //     {
            //         from: 'users',
            //         localField: 'ratings.user_id',
            //         foreignField: '_id',
            //         as: 'user'
            //     }
            // }
            // { $unwind: "$ratings" },
            // { $sort: { 'ratings.rating': -1 } },
            // { $unwind: '$ratings' },
            { $sort: { 'ratings.rating': 1 } },
            { $limit: limit },
            { $skip: offset }
        ]).then(result => {
            return res.json({
                status: 200, message: "Fetch Ratings Successfully",
                data: { ratings: result }
            });
        }).catch(err => {
            console.log("allRatings-err", err);
            return res.json(responses.failedError);
        })
    } catch (err) {
        console.log("allRatings-err", err);
        return res.json(responses.failedError);
    }
};