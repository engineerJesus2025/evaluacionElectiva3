/* eslint-disable react/jsx-closing-tag-location */
import { Text, View } from 'react-native-web'
import BotonFormulario from './BotonFormulario'

import { useListaTareas } from '../hooks/useListaTareas'
import { estilosListaTareas } from './../styles/estilosListaTareas'
import { estilosBotonFormulario } from '../styles/estilosBotonFormulario'

export default function ListaTareas ({ tareas }) {
  const { existenTareas } = useListaTareas()
  return (
    <>
      <View style={estilosListaTareas.container}>
        <View style={estilosListaTareas.listContainer}>
          {existenTareas(tareas)
            ? tareas.map((tarea) =>
              (
                <Tarea key={tarea.id} id={tarea.id} titulo={tarea.titulo} descripcion={tarea.descripcion} estado={tarea.estado} />
              )
            )
            : <View style={estilosListaTareas.emptyState}><Text style={estilosListaTareas.emptyStateText}>No hay Tareas Registradas</Text></View>}
        </View>
      </View>
    </>
  )
}

function Tarea ({ id, titulo, descripcion, estado }) {
  const {
    eventoBorrar,
    eventoCambiarEstado,
    eventoEditar
  } = useListaTareas()

  return (
    <View style={[estilosListaTareas.taskCard, estado ? estilosListaTareas.taskCardCompleted : estilosListaTareas.taskCardPending]}>
      <View style={estilosListaTareas.taskHeader}>
        <Text style={estilosListaTareas.taskTitle}>{titulo}</Text>
        <View style={{ ...estilosListaTareas.taskStatus, ...(estado ? estilosListaTareas.statusCompleted : estilosListaTareas.statusPending) }}>
          <Text style={estilosListaTareas.statusText}>{estado ? 'Concluido' : 'Pendiente'}</Text>
        </View>
      </View>
      <View style={estilosListaTareas.taskDescription}>
        <Text>{descripcion || 'Sin descripcion'}</Text>
      </View>
      <View style={estilosListaTareas.taskActions}>
        <BotonFormulario evento={() => eventoCambiarEstado(id)} titulo='cambiar estado' estilos={estilosBotonFormulario.primary} estilosTexto={{ ...estilosBotonFormulario.buttonText, ...estilosBotonFormulario.buttonTextPrimary }} />
        <BotonFormulario evento={() => eventoEditar({ id, titulo, descripcion, estado })} titulo='Editar' estilos={estilosBotonFormulario.success} estilosTexto={{ ...estilosBotonFormulario.buttonText, ...estilosBotonFormulario.buttonTextPrimary }} />
        <BotonFormulario evento={() => eventoBorrar(id)} titulo='Borrar' estilos={estilosBotonFormulario.danger} estilosTexto={{ ...estilosBotonFormulario.buttonText, ...estilosBotonFormulario.buttonTextPrimary }} />
      </View>
    </View>
  )
}
