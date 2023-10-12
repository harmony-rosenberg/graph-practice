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
    if(this.users[userID1] && this.users[userID2]) {
      this.follows[userID1].add(userID2)
      return true
    }
    return false
  }

  getFollows(userID) {
      return this.follows[userID]
  }

  getFollowers(userID) {
    let followers = new Set()

    if(this.users[userID]) {
    for(let el in this.follows) {
      if(this.follows[el].has(userID)) {
        followers.add(Number(el))
      }
    }
  }
    return followers
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
