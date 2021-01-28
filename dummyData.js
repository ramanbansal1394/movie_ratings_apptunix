const Movie = require("./models/movie");
const User = require("./models/user");

const movies = [
    { title: "Tanhaji" }, { title: "Baaghi 3" }, { title: "Street Dancer 3D" }, { title: "Shubh Mangal Zyada Saavdhan" }, { title: "Malang" },
]

const users = [
    { name: "Raman Bansal", email: "rbansal1394@gmail.com", password: "Raman@123" },
    { name: "Gaurav Bansal", email: "gbansal25697@gmail.com", password: "Gaurav@123" }
]

Movie.insertMany(movies);
User.insertMany(users);