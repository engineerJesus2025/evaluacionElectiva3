// import { StyleSheet } from 'react-native'

import { Text, View } from 'react-native'
import BotonFormulario from './BotonFormulario'

import { InputFormulario, CheckboxFormulario } from './InputsFormulario'
import useFormulario from '../hooks/useFormulario'
import useValidacionesFormulario from '../hooks/useValidacionesForm'
import { estilosFormulario } from './../styles/estilosFormulario'

export default function Fomulario () {
  const {
    control,
    handleSubmit,
    ModoEdicion,
    isDirty,
    isValid
  } = useFormulario()
  const validaciones = useValidacionesFormulario()

  const botonDesabilitado = !isValid || (!isDirty && ModoEdicion)

  return (
    <View style={estilosFormulario.container}>
      <View style={estilosFormulario.formCard}>
        <View style={estilosFormulario.header}>
          <Text style={estilosFormulario.title}>{ModoEdicion ? 'Editar tarea' : 'Agregar nueva tarea'}</Text>
          <Text style={estilosFormulario.subtitle}>{ModoEdicion ? 'Modifica los detalles de tu tarea' : 'Completa los detalles para crear una nueva tarea'}</Text>
        </View>
        <View style={estilosFormulario.fieldGroup}>
          <Text style={estilosFormulario.fieldLabel}>Información Básica</Text>
          <InputFormulario
            name='titulo'
            control={control}
            rules={validaciones.titulo}
            placeholder='Titulo'
          />

          <InputFormulario
            control={control}
            name='descripcion'
            rules={validaciones.descripcion}
            placeholder='Descripcion'
          />

          <CheckboxFormulario
            control={control}
            name='estado'
            label='Tarea Completada'
          />
          <BotonFormulario estilos={{ ...estilosFormulario.submitButton, ...(botonDesabilitado && estilosFormulario.submitButtonDisabled) }} estilosTexto={{ ...estilosFormulario.submitButtonText, ...(botonDesabilitado && estilosFormulario.submitButtonTextDisabled) }} titulo={ModoEdicion ? 'Guardar Cambios' : 'Guardar Tarea'} evento={handleSubmit} disabled={botonDesabilitado} />
        </View>

      </View>
    </View>
  )
}
