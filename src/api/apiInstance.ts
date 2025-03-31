import { env } from "@/config/env";
import { WooResponse } from "@/types/api";
import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

import Cookies from "js-cookie";

export const apiInstance: AxiosInstance = axios.create({
  baseURL: `${env.APP_URL}/api`,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

type TRequestConfig = InternalAxiosRequestConfig<
  AxiosRequestConfig & { headers: { Authorization?: string; Lang: string } }
>;
type TRequestInterceptor = (config: TRequestConfig) => Promise<TRequestConfig>;

const requestInterceptor: TRequestInterceptor = async (config) => {
  const headers = new AxiosHeaders({ ...config.headers });

  const access_token = Cookies.get("access_token");
  if (access_token) {
    headers.set("Authorization", `Bearer ${access_token}`);
  }

  if (config.url?.includes(env.WOOCOMMERCE_API)) {
    const base = btoa(
      `${env.WOOCOMMERCE_USERNAME}:${env.WOOCOMMERCE_PASSWORD}`
    );
    headers.set("Authorization", `Basic ${base}`);
  }

  return { ...config, headers };
};

export const responseErrorInterceptor = (error: AxiosError) => {
  if (error.response) {
    console.error(
      'Ответ сервера - "Ошибка":',
      error.response.status,
      error.response.data
    );
  } else if (error.request) {
    console.error("Ошибка при выполнении запроса:", error.request);
  } else {
    console.error("Произошла ошибка:", error.message);
  }
  return Promise.reject(error);
};

apiInstance.interceptors.request.use(requestInterceptor, (error) => error);

apiInstance.interceptors.response.use((config) => {
  if (config.headers["x-wp-total"] && config.headers["x-wp-totalpages"]) {
    const response: WooResponse<typeof config.data> = {
      items: config.data,
      totalItems: config.headers["x-wp-total"],
      totalPages: config.headers["x-wp-totalpages"],
    };
    return response;
  }
  return config.data;
}, responseErrorInterceptor);

export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;
