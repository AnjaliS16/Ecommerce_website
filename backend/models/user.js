const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
const ObjectId = mongodb.ObjectId;

class user {
  constructor(username,email){
    this.name= username;
    this.email=email;
  }
  save() {
    const db =getDb();
    return db.collection('users').insertOne(this);
  }
  static findById(userId){
    const db= getDb();
    return db
    .collection('users')
    .findOne({_id: new ObjectId(userId)})
    

    

  }
}
module.exports = user;
