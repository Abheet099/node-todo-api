var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo=mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

// var newTodo =new Todo({
//     text:''
// });
//
// newTodo.save().then((doc)=>{
//     console.log('saved todo',doc);
// },(e)=>
// {
//     console.log('unable to save todo');
// });


// var otherTodo =new Todo({
//     text:'Edit this video    '
// });
//
// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>
// {
//     console.log('unable to save other todo',e);
// });


var User=mongoose.model('uSer',{
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});

var user=new User({
    email:'abheetverma099@gmail.com'
});

user.save().then((docs)=>{
    console.log('user saved',docs);
},(e)=>{
    console.log('user not saved',e);
})