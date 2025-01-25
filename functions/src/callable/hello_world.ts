import { CallableRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import { HelloWorld, append } from "@packages/common";

export const helloWorld = async (request: CallableRequest<HelloWorld.Request>) : Promise<HelloWorld.Response> => {
  const c = append(1, 2);
  logger.debug(request, c);
  return { message: "Hello from Firebase!" };
};
