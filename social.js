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
    // this.name = name;
    
    const user = {
      id: this.currentID,
      name: name
    };
    this.users[this.currentID] = user;
    // initialize an empty set for the new user's follow relationships:
    
    return user.id;
  }

  getUser(userID) {
    // Your code here
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