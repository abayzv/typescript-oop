import Joi from "joi";

const waSchema = Joi.object({
  user_id: Joi.string().required(),
  client_id: Joi.string().required(),
});

const sessionSchema = Joi.object({
  user_id: Joi.string().required(),
});

export { waSchema, sessionSchema };
