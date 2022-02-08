import { Schema, model } from 'mongoose'
const empleadoSchema = new Schema({
    "_tipoObjeto": String,
    "_idEmpleado": {
        type: Number,
        unique: true,
    },
    "_nombre": String,
    "_sueldobase": {
        type: Number,
        default: 950,
    },
    "_ventas": Array
})
export type totEmp = {
    "_tipoObjeto": string,
    "_idEmpleado":number,
    "_nombre": string,
    "_sueldobase": number,
    "_ventas": Array<any>
}
export const modeloEmpleado = model('empleados', empleadoSchema)