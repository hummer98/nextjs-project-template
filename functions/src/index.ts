import * as callable from "./callable";
import * as admin from "firebase-admin";
import { setGlobalOptions } from "firebase-functions/v2";
import { onCall } from "firebase-functions/v2/https";

admin.initializeApp();

export const region = "asia-northeast1";

setGlobalOptions({ region });

export const helloWorld = onCall(callable.helloWorld);
