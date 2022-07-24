import { USER_URL } from '../config';
import { POST } from '../post';

/**
 * 登录api
 * user/login
 * @param user_name 用户名
 * @param password 密码
 */
export function user_login_api(user_name: any, password: any) {
  return POST(`${USER_URL}/login`, { user_name, password }, false);
}
/**
 * 验证token是否有效
 * user/auth/token
 */
export function user_auth_token_api() {
  return POST(`${USER_URL}/auth/token`);
}
