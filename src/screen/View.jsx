import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function View(){
    const [data,setData] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8080/html`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.error(err));

    },[])
    const moveToPage = (id) => {
        navigate(`/view/${id}`)
    }
    const moveToAdd = () => {
        navigate(`/edit`)
    }
    return <>
        <h2>Hi</h2>
        <button onClick={moveToAdd}>글 쓰기</button>
        <ul>
        {
            data.map(d => {
               return <li onClick={() => moveToPage(d.id)}><div>
                    {d.id}
                </div><div>제목제목{d.id}</div></li>
            })
        }
        </ul>

    </>
}