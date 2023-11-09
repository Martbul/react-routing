import { useEffect,useState, } from "react"
import {useParams,useLocation,useNavigate} from 'react-router-dom'
const baseUrl = "https://swapi.dev/api"

export default function CharacterDetails(){
    const {id} = useParams()
    const location = useLocation()
    const [character, setCharacter] = useState({})
   const navigate = useNavigate()
    console.log(location.pathname);

    useEffect(() =>{
        fetch(`${baseUrl}/people/${id}`)
        .then(res => {
            if(!res.ok){
                throw new Error('Not Found')
            }
            return res.json()
        })
        .then(setCharacter)
        .catch((err) => {
            navigate('/404')
        })
    },[id])
     return(
        <>
            <h1>{character.name}</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam similique, tempora magnam eius nemo nesciunt ratione repellendus impedit aliquam laudantium, ipsum, reprehenderit tenetur harum dicta quos magni. Alias aspernatur, non voluptate ea corporis architecto veniam amet optio qui nobis! Provident maiores cum alias, quam sequi eos placeat nihil sapiente reprehenderit hic laboriosam libero voluptatum doloribus molestias. Quisquam autem fuga sunt aspernatur in hic recusandae quis incidunt sequi fugit, aliquid accusamus? Ullam qui veritatis omnis commodi beatae quae obcaecati totam! Vitae ratione aliquid, reprehenderit cupiditate, saepe deleniti recusandae debitis totam illo illum sunt officiis magnam in dolorem neque voluptatum iste?</p>
        </>
     )
}