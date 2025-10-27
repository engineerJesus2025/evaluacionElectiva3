import { View } from 'react-native'

import { useSelector } from 'react-redux'

import HeaderHome from '../components/HeaderHome'
import EstadisticasHome from '../components/EstadisticasHome'
import ListaTareas from './../components/ListaTareas'

export default function HomePage () {
  const tareas = useSelector(state => state.tareas.tarea)

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#f8f9fa',
      padding: 16
    }}
    >
      <HeaderHome />
      <EstadisticasHome tareas={tareas} />
      <ListaTareas tareas={tareas} />
    </View>
  )
}
