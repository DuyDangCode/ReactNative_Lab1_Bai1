import { useState } from 'react'
import { SafeAreaView, Text, FlatList } from 'react-native'
import Card from './components/card'
import { CardProps } from './tyles/cardType'

export default function App() {
  const [isShowModel, setIsShowModel] = useState(false)
  const openModel = () => {
    setIsShowModel(true)
  }
  const data: Array<CardProps> = [
    {
      avatarSource: require('./assets/images/hong_1.jpg'),
      imageSource: require('./assets/images/hong_1.jpg'),
      content: 'Good morning',
      name: 'Traveler',
      numberOfLikes: 100,
      numberOfShares: 100,
      numberOfComments: 100,
      isLiked: false,
    },
    {
      avatarSource: require('./assets/images/hong_2.jpg'),
      imageSource: require('./assets/images/hong_2.jpg'),
      content: 'Good afternoon',
      name: 'Traveler',
      numberOfLikes: 100,
      numberOfShares: 100,
      numberOfComments: 100,
      isLiked: false,
    },
    {
      avatarSource: require('./assets/images/hong_3.jpg'),
      imageSource: require('./assets/images/hong_3.jpg'),
      content: 'Good everning',
      name: 'Traveler',
      numberOfLikes: 100,
      numberOfShares: 100,
      numberOfComments: 100,
      isLiked: false,
    },
  ]
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        marginTop: 50,
        backgroundColor: '#f1f3f5',
      }}
    >
      <Text
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#3598db',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
      >
        Social Media Feed
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            avatarSource={item.avatarSource}
            imageSource={item.imageSource}
            content={item.content}
            name={item.name}
            numberOfLikes={item.numberOfLikes}
            numberOfShares={item.numberOfShares}
            numberOfComments={item.numberOfComments}
            isLiked={item.isLiked}
          />
        )}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}
