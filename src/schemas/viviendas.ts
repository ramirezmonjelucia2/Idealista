import { Schema, model } from 'mongoose'

const viviendaSchema = new Schema({
    "_tipoObjeto": {
        type: String,
        required: [true, 'Que no se te olvide, a ver como lo identificas luego !!']
    },
    "_idVivienda": {
        type: Number,
        unique: true,
        required: [true, 'Ponle un ID!!']
    },
    "_largo": Number,
    "_ancho": Number,
    "_ubicacion": {
        "municipio": String,
        "ciudad": {
            type: String,
            lowercase: true,
            required: [true, 'Se te olvida la ciudad!']
        },
        "codpost": Number,
    },
    "_caracteristicas": {
        habitaciones: Number,
        baños: Number,
        ascensor: Boolean,
    },
    "_preciom2": Number,
    "_estado": {
        vendido: {
            type: Boolean,
            default: false
        },
        fecha: {
            type: Date,
            default: null
        },
        empleado: {
            type: Number,
            default: null
        }
    },
    "_piscina": Boolean,
    "_largojardin": Number,
    "_anchojardin": Number,
    "_cochera": Boolean

})

export type totVivi = {
    "_tipoObjeto": string,
    "_idVivienda": number,
    "_largo": number,
    "_ancho": number,
    "_ubicacion": {
        "municipio": string,
        "ciudad": string,
        "codpost": number,
    },
    "_caracteristicas": {
        "habitaciones": number,
        "baños": number,
        "ascensor": boolean,
    },
    "_preciom2": number| null,
    "_estado": {
        "vendido": boolean| null,
        "fecha": Date | null,
        "empleado": number| null,

    }
    "_piscina": boolean,
    "_largojardin": number,
    "_anchojardin": number,
    "_cochera": boolean
}
export const modeloVivienda = model('viviendas', viviendaSchema)