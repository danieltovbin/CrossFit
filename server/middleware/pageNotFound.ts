import { NextFunction, Request, Response } from "express";

const pageNotFound = ((req:Request, res:Response, next:NextFunction) => {
    console.log(`404 handler reached for URL: ${req.originalUrl}`);
    res.status(404).json({ message: 'Oops... Page not found!' });
});

export default pageNotFound


