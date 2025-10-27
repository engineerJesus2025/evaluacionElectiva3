// hooks/useTaskList.js
import { useDispatch } from 'react-redux'
import { borrarTarea, cambiarEstado } from '../store/slices/tareasSlice'
import { useNavigation } from '@react-navigation/native'

export const useListaTareas = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const eventoBorrar = (id) => {
    dispatch(borrarTarea(id))
  }

  const eventoCambiarEstado = (id) => {
    dispatch(cambiarEstado(id))
  }

  const eventoEditar = ({ id, titulo, descripcion, estado }) => {
    navigation.navigate('addTask', { tareaEditar: { id, titulo, descripcion, estado } })
  }

  return {
    eventoBorrar,
    eventoCambiarEstado,
    eventoEditar,
    existenTareas: (tareas) => tareas.length > 0
  }
}
