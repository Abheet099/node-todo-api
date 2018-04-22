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

    // db.collection('Todos').find({
    //     _id:new ObjectID('5adc1581abf60c023b5f0d04')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch ',err);
    // })

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count:${count}`);
    //     //console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch ',err);
    // })
    db.collection('Users').find({name:'Abheet'}).count().then((count)=>{
        console.log(`User count:${count}`);
    },(err)=>{
        console.log('unable to fetch documents',err);
    })
    
});