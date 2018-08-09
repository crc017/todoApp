//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log('obj', obj);

var handleError = (err, result) => {
    if(err) {
        return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
};

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if(err) {
        return console.log('Unable to connect to database.')
    } 
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos');
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })

    db.collection('Users').find({name: 'Ryan'}).toArray().then((data) => {
        console.log('Users');
        console.log(`Users with name Ryan : ${JSON.stringify(data, undefined, 2)}`);
    })
    client.close();
});