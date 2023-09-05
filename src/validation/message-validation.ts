import Joi from "joi";

const sendMessageSchema = Joi.object({
  user_id: Joi.string().required(),
  client_id: Joi.string().required(),
  message: Joi.string().required(),
  sender: Joi.string().required(),
});

const sendMediaMessageSchema = Joi.object({
  user_id: Joi.string().required(),
  client_id: Joi.string().required(),
  message: Joi.string().required(),
  sender: Joi.string().required(),
  media_url: Joi.string().required(),
});

export { sendMessageSchema, sendMediaMessageSchema };
