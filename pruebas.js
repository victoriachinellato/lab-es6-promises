const calentarHorno = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('El horno esta caliente')
        }, 2000);
    })
}

const prepararPizza = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('La pizza esta lista para poner en el horno')
        }, 1000);
           
    })
}

const cocinarPizza = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('La pizza ya esta hecha')
        }, 4000);
    })
}

const comerPizza = () => {
    return 'A comer pizza!'
}


// Receta pizza
//Receta pizza
// 1 - Preparar la pizza
// 2 - Calentar el horno
// 3 - Cocinar la pizza
// 4 - Comer pizza
// 4 - Comer la pizza

// Con then
prepararPizza().then((result) => {
    console.log(result)
    calentarHorno().then((result) => {
        console.log(result)
        cocinarPizza().then((result) => {
            console.log(result)
            console.log(comerPizza())
        })
    })
})

