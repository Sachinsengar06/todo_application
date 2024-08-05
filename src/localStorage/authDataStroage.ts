export interface User{
    email:string;
    name:string;
    password:string;
}
export const saveUser = (user:User) =>{
    const users:User[] = JSON.parse(localStorage.getItem('users') ?? '[]')
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users))
}
export const getUser = () => {
    return JSON.parse(localStorage.getItem('users') ?? '[]')
}