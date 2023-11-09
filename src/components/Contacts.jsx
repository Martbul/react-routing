import {useEffect} from 'react'

export default function Contacts(){
    useEffect(() =>{
        console.log('mount or pudate');
       const timeOutId =  setTimeout(() =>{
        console.log('2 seconds');
        },2000)

        return () =>{
            console.log("on unmount");
            clearTimeout(timeOutId);
        }
    },[])
    return (

        <>
        <h2>Contact Page</h2>

        <input type="text" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
       <button>Submit</button>
        </>
        
    )
}