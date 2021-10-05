import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import colors from '../ui/colors'

const styles = StyleSheet.create({
  // Home
  container: {
    flex: 1,
    backgroundColor: colors.b1
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 10
  },
  containerItem: {
    flexDirection: 'row',
    borderRadius: 10,
    fontSize: 25,
    height: 60,
    marginVertical: 5,
    padding: 8,
    paddingTop: 10,
    paddingLeft: 15
  },
  input: {
    width: '80%',
    height: '60%',
    fontSize: 25,
    color: colors.p1,
    backgroundColor: colors.c1,
    paddingLeft: 10,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: getStatusBarHeight()
  },
  addButton: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: getStatusBarHeight()
  },
  incoButton: {
    fontSize: 40,
    color: colors.a1,
    marginLeft: 10
  },
  list: {
    margin: 15
  },
  iconButtonTrash: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  iconTrash: {
    fontSize: 30,
    marginLeft: Platform.OS === 'ios' ? 0 : 10
  },
  textList: {
    width: 290,
    fontSize: 25,
    paddingTop: Platform.OS === 'ios' ? 5 : 3
  },

  // Sum
  containerSum: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.b1
  },
  btnSum: {
    backgroundColor: colors.a1,
    width: 160,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textBtnSum: {
    color: colors.c1,
    fontSize: 17
  },
  textResultSum: {
    fontSize: 75,
    marginBottom: 100
  }
})

export default styles