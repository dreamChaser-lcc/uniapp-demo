const env = process.env.NODE_ENV;
// console.log(env)
const BASE_SEVER_URL = "http://150.158.189.25:8006";
const BASE_PREFIX_URL = env === "production" ? BASE_SEVER_URL : "/api";

export const USER_URL = `${BASE_PREFIX_URL}/user`;
export const GOODS = `${BASE_PREFIX_URL}/good`;
