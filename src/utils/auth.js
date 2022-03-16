import { sign } from 'jsonwebtoken'

const AUTH_SECRET = 'secret'

export const generateAccessToken = (data) => sign(data, AUTH_SECRET)