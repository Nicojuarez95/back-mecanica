import Joi from "joi-oid";

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .max(100)
        .messages({
            "string.min": "El nombre debe tener al menos 3 caracteres.",
            "string.max": "El nombre debe tener un máximo de 100 caracteres.",
            'string.empty': 'El nombre no puede estar vacío.',
            'any.required': 'Se requiere un nombre'
        }),
    code: Joi
        .string()
        .required()
        .min(1)
        .max(1000)
        .messages({
            "string.min": "El nombre debe tener al menos 1 caracteres.",
            "string.max": "El nombre debe tener un máximo de 1000 caracteres.",
            'string.empty': 'El nombre no puede estar vacío.',
            'any.required': 'Se requiere un nombre'
        }),
    price: Joi
        .number()
        .required()
        .min(1)
        .messages({
            "number.min": "El precio debe ser al menos 1",
            'number.empty': 'El precio no puede estar vacío',
            'any.required': 'Se requiere un precio'
        }),
    stock: Joi
        .number()
        .required()
        .min(0)
        .messages({
            'number.min': 'El stock debe tener al menos 1 caracteres.',
            'number.empty': 'El stock no puede estar vacía',
            'any.required': 'Se requiere un stock',
        }),
    category: Joi
        .string()
        .required()
        .min(1)
        .max(100)
        .messages({
            "string.min": "La categoría debe tener al menos 1 caracteres.",
            "string.max": "La categoría debe tener un máximo de 100 caracteres.",
            'string.empty': 'La categoría no puede estar vacía',
            'any.required': 'Se requiere una categoría'
        })
});

export default schema;