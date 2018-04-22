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

    //delete many
    db.collection('Users').deleteMany({name:'Abheet'}).then((result)=>{
        console.log(result.result);
    })

    //delete one
    db.collection('Users').deleteOne({
        _id:new ObjectID('5adb8426ab701a23dcf02bba')
    }).then((result)=>{
       console.log(result.result);
    });
    //find and delelte
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });
});