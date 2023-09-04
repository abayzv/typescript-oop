import Joi from "joi";

const sendMessageSchema = Joi.object({
  message: Joi.string().required(),
  sender: Joi.string().required(),
});

export { sendMessageSchema };
