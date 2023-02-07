const Joi = require("joi");

exports.formUser = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(3).required(),
    address: Joi.string().required(),
})