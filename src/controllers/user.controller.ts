import { NextFunction, Request, Response } from 'express';
import { findUserById } from '../services/user.service';

export const getMeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    // const user2 = await findUserById(user.id, {detail:true});
    const user2 = await findUserById(user.id);

    res.status(200).status(200).json({
      status: 'success',
      data: {
        user2,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
