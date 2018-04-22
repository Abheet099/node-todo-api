//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');  //destructuring

// var obj =new ObjectID();
//
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        console.log('unable to connect to Mongodb server');
    }
    console.log('connected to server');

    // db.collection('Todos').insertOne({
    //     text:'something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err)
    //     {
    //         return console.log('unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    //New doc inserted into Users(name,age,location)

    // db.collection('Users').insertOne({
    //     name:'Abheet',
    //     age:21,
    //     location:'Noida'
    // },(err,result)=>{
    //     if(err)
    //     {
    //         return console.log('unable to insert data',err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    // db.close();
    
});