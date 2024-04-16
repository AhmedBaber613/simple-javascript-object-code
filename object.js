let user = {
  name: "po",
  age: 20,
  email: "pothepanda@gmail.com",
  location: "China",
  blogs: ["Why Pandas eat so much?", "bamboo party"],
  login: function() {
    console.log("user logged in")
  },
  logout: function() {
    console.log("user logged out")
  }
}

console.log(user.email);
console.log(user.age);
console.log(user.location);
console.log(user.blogs);
console.log(user.name);