import { NextFunction, Request, Response } from "express";

const verifyRoles = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!(req as any).roles || !Array.isArray((req as any).roles))
      return res.sendStatus(401);
    const rolesArray = [...allowedRoles];
    const result = (req as any).roles
      .map((role: number) => rolesArray.includes(role.toString()))
      .find((val: boolean) => val === true);
    if (!result) return res.sendStatus(401);
    next();
  };
};

export default verifyRoles;
