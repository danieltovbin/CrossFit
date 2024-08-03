import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeather =
    req.headers.authorization ||
    (req.headers.Authorization as string | undefined);
  if (!authHeather?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authHeather.split(" ")[1];
  console.log(token);
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err, decoded: any) => {
      if (err) return res.sendStatus(403);
      const decodedToken = decoded;
      if (decodedToken.UserInfo) {
        (req as any).user = decodedToken.UserInfo.username;
        (req as any).roles = decodedToken.UserInfo.roles;
      } else {
        return res.sendStatus(403);
      }
      next();
    }
  );
};

export default verifyJWT;
