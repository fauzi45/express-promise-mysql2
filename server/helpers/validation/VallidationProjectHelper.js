const Joi = require("joi");
const Boom = require("boom");

const detailProjectValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};



module.exports = {
  detailProjectValidation
};
