import createHttpError from 'http-errors';
import { UserModel} from '../db/models/user.js';
import { SessionsCollection} from '../db/models/session.js';
import bcrypt from 'bcrypt';
import {randomBytes} from "crypto";
import {FIFTEEN_MINUTES, ONE_DAY} from "../constants/index.js";



export const registerUser = async (payload) => {
  const user = await UserModel.findOne({ email: payload.email });
  if (user) throw createHttpError(409, 'Email in use');

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  return await UserModel.create({
    ...payload,
    password: encryptedPassword,
  });
};

export const loginUser = async (payload) => {
  const user = await UserModel.findOne({ email: payload.email });
  if(!user) throw createHttpError(401, "Unauthorized");
  const isEqual = await bcrypt.compare(payload.password, user.password);
  if (!isEqual) throw createHttpError(401, "Unauthorized");

  await SessionsCollection.deleteOne({ userId: user._id });

  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');

  return await SessionsCollection.create({
    userId: user._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });
};