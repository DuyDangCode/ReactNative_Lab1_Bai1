import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import imageStyle from '../styles/imageStyle'
import textStyle from '../styles/textStyle'
import { CardProps } from '../tyles/cardType'
import { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import viewStyles from '@/styles/viewStyles'

export default function Card({
  avatarSource,
  name,
  imageSource,
  content,
  numberOfComments,
  numberOfShares,
  numberOfLikes,
  isLiked,
}: CardProps) {
  const [isLikedState, setIsLikedState] = useState<boolean>(isLiked)
  const [numberOfLikesState, setNumberOfLikesState] =
    useState<number>(numberOfLikes)
  const [numberOfCommentsState, setNumberofCommentsState] =
    useState<number>(numberOfComments)
  const [numberOfSharesState, setNumberOfSharesState] =
    useState<number>(numberOfShares)
  const changeValue = (cb: Function, extraValue = 1) => {
    cb((prev: number) => prev + extraValue)
  }

  const changeNumberOfComments = () => {
    changeValue(setNumberofCommentsState)
  }

  const changeNumberOfShares = () => {
    changeValue(setNumberOfSharesState)
  }

  const changeNumberOfLikes = () => {
    setIsLikedState((prev: boolean) => {
      changeValue(setNumberOfLikesState, prev ? -1 : 1)
      return !prev
    })
  }
  return (
    <View
      style={{
        backgroundColor: 'white',
        margin: 15,
        padding: 10,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        borderRadius: 10,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginBottom: 15,
        }}
      >
        <Image style={[imageStyle.roundedImage]} source={avatarSource} />
        <Text style={{ fontWeight: 'bold' }}>{name}</Text>
      </View>

      <Text style={{ marginBottom: 10 }}>{content}</Text>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Image source={imageSource} />
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',

          marginBottom: 10,
        }}
      >
        <Text style={textStyle.detailPost}>{numberOfLikesState} Likes</Text>
        <Text style={textStyle.detailPost}>
          {numberOfCommentsState} Comments
        </Text>
        <Text style={textStyle.detailPost}>{numberOfSharesState} Shares</Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: 'gray',
          marginBottom: 10,
          opacity: 10,
        }}
      ></View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={changeNumberOfLikes}>
          <View style={viewStyles.cardButton}>
            <AntDesign
              name='like2'
              size={20}
              color={isLikedState ? 'blue' : 'black'}
            />
            <Text
              style={{
                color: isLikedState ? 'blue' : 'black',
              }}
            >
              Likes
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeNumberOfComments}>
          <View style={viewStyles.cardButton}>
            <FontAwesome6 name='commenting' size={20} color='black' />
            <Text>Comments</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeNumberOfShares}>
          <View style={viewStyles.cardButton}>
            <FontAwesome5 name='share-square' size={20} color='black' />
            <Text>Shares</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
