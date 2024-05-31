import { AxiosResponse } from "axios";

import { AuthResponse } from "../models/response/AuthResponse";

import $api from "../api/api";
import $login from "../api/index";

const CLIENT_ID = "Api";
const CLIENT_SECRET = "client_secret";
const SCOPE = "api";
const GRANT_TYPE = "password";

export default class AuthService {
  static async login(
    username: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    const credentials = {
      username,
      password,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      scope: SCOPE,
      grant_type: GRANT_TYPE,
    };
    return $login.post<AuthResponse>("", credentials).catch((error) => {
      console.error("An error occurred during login:", error);
      throw error;
    });
  }

  static async registration(
    username: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/Profile/create", { username, password });
  }

  static async logout(): Promise<void> {
    return $api.post("/logout");
  }
}
