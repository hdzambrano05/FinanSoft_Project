const proveedores = require('../models').proveedores_model;

module.exports = {
    list(req, res) {
        return proveedores
            .findAll({})
            .then(proveedores => {
                res.status(200).json(proveedores);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    },
    getById(req, res) {

        console.log(req.params.id);
        return proveedores
            .findByPk(req.params.id)
            .then((proveedores) => {
                console.log(proveedores);
                if (!proveedores) {
                    return res.status(404).send({
                        message: 'proveedores Not Found',
                    });
                }
                return res.status(200).send(proveedores);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return proveedores
            .create({
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                email: req.body.email,
            })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(400).send(error));
    },


}