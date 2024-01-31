declare global {
    namespace API {
        type Response<T = unknown> = {
            data: T;
        };

        type ErrorResponse = {
            error: string;
        };
    }
}

export {};
