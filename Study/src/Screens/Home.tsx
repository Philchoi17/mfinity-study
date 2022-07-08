import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

// pick off keys you want from class or object
const { get } = axios

const Home: React.FC = () => {
  const { navigate } = useNavigation<any>()

  // state variables
  const [randomUsers, setRandomUsers] = useState<any>([])

  const randomUserReq = async () => {
    const { data } = await get('https://randomuser.me/api?results=10')
    console.log('randomUserReq: data =', data)
    setRandomUsers(data.results)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title="MOVE" onPress={() => navigate('About')} />
        <Button title="MOVE" onPress={randomUserReq} />
      </View>
      {randomUsers.map((user: any, idx: number) => {
        return (
          <View
            style={{
              flexDirection: 'row',
            }}
            key={String(idx)}
          >
            <Image
              style={{
                height: 40,
                width: 40,
              }}
              source={{ uri: user.picture.thumbnail }}
            />
            <View>
              <Text>{user.name.first}</Text>
              <Text>{user.name.last}</Text>
              <Text>{user.email}</Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'hotpink',
    padding: 10,
  },
})

export default Home
