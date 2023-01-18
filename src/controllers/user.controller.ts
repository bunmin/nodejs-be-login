import { NextFunction, Request, Response } from 'express';
import process from 'process';
import { User } from '../entities/user.entity';
import { findUserById } from '../services/user.service';
import { AppDataSource } from '../utils/data-source';

export const getMeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userLogin = res.locals.user;

    const userDetail = await findUserById(userLogin.id, {detail:true});
    // const user = await AppDataSource
    //   .getRepository(User)
    //   .createQueryBuilder("users")
    //   .select("CURRENT_TIMESTAMP")
    //   .execute();

    // console.info("takdir",process.env.PORT)
    // console.info("takdir",process.env.TZ)


    res.status(200).json({
      status: 'success',
      data: {
        userDetail,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
