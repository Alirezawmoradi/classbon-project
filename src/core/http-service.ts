import {API_URL} from '@/configs/global';
import {
    BadRequestError,
    NetworkError,
    NotFoundError,
    UnHandledException,
    UnauthorizedError,
    ValidationError
} from '@/types/http-errors.interface';
import axios from "axios";

type ApiError =
    BadRequestError
    | NetworkError
    | NotFoundError
    | UnHandledException
    | UnauthorizedError
    | ValidationError;
export const httpService = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});
httpService.interceptors.response.use(
    (response) => {
        return response;
    }, error => {
        if (error?.response) {
            const statusCode = error?.response?.status;
            if (statusCode >= 400) {
                const errorData: ApiError = error.response?.data;

                if (statusCode === 400 && !errorData.errors) {
                    throw {
                        ...errorData
                    } as BadRequestError
                }
                if (statusCode === 400 && errorData.errors) {
                    throw {
                        ...errorData
                    } as ValidationError
                }
                if (statusCode === 404) {
                    throw {
                        ...errorData,
                        detail: 'سرویس مورد نظر یافت نشد'
                    } as NotFoundError
                }
                if (statusCode === 403) {
                    throw {
                        ...errorData,
                        detail: 'دسترسی به سرویس مورد نظر امکان پذیر نمی باشد'
                    } as UnauthorizedError
                }
                if (statusCode >= 500) {
                    throw {
                        ...errorData,
                        detail: 'خطای سرور'
                    } as UnHandledException
                } else {
                    throw {
                        detail: 'خطای شبکه'
                    } as NetworkError
                }
            }
        }
    }
)