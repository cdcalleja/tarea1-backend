

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Tarea 1 - backend - node y express')
})

app.listen(port, () => {
  console.log(`App ejemplo escuchando en: http://localhost:${port}`)
})

//debe sumar dos números (uso de params).

app.get('/suma/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1);  //si le retirars Number te concatena como strings
    let num2 = Number(req.params.num2);
    let resultado = num1 + num2;
    res.json(resultado);
    console.log(req.params, resultado);
    console.log(num1, num2);

});

//debe restar dos números y si uno de los números es cero decir que no se puede restar (uso de params).
app.get('/resta/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    if (num1 == 0 || num2 == 0){
        res.status(200).send("El número no puede ser igual a cero para hacer la resta");
    } else {
        let resta = num1 - num2;
        res.json(resta);
        console.log(req.params, resta);
        console.log(num1, num2);
    }
})


//Mostrar nombre y apellido, edad, altura y nacionalidad (uso de query).

app.get('/usuario', (req, res) => {
    let nombre = req.query.nombre;
    let apellido = req.query.apellido;
    let edad = req.query.edad;
    let altura = req.query.altura;
    let nacionalidad = req.query.nacionalidad;
    console.log(req.query);
    res.status(200).send(` Mi nombre es:${nombre} ${apellido} , tengo ${edad} años, mido ${altura} m y soy ${nacionalidad}`);
});
