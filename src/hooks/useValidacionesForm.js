import { DESCRIPCION_REGEX, TITULO_REGEX } from '../utils/regex'

export default function useValidacionesFormulario () {
  const validaciones = {
    titulo: {
      required: TITULO_REGEX.requerido,
      minLength: {
        value: TITULO_REGEX.limites.minimo,
        message: TITULO_REGEX.limites.mensaje_min
      },
      maxLength: {
        value: TITULO_REGEX.limites.maximo,
        message: TITULO_REGEX.limites.mensaje_max
      },
      pattern: {
        value: TITULO_REGEX.patron,
        message: TITULO_REGEX.mensaje
      }
    },

    descripcion: {
      required: DESCRIPCION_REGEX.requerido,
      minLength: {
        value: DESCRIPCION_REGEX.limites.minimo,
        message: DESCRIPCION_REGEX.limites.mensaje_min
      },
      maxLength: {
        value: DESCRIPCION_REGEX.limites.maximo,
        message: DESCRIPCION_REGEX.limites.mensaje_max
      },
      pattern: {
        value: DESCRIPCION_REGEX.patron,
        message: DESCRIPCION_REGEX.mensaje
      }
    }
  }
  return validaciones
}
