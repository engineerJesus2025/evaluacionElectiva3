/* eslint-disable react/jsx-closing-tag-location */
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Checkbox } from 'react-native-paper'

import { Controller } from 'react-hook-form'
import { estilosInputsFormulario } from '../styles/estilosInputsFormulario'
import { useState } from 'react'

export function InputFormulario ({ control, name, rules, ...props }) {
  const [focus, setFocus] = useState(false)
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View style={estilosInputsFormulario.inputContainer}>
          <Text style={estilosInputsFormulario.label}>{name}:</Text>
          <TextInput
            {...props}
            onBlur={() => {
              onBlur()
              setFocus(false)
            }}
            onChangeText={onChange}
            value={value}
            onFocus={() => setFocus(true)}
            style={[
              estilosInputsFormulario.textInput,
              error && estilosInputsFormulario.textInputError,
              focus && estilosInputsFormulario.textInputFocused
            ]}
          />
          {error && <Text style={estilosInputsFormulario.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  )
}

export function CheckboxFormulario ({ control, name, label }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View style={estilosInputsFormulario.checkboxContainer}>
          <Checkbox
            status={value ? 'checked' : 'unchecked'}
            onPress={() => onChange(!value)}
          />
          <Text style={estilosInputsFormulario.checkboxLabel}>{label}</Text>
        </View>
      )}
    />
  )
}
