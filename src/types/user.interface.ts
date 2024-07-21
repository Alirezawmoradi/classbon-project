export interface User {
    token: string;
}

export interface UserToken {
    mobile?: string;
    image?: number;
    full_name?: string;
    exp: number;
    accessToken: string;
}

export interface UserSession extends UserToken {

}