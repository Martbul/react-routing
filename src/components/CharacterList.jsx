import { useState,useEffect } from "react"
import CharacterListItem from "../components/CharacterListItem"
import styles from "./CharacterList.module.css"
const baseUrl = "https://swapi.dev/api"

export default function CharacterList(){
    const[characters,setCharacters] = useState([])
    
    
    useEffect(()=>{
        const abortController = new AbortController()
        
        fetch(`${baseUrl}/people`,{signal:abortController.signal})
    .then(res => res.json())
    .then(data => {
        setCharacters(data.results)
    })

    return()=>{
        abortController.abort()
    }
},[])
    
    return(
        <div className={styles.characterList}>
            {characters.map((character,index) => 
            
               <CharacterListItem key={character.name} id={index+1} {...character} />
                
                
                )}
        </div>
    )
}