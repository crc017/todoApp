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

   //deleteMany
//    db.collection('Todos').deleteMany({text: 'Do some other stuff'}).then((result) => {
//         console.log(result);
//    });

   //deleteOne
//    db.collection('Todos').deleteOne({text: 'Eat something good'}).then((result) => {
//        console.log(result);
//     });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })


    // db.collection('Users').deleteMany({name: 'Ryan'});

    db.collection('Users').findOneAndDelete({name: 'Cox'}).then((result) => {
        console.log(result);
    });
    client.close();
});