const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = Schema(
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'user', required: true },
        movie_id: { type: Schema.Types.ObjectId, ref: 'movie', required: true },
        rating: { type: Number, required: true, enum: [1, 2, 3, 4, 5], },
        comment: { type: String, trim: true, required: true },
    },
    {
        timestamps: true,
    }
);

const rating = mongoose.model("rating", schema);

module.exports = rating;
