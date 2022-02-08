db.empleados.drop()
db.empleados.insertMany([
    {
        "_idEmpleado": 1,
        "_nombre": "Lucia",
        "_sueldobase": 1200,
        "_ventas":  null
    },
    {
        "_idEmpleado": 2,
        "_nombre": "Pepe",
        "_sueldobase": 1050,
        "_ventas":  null
    }
])