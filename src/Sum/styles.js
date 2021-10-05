import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import colors from '../ui/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.b1
  },
  btn: {
    backgroundColor: colors.a1,
    width: 160,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textBtn: {
    color: colors.c1,
    fontSize: 17
  },
  textResult: {
    fontSize: 75,
    marginBottom: 100
  }
})

export default styles