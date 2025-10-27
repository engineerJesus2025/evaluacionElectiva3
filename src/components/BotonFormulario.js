// import { Button } from 'react-native-web'
import { Button, Text } from '@react-navigation/elements'
import { estilosBotonFormulario } from '../styles/estilosBotonFormulario'

export default function BotonFormulario ({ evento, titulo, disabled, estilos, estilosTexto }) {
  return (
    <Button onPress={evento} disabled={disabled} style={{ ...estilosBotonFormulario.button, ...estilos }}><Text style={estilosTexto}>{titulo}</Text></Button>
  )
}
