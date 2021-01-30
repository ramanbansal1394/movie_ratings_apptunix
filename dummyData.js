const Movie = require("./models/movie");
const User = require("./models/user");

const movies = [
    { title: "Tanhaji", description: "Ajay Devgn's magnum opus 'Tanhaji: The Unsung Warrior' hits the screens on January 10. Besides Ajay, the film directed by Om Raut, features Saif Ali Khan and Kajol in lead roles. Due to pending VFX work, the film's release was moved from November 2019 to the January 10, 2020", release_date: new Date("2020-01-10") },
    { title: "Baaghi 3", description: "Baaghi 3 is a 2020 Indian Hindi-language action thriller film directed by Ahmed Khan. Produced by Nadiadwala Grandson Entertainment and Fox Star Studios, it is a spiritual sequel to Baaghi (2016) and Baaghi 2 (2018) and the third film in the Baaghi film series. The film stars Tiger Shroff, Riteish Deshmukh, Shraddha Kapoor and Ankita Lokhande.[4][5] A remake of the 2012 Tamil-language film Vettai,[6] the film follows Ronnie, a young man who protects his timid brother Vikram from bullies. He convinces Vikram to join the police force and works with him to take down criminals without exposing himself. When Vikram receives nationwide praise, he is sent for a mission to Syria where Ronnie sees him getting beaten up and kidnapped over a video call. This prompts him to head to Syria and rescue Vikram.", release_date: new Date("2020-03-06") },
    { title: "Street Dancer 3D", description: "Street Dancer 3D is a 2020 Indian Hindi-language dance drama film directed by Remo D'Souza. It is produced by Bhushan Kumar, Krishan Kumar and Lizelle D'Souza under the banners T-Series and Remo D'Souza Entertainment. The film stars Varun Dhawan, Shraddha Kapoor, Prabhu Deva and Nora Fatehi in title roles. The film is Fatehi’s first in a title role. The music was composed by Sachin–Jigar, Tanishk Bagchi, Badshah, Guru Randhawa, Gurinder Seagal and Harsh Upadhyay, and released under the banner T-Series. The story explores a dance competition between some Indian and Pakistani dancers.", release_date: new Date("2020-01-24") },
    { title: "Shubh Mangal Zyada Saavdhan", description: "Shubh Mangal Zyada Saavdhan (transl.  Be extra careful of marriage) is a 2020 Indian Hindi-language romantic comedy film written and directed by Hitesh Kewalya and produced by Aanand L. Rai, Himanshu Sharma, Bhushan Kumar and Krishan Kumar under the banners Colour Yellow Productions and T-Series. A spin-off to the 2017 film Shubh Mangal Saavdhan, whose script was also written by Kewalya, it stars Ayushmann Khurrana, Jitendra Kumar, Neena Gupta and Gajraj Rao.[3] The film tells the story of a gay man and his partner, who have trouble convincing the former's parents of their relation.", release_date: new Date("2020-02-21") },
    { title: "Malang", description: "Malang (transl. Vagrant/Wanderer) is a 2020 Indian Hindi-language romantic action thriller film directed by Mohit Suri and produced by T-Series in collaboration with Luv Films and Northern Lights Entertainment with distribution by Yash Raj Films.[5] It stars Aditya Roy Kapur, Disha Patani, Anil Kapoor and Kunal Khemu.", release_date: new Date("2020-02-07") },
]

const users = [
    { name: "Raman Bansal", email: "rbansal1394@gmail.com", password: "Raman@123" },
    { name: "Gaurav Bansal", email: "gbansal2569@gmail.com", password: "Gaurav@123" },
    { name: "Mohan Bansal", email: "gbansal2697@gmail.com", password: "Gaurav@123" },
    { name: "Sohan Bansal", email: "gbansa25697@gmail.com", password: "Gaurav@123" },
    { name: "Amrit Bansal", email: "gbansa5697@gmail.com", password: "Gaurav@123" },
]

Movie.insertMany(movies);
User.insertMany(users);