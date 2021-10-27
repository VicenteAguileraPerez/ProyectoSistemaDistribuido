const port = process.env.PORT||3000;
const endpointMainPeople = "/api/v1/people";
const DataBaseName = "people";
const portMongo = 27017;
const pathMongo = "mongodb+srv://people:personas@clustersistemasdistribu.ergvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"//||`mongodb://localhost:${portMongo}/${DataBaseName}`
const lengths =[150,100,300,100,1000,100,50,10];
module.exports=
{
    port:port,
    endpointMainPeople:endpointMainPeople,
    pathMongo:pathMongo,
    lengths:lengths
}