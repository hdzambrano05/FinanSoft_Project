const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

const usuarios = require('../models').usuarios_model;

module.exports = {
    list(req, res) {
        return usuarios
            .findAll({})
            .then(usuarios => {
                res.status(200).json(usuarios);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    },

    getById(req, res) {

        console.log(req.params.id);
        return usuarios
            .findByPk(req.params.id)
            .then((usuarios) => {
                console.log(usuarios);
                if (!usuarios) {
                    return res.status(404).send({
                        message: 'usuarios Not Found',
                    });
                }
                return res.status(200).send(usuarios);
            })
            .catch((error) =>
                res.status(400).send(error));
    },


    add: async (req, res) => {
        try {
            // Verificar si el usuario ya existe por el email o el nombre de usuario
            const existingUser = await usuarios.findOne({
                where: {
                    [Op.or]: [
                        { email: req.body.email },
                        { nombre: req.body.nombre }
                    ]
                }
            });

            if (existingUser) {
                return res.status(400).send({ error: 'El nombre de usuario o el correo electrónico ya están registrados.' });
            }

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

            const newUser = await usuarios.create({
                nombre: req.body.nombre,
                email: req.body.email,
                password: hashedPassword,
                rol: req.body.rol || 'cliente'
            });

            return res.status(201).send(newUser);

        } catch (error) {
            return res.status(500).send({ error: 'Hubo un error al procesar la solicitud.' });
        }
    },


}