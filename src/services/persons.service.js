const {models}=require('../libs/sequelize');

class PersonService{
    constructor(){}
    async find(){
        const res= await models.Person.findAll();
        return res;
    }
    async findOne(){
        const res= await models.Person.findByPk(id);
        return res;
    }
}