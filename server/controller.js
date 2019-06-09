module.exports ={

    createHouse: async (req, res) => {
        const {name, address, city, state, zip_code, image_url, monthly_morgage, rent} = req.body
        const houses = await req.app.get('db').create_house(name, address, city, state, zip_code, image_url, monthly_morgage, rent)

        res.status(200).json(houses)
    },

    getHouse: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
    
        db.get_house(id)
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).send(`getOne: ${error}`))
    },

    getHouses: async (req, res) => {
        console.log('hit')
        const houses = await req.app.get('db').get_houses();
        // {id} = req.params;
     
         res.status(200).json(houses)
        },

    deleteHouse: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_house(id)
    .then(() => res.sendStatus(200))
    .catch(error => res.status(500).send(`delete: ${error}`))
    },

    updateHouse:(req,res) => {
        const db = req.app.get('db'),
        {name, address, city, state, zip_code, image_url, monthly_morgage, rent} = req.body
        const { id } = req.params
     
     db.update_house(id, name, address, city, state, zip_code, image_url, monthly_morgage, rent)
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).send(`update: ${error}`))
     }
}