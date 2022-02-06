import mongoose from 'mongoose';

const Connection = async  () =>{
   try {
    const URL = `mongodb+srv://user:userpass@clone-inshorts.tr4mp.mongodb.net/INSHORTS?retryWrites=true&w=majority`;
    await mongoose.connect(URL,{useNewUrlParser: true});
    console.log('Database connected successfully')
   } catch (error) {
       console.log('Error while connecting to database ',error)
   } 
}

export default Connection;