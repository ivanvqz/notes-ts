type Auth = {
    id: number;
    name: string;
    age: number;
    isAdmin: boolean;
    nacionality?: string;
}

const isAuth = (id: number, name: string, age: number, isAdmin: false, nacionality?: string): Auth => {
    return {id, name, age, isAdmin, nacionality: nacionality ?? 'World'};
    
}

const user = isAuth(12, "Ivan", 23, false, '');
console.log(user);
console.log(typeof user);
