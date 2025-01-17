const ganancias = require('../models').ganancias_model;

module.exports = {
    list(req, res) {
        return ganancias
            .findAll({})
            .then(ganancias => {
                res.status(200).json(ganancias);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    },
    getById(req, res) {

        console.log(req.params.id);
        return ganancias 
            .findByPk(req.params.id)
            .then((ganancias ) => {
                console.log(ganancias);
                if (!ganancia) {
                    return res.status(404).send({
                        message: 'gananci Not Found',
                    });
                }
                return res.status(200).send(ganancias);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return ganancias
            .create({
                total_hoy: req.body.total_hoy,
                total_semanal: req.body.total_semanal,
                total_mes: req.body.total_mes,

            })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(400).send(error));
    },

}