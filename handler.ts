import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { MongoClient } from 'mongodb';
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0.lwdph.mongodb.net/app1?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
export const hello: APIGatewayProxyHandler = async (event, _context) => {
  let collection;
const uri = "mongodb+srv://admin:<password>@cluster0.lwdph.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  collection = client.db("app1").collection("tasks");
  // perform actions on the collection object
  client.close();
});
  return collection;
}
export const tasks: APIGatewayProxyHandler = async (event, _context) => {

let values; 
let connection = await getTasks();
console.log(connection);
  // return connection;
  return {
    statusCode: 200,
    body: JSON.stringify(connection, null, 2),
  };
}
const  getTasks = async () => {
  let collection;
  await client.connect();
  collection = await client.db("app1").collection("tasks").find().toArray();
  client.close();
  return collection;
  // await client.connect(async err => {
  //   collection = 
  //    // perform actions on the collection object
  //    client.close();
  //  });
}
