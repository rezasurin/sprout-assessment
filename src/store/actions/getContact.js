export function setContact (payload) {
  return {
    type: 'contact/setContact',
    payload
  }
}

export function fetchContact () {
  return (dispatch, getState) => {
    fetch(`https://reqres.in/api/users?per_page=12`)
    .then(res => res.json())
    .then((contact) => {
      dispatch(setContact(contact.data))
    })
    .catch(err => console.log(err))
  }
}