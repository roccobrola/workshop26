import {useState, useEffect} from 'react';

export default function SelectedContact ({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);
    useEffect(()=>{
        async function fetchContact (){
          try {
            // fetch logic here;
            const response = await fetch (
              `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            );
            const result = await response.json();
            setContact(result);
          }catch(error) {
            console.error(error);
        }
        fetchContact()}
       },[]);
       console.log("Contact:", contact);
}
