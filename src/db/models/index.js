const {Person, PersonSchema}= require('./persons.models');

function setupModels(sequelize){
    Person.init(PersonSchema, Person.config(sequelize));
}
module.exports=setupModels