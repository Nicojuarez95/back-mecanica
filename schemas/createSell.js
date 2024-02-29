import Joi from "joi-oid";

const schema = Joi.object({
    products: Joi
        .array()
        .items(Joi.object())
        .required()
        .min(1)
        .messages({
            "array.min": "Debe haber al menos un elemento en el array.",
            'array.empty': 'El array no puede estar vacío.',
            'any.required': 'Se requiere al menos un elemento en el array.'
        })
});

export default schema;