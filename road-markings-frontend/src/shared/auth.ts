import { apiRequest } from "./api";

export type User = {
  id: number;
  email: string;
  is_active: boolean;
  created_at: string;
};

export type LoginResponse = {
  access_token: string;
  token_type: string;
};

export async function registerUser(data: {
  email: string;
  password: string;
}): Promise<User> {
  // подстрой путь под свой эндпоинт регистрации в /auth
  return apiRequest<User>("/auth/register", "POST", data);
}

export async function loginUser(data: {
  email: string;
  password: string;
}): Promise<void> {
  // подстрой путь под свой эндпоинт логина (например, /auth/login или /auth/token)
  const res = await apiRequest<LoginResponse>("/auth/login", "POST", data);
  localStorage.setItem("access_token", res.access_token);
}

export function logoutUser() {
  localStorage.removeItem("access_token");
}

export function isAuthenticated() {
  return !!localStorage.getItem("access_token");
}
