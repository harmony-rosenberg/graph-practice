// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID++;
    
    const user = {
      id: this.currentID,
      name: name
    };
    this.users[this.currentID] = user;
    // // initialize an empty set for the new user's follow relationships:
    this.follows[this.currentID] = new Set();
    return user.id;
  }

  getUser(userID) {
    // Your code here
    // if (!userID) {
    //   return null;
    // } else {
    //   return user.name;
    // }
    return this.users[userID] || null;
  }

  follow(userID1, userID2) {
    // Your code here
  }

  getFollows(userID) {
    // Your code here
  }

  getFollowers(userID) {
    // Your code here
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;