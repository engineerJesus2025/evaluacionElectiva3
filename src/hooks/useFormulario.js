import { useRoute, useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { agregarTarea, editarTarea } from '../store/slices/tareasSlice'

export default function useFormulario () {
  const route = useRoute()
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { tareaEditar } = route.params || {}

  const { control, handleSubmit, formState: { isValid, isDirty } } = useForm({
    mode: 'onTouched',
    defaultValues: {
      titulo: tareaEditar?.titulo || '',
      descripcion: tareaEditar?.descripcion || '',
      estado: tareaEditar?.estado || false
    }
  })

  const onSubmit = (data) => {
    if (tareaEditar) {
      // Editar
      dispatch(editarTarea({ ...data, id: tareaEditar.id }))
    } else {
      // Agregar nueva
      dispatch(agregarTarea(data))
    }
    navigation.goBack()
  }

  const ModoEdicion = !!tareaEditar

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    ModoEdicion,
    tareaEditar,
    isDirty,
    isValid
  }
}
