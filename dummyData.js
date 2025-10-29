import person from "./src/assets/person/person1.JPG";
import jerry from "./src/assets/person/jerry.webp";
import mickeymouse from "./src/assets/person/mickeymouse.jpeg";
import tom from "./src/assets/person/tom.jpeg";
import chottabeam from "./src/assets/person/chottabeam.jpeg";
import food from "./src/assets/posts/food.jpg";
import car from "./src/assets/posts/car.jpg";
import pexelsalbinber from "./src/assets/posts/pexels-albinberlin-919073.jpg";
import SportsCars from "./src/assets/posts/Sports-Cars.jpg";

export const users = [
  {
    id: 1,
    profilePicture: person,
    username: "adithyan",
  },
  {
    id: 2,
    profilePicture: chottabeam,
    username: "chottabeam",
  },
  {
    id: 3,
    profilePicture: jerry,
    username: "jerry",
  },
  {
    id: 4,
    profilePicture: mickeymouse,
    username: "mickeymouse",
  },
  {
    id: 5,
    profilePicture: tom,
    username: "tom",
  },
];

export const posts = [
  {
    id: 1,
    description: "love for all,hatred for none",
    photo: food,
    date: "5 mins ago",
    userId: 1,
    like: 9,
    comment: 9,
  },
  {
    id: 2,
    description: "love for all,hatred for none",
    photo: car,
    date: "5 mins ago",
    userId: 2,
    like: 8,
    comment: 9,
  },
  {
    id: 3,
    description: "love for all,hatred for none",
    photo: pexelsalbinber,
    date: "5 mins ago",
    userId: 3,
    like: 17,
    comment: 9,
  },
  {
    id: 4,
    description: "love for all,hatred for none",
    photo: SportsCars,
    date: "5 mins ago",
    userId: 4,
    like: 17,
    comment: 9,
  },
  {
    id: 5,
    description: "love for all,hatred for none",
    photo: food,
    date: "5 mins ago",
    userId: 5,
    like: 10,
    comment: 9,
  },
];
