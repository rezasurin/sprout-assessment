import React, {useState} from 'react'
import { StyleSheet, Dimensions, View, TouchableOpacity,
  Text, Image, Pressable, FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function ContactBox ({ contact }) {
  const [touched, setIsTouched] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState(null)

  const onTouch = (contact) => {
    setSelectededIdx(contact.id)
    if (contact.id === selectedIdx) {
      setIsTouched()
    }
  }
  
  const renderItem = ({item}) => {
    
    return (
      <View style={styles.contactBox}>
        <View>
            <Image style={styles.imgContainer} source={{uri: item.avatar}} />
        </View>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row',alignItems: 'center', zIndex: -1, width: '100%', height:116, backgroundColor: item.id === selectedIdx ? 'violet' : null}}
        onPress={() => setSelectedIdx(item.id)}
        >
          <View style={styles.contactName}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>{item.first_name} {item.last_name}</Text>
            <Text style={{fontSize: 14, fontWeight: '400'}}>Apple Inc</Text>
          </View>
        </TouchableOpacity>
        {
          item.id === selectedIdx ?
          <View style={styles.iconContainer}>
            <Pressable
            style={({pressed}) => [{
              backgroundColor: pressed ? 'black' : 'violet',
            }]}
            >
              <Icon name="phone" size={30} color="white" />
            </Pressable>
            <Pressable
            style={({pressed}) => [{
              backgroundColor: pressed ? 'black' : 'violet'
            }]}
            >
              <Icon name="comment-outline" size={30} color="white" />
            </Pressable>
          </View>
          :
          <View style={{width: 20, marginHorizontal: 2, position: 'absolute', zIndex: 2, left: width - 30}}>
            <Icon name="circle" size={10} color={"green"} />
          </View>

        }
      </View>
    )
  }



  return (
    <View style={styles.container}>
      <FlatList
      data={contact}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedIdx}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'whitesmoke',
  },
  contactBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contactName: {
    marginLeft: 30
  },
  imgContainer: {
    width: 116,
    height: 116,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-around',
    position: 'absolute',
    left: width - 88
  }
})
