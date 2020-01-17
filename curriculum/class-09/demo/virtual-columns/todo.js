'use strict';

const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const URI = 'mongodb://localhost:27017/myVirtDemo';
mongoose.connect(URI, mongooseOptions);

const todoSchema = mongoose.Schema({
  task: {type: String},
  assignee: {type: String},
  complete: {type: Boolean}
}, {toObject: {virtuals: true}, toJSON: {virtuals: true}});


todoSchema.virtual('assigneeDetails', {
  ref: 'people',
  localField: 'assignee',
  foreignField: 'name',
  justOne: true,
});

todoSchema.pre('find', join);
todoSchema.pre('findOne', join);

function join() {
  try{
    this.populate('assigneeDetails');
  }
  catch (e) {console.log('Find Error', e)}
}

const personSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String},
  phone: {type: String},
});

const Todo = mongoose.model('todos', todoSchema);
const Person = mongoose.model('people', personSchema);

//******************************* */

createRecords();

async function createRecords() {

  try {

    await new Person( {name: "calvin", email:"calvin@calvin.com" }).save();
    await new Person( {name: "sandee", email:"bob@bob.com" }).save();
    await new Todo( {task: "Clean Floor", assignee:"calvin", complete: false }).save();
    await new Todo( {task: "Shop", assignee:"sandee", complete: false }).save();
    await new Todo( {task: "Study", assignee:"calvin", complete: true }).save();
    await new Todo( {task: "Walk Dog", assignee:"calvin", complete: false }).save();
    let last = await new Todo({task: "Eat", assignee: "sandee", complete: true}).save(); 

    let records = await Todo.find({});
    console.log(records);

  }catch (e) {console.log('Find Error', e)}

  disconnect();
}

function disconnect() {
  mongoose.disconnect();
}