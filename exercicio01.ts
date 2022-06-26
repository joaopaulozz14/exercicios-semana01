interface User {
  name: string;
  age: number;
  occupation: string;
};

export const users: User[] = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];

export function logPerson(users: {name:string, age:number}) {
    console.log(` - ${users.name}, ${users.age}`);

}

console.log('Users:');
users.forEach(logPerson);