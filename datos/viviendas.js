db.viviendas.drop()
db.viviendas.insertMany([
    {
        "_tipoObjeto": "Casa",
        "_idVivienda": 1,
        "_largo": 50,
        "_ancho": 50,
        "_ubicacion": {
            "municipio": "Utrera",
            "ciudad": "sevilla",
            "codpost": 41710,
        },
        "_caracteristicas": {
            "habitaciones": 2,
            "baños": 2,
            "ascensor": false,
        },
        "_preciom2": 100000,
        "_estado": {
            "vendido": false,
            "fecha": null,
            "empleado": null

        },
        "_cochera": true
    },
    {
        "_tipoObjeto": "Chalet",
        "_idVivienda": 2,
        "_largo": 50,
        "_ancho": 50,
        "_ubicacion": {
            "municipio": "Utrera",
            "ciudad": "sevilla",
            "codpost": 41710,
        },
        "_caracteristicas": {
            "habitaciones": 2,
            "baños": 2,
            "ascensor": false,
        },
        "_preciom2": 150000,
        "_estado": {
            "vendido": false,
            "fecha": null,
            "empleado": null

        },
        "_piscina": true,
        "_largojardin": 8,
        "_anchojardin": 8
    }


])