import { NextFunction } from 'express';
import { ValidationError } from 'express-validation';

// Disabling eslint to properly create express errors handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorsHandler(err: unknown, req: Server.Request, res: Server.Response, next: NextFunction) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json({ error: err.message });
    }

    if (err instanceof Error) {
        return res.status(500).json({ error: err.message });
    }

    res.status(500).json({ error: 'Unknown error' });
}

export default errorsHandler;
