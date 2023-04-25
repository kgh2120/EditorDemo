import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import "./EditorPage.css"

export default function Detail(){

    const {id} = useParams();
    const navigate = useNavigate();
    const [content,setContent] = useState({
        id : "",
        content : ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/html/${id}`)
            .then(res => {
                console.log(res.data)
                setContent({
                    id : res.data.id,
                    content : res.data.contents
                })
                const viewer = new Editor.factory({
                    el: document.querySelector('#viewer'),
                    height: '500px',
                    initialEditType : 'wysiwyg',
                    initialValue : res.data.contents,
                    language : "ko-KR",
                    viewer : true
                });
            });

    },[])

    const moveToEditQuestion = () => {
        navigate(`/comment/update`,{
            state : {
                content : content.content,
                id : content.id
            }
        })
    }
    const deleteComment = () => {
        axios.delete(`http://localhost:8080/html/${id}`, ).then(r => {
            alert("지운다?");
            navigate(`/view/list`)
        }) .catch(err => {
            console.log(err);
        })
    }
    const moveToList = () => {
        navigate("/view/list")
    }

    return <>
    <div  className={"vv"}>
        <h2>내 문의 사항</h2>
        <div id={"viewer"} className={"view_box"}></div>
        <button className={"update_btn"} onClick={moveToEditQuestion}>수정하기</button>
        <button onClick={deleteComment}>누르면 지운다</button>
        <button onClick={moveToList}>목록 가즈아</button>
    </div>
    </>
}