import { Text, View } from 'react-native'
import BotonFormulario from './BotonFormulario'
import { useNavigation } from '@react-navigation/native'
import { estilosHeader } from '../styles/estilosHeader'

export default function HeaderHome () {
  const navigation = useNavigation()
  return (
    <View style={estilosHeader.header}>
      <Text style={estilosHeader.title}>Mis Tareas</Text>
      <BotonFormulario evento={() => navigation.navigate('addTask')} titulo='+ Nueva Tarea' estilos={estilosHeader.addButton} estilosTexto={estilosHeader.addButtonText} />
    </View>
  )
}
