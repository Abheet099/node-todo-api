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

    //update
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5adb8596dad7410aa878fcc8")
    },{
        $set:{
            name:'Abheet'
        },
        $inc:{
            age:2
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })
});