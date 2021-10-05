import { StatusBar } from 'expo-status-bar'
import React, { useReducer } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'

import md5 from 'react-native-md5'
import Icon from 'react-native-vector-icons/FontAwesome'
import Prompt from 'react-native-input-prompt'

import styles from './styles'
import colors from '../ui/colors'
import { useStore } from '../state'

const Home = () => {
  const { state, dispatch } = useStore()

  return (
    <View style={ styles.container }>
      <View style={ styles.inputContainer }>
        <TextInput
          style={ styles.input }
          value={ state.productItem }
          onChangeText={ v => dispatch({ type: 'PRODUTO/SET_PRODUCT_ITEM', product: v }) }
          placeholder='Adicionar produto'
        />

        <TouchableOpacity
          style={ styles.addButton }
          onPress={ () => dispatch({ type: 'PRODUTO/OPEN_PROMPT' }) }
        >
          <Icon name="plus" style={ styles.incoButton } />
        </TouchableOpacity>
      </View>

      <FlatList
        data={ state.products }
        style={ styles.list }
        renderItem={ ({ item }) => (
          <TouchableOpacity
            onPress={ () => dispatch({ type: 'PRODUTO/CHECK', id: item.id }) }
          >
            <View
              style={
                item.isChecked ? {
                  ...styles.containerItem
                } : {
                  ...styles.containerItem,
                  backgroundColor: colors.c1
                }
              }>
              <Text
                ellipsizeMode='tail'
                numberOfLines={ 1 }
                style={
                  item.isChecked ? {
                    ...styles.textList,
                    textDecorationLine: 'line-through'
                  } : {
                    ...styles.textList
                  }
                }
              >
                { item.item }
              </Text>

              <TouchableOpacity
                style={ styles.iconButtonTrash }
                onPress={ () => dispatch({ type: 'PRODUTO/REMOVE', id: item.id }) }
              >
                <Icon name="trash" style={ styles.iconTrash } />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ) }
      />

      <StatusBar style="auto" />
      <PromptView state={ state } dispatch={ dispatch } />
    </View>
  )
}

const PromptView = ({ state, dispatch }) => (
  <Prompt
    visible={ state.visiblePrompt }
    title="Qual preço?"
    placeholder="Preço"
    onCancel={ () => dispatch({ type: 'PRODUTO/CLOSE_PROMPT' }) }
    onSubmit={ v => {
      const idHexMd5v = md5.hex_md5(Date.now() + state.productItem)
      dispatch({ type: 'PRODUTO/ADD', item: { id: idHexMd5v, item: state.productItem, isChecked: false, price: parseFloat(v.replace(",", ".")) } })
      dispatch({ type: 'PRODUTO/CLOSE_PROMPT' })
      dispatch({ type: 'PRODUTO/SET_PRODUCT_ITEM', product: '' })
    } }
  />
)

export default Home


