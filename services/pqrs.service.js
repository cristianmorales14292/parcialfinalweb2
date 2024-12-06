import { sequelize } from '../libs/sequelize.js'


async function index(){
    console.log('INDEX /api/v1/pqrs');
    const pqrs = await sequelize.models.pqrs.findAll()
    return pqrs
}

async function create(pqrs){
    const newPqrs = await sequelize.models.pqrs.create({
        title: pqrs.title,
        description: pqrs.description,
        category: pqrs.category,
        email: pqrs.email,
        name: pqrs.name
    })
    return newPqrs
}

async function show(id){
    console.log('SHOW /api/v1/pqrs/:id');
    const pqrs = await sequelize.models.pqrs.findByPk(id)
    return pqrs
}


async function update(id, pqrs){
    console.log('UPDATE /api/v1/pqrs/:id');
    const searchedPqrs = await sequelize.models.pqrs.findByPk(id)
    if(!searchedPqrs){
        return false
    }
    const [rowsAffected, [updatedPqrs]] = await sequelize.models.pqrs.update({

        title: pqrs.title,
        description: pqrs.description,
        category: pqrs.category,
        email: pqrs.email,
        name: pqrs.name
    })
    return updatedPqrs
}



function destroy(){
    console.log('DESTROY /api/v1/pqrs/:id');
}



export{
    index,
    create,
    show,
    update,
    destroy
}