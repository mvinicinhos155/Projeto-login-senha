import NewUsers from "../models/users.js";

const libpassword = ((req, res, next) => {
    const { password } = req.body;

    if(password && password.length >= 8) {
       return next()
    }

    return res.status(500).json("senha muito curta")
})

class ControllersUser {

   async index (req, res) {

      const users = await NewUsers.find()

    return res.json(users) 
    };

   async create (req, res) {
    try {
        const newUser = await NewUsers.create(req.body);

        if (!newUser) {
            return res.status(500).json("erro ao criar o usuario")
        }

        return res.status(201).json(newUser);
    } catch (error) {

        return res.status(404).json({error: "erro na requisição"})
    };
};

    async update (req, res) {
       try {
        const {id} = req.params;
        const {name, password} = req.body;

        const updateUser = await NewUsers.findByIdAndUpdate(id, { name, password });

        if (!updateUser) {
            return res.status(404).json({error: "erro ao atualizar o usuario"});
        };

        return res.status(201).json(updateUser);
       } catch(error) {
         return res.status(500).json({error: "erro na requisição"});
       };

       
    };

    async detroy (req, res) {
       try {
        const {id} = req.params;

        const detroy = await NewUsers.findByIdAndDelete(id);

        if(!detroy) {
            return res.status(404).json({error: "erro ao deletar o user"})
        };

        return res.status(201).json(detroy);
       } catch(error) {

        return res.status(500).json({error: "erro na requisição"})
       }
    }

};

export {libpassword};

export default new ControllersUser;