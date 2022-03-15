<<<<<<< HEAD

export const signup = (data) => {
  console.log(data)
  return false
}
=======
import { sign } from 'jsonwebtoken'


let users = [ ]

const generateAccessToken = (data) => sign(data, 'secret')

const getUserByEmail = (searchEmail) => 
users.find((obj) => obj.email === searchEmail)


export const signup = (data) => {
    if (getUserByEmail(data.email)) throw new Error('email_existente')

    users.push(data)
    return generateAccessToken({ email: data.email })
}
        
export const login = (data) => {
    const user = getUserByEmail(data.email)
    if(!user) throw new Error('email_nao_encontrado')

    if(user.password !== data.password) throw new Error('senha_incorreta')

    return generateAccessToken({ email: data.email })
}
    
>>>>>>> 9dd8634b02e9b3a6b8aab0d7a7589e6d62c2b2b2
