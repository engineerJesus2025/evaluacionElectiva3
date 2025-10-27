import { Text, View } from 'react-native'
import { estilosEstadisticasHome } from '../styles/estilosEstadisticasHome'

export default function EstadisticasHome ({ tareas }) {
  const tareasCompletadas = tareas.filter(t => t.estado).length
  const tareasPendientes = tareas.length - tareasCompletadas

  return (
    <View style={estilosEstadisticasHome.statsContainer}>
      <View style={estilosEstadisticasHome.statItem}>
        <Text style={estilosEstadisticasHome.statNumber}>{tareas.length}</Text>
        <Text style={estilosEstadisticasHome.statLabel}>Total</Text>
      </View>
      <View style={estilosEstadisticasHome.statItem}>
        <Text style={estilosEstadisticasHome.statNumber}>{tareasPendientes}</Text>
        <Text style={estilosEstadisticasHome.statLabel}>Pendientes</Text>
      </View>
      <View style={estilosEstadisticasHome.statItem}>
        <Text style={estilosEstadisticasHome.statNumber}>{tareasCompletadas}</Text>
        <Text style={estilosEstadisticasHome.statLabel}>Completadas</Text>
      </View>
    </View>
  )
}
