import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})