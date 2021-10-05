import React, { createContext, useContext, useReducer } from 'react'

const stateApp = {
    products: [],
    productItem: '',
    visiblePrompt: false,
    totalPurchase: 0
}

const reducer = (state, action) => {
    if (action.type == 'PRODUTO/ADD') {
        if (action.item.item != '') {
            return {
                ...state,

                products: [
                    ...state.products,

                    action.item
                ]
            }

        } else {
            return state
        }

    } else if (action.type == 'PRODUTO/CHECK') {
        return {
            ...state,

            products: state.products.map(item => {
                if (item.id == action.id) {
                    return { ...item, isChecked: !item.isChecked }

                } else {
                    return item
                }
            })
        }

    } else if (action.type == 'PRODUTO/REMOVE') {
        return {
            ...state,

            products: state.products.filter(item => item.id != action.id)
        }

    } else if (action.type == 'PRODUTO/SET_PRODUCT_ITEM') {
        return {
            ...state,

            productItem: action.product
        }

    } else if (action.type == 'PRODUTO/OPEN_PROMPT') {
        if (state.productItem != '') {
            return {
                ...state,

                visiblePrompt: true
            }

        } else {
            return state
        }

    } else if (action.type == 'PRODUTO/CLOSE_PROMPT') {
        return {
            ...state,

            visiblePrompt: false
        }

    } else if (action.type == 'PRODUTO/SUM_TOTAL') {
        let itemsChecked = state.products.filter(i => i.isChecked == true)

        if (itemsChecked.length > 0) {
            let totalPurchaseSum = 0

            itemsChecked.map(i => totalPurchaseSum += i.price)

            return {
                ...state,

                totalPurchase: totalPurchaseSum
            }

        } else {
            return {
                ...state,

                totalPurchase: 0
            }
        }
    }
}

const Store = createContext()
Store.displayName = 'Store'

export const useStore = () => useContext(Store)

export const StoreProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, stateApp)
    const providerStore = { state, dispatch }

    return (
        <Store.Provider value={ providerStore }>{ children }</Store.Provider>
    )
}

