import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import firebase from '../firebase';
import Signup from './Signup';

function App() {
    const [users, setUsers] = useState({})

    const ref = firebase.firestore().collection('users');
    console.log(users);
    useEffect(() => {
      ref.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setUsers(items)
      })

      

    },[])

    

   

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}}>

      <Signup />
      </div>

    </Container>
  )
}

export default App;
