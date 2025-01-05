import { CallableRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import { HelloWorld } from "@packages/common/types/functions/hello_world";

export const helloWorld = async (request: CallableRequest<HelloWorld.Request>) : Promise<HelloWorld.Response> => {
  logger.debug(request);
  return { message: "Hello from Firebase!" };
};
