import { ErrorResponse } from "../error/error-response";
import { logger } from "../app/logging";

const validate = (schema: any, request: any) => {
  const result = schema.validate(request, {
    abortEarly: false,
  });

  if (result.error) {
    logger.error(result.error.message);
    throw new ErrorResponse(400, result.error.message);
  } else {
    return result.value;
  }
};

export { validate };
