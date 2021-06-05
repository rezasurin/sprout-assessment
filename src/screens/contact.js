import React, {useEffect} from 'react'
import { StyleSheet, Dimensions, View, 
} from 'react-native'
import ContactBox from '../components/ContactBox'

import { fetchContact } from '../store/actions/getContact'
import { useDispatch, useSelector } from 'react-redux'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function HomePage () {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.data)
  
  useEffect(() => {
    dispatch(fetchContact())
  }, [])

  

  return (
    <View style={styles.container}>
      {/* {
        contacts.map(contact => (
          <ContactBox contact={contact}/>
        ))
      } */}
      <ContactBox contact={contacts}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'whitesmoke',
  },
})
