/**
 * Expresiones regulares para validaciones
 */

export const TITULO_REGEX = {
  patron: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s.,!?()-]+$/,
  mensaje: 'Solo letras, números, espacios y signos básicos de puntuación',
  limites: {
    minimo: 3,
    maximo: 20,
    mensaje_min: 'Al menos 3 caracteres',
    mensaje_max: 'Maximo 20 caracteres'
  },
  requerido: {
    value: true,
    message: 'El título es obligatorio'
  }
}

export const DESCRIPCION_REGEX = {
  patron: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s.,!?()"-:;]+$/,
  mensaje: 'Solo letras, números, espacios y signos de puntuación comunes',
  limites: {
    minimo: 0,
    maximo: 50,
    mensaje_min: '',
    mensaje_max: 'Maximo 50 caracteres'
  },
  requerido: {
    value: false,
    message: ''
  }
}
