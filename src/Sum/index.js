import React, { useReducer } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './styles'
import * as common from '../common'
import { useStore } from '../state'

const Sum = () => {
    const { state, dispatch } = useStore()

    return (
        <View style={ styles.container }>
            <Text style={ styles.textResult }>{ state.totalPurchase > 0 ? common.currencyFormat(state.totalPurchase) : '' }</Text>

            <TouchableOpacity
              style={ styles.btn }
              onPress={ () => dispatch({ type: 'PRODUTO/SUM_TOTAL' }) }
            >
                <Text style={ styles.textBtn }>Finalizar compra</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Sum
