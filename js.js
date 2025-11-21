const pessoas = [
    {
        name: 'Leonardo',
        age: 21
    },
    {
        name: 'Lucas',
        age: 14
    },
    {
        name: 'João',
        age: 8
    }
]


console.log(pessoas)

const pessoasFiltradas = pessoas.map((elem) => {
    return `${elem.name} e ${elem.age}`;
})

console.log('----')
console.log(pessoasFiltradas)