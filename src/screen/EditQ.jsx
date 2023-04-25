import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Editor from "@toast-ui/editor";
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import axios from "axios";

export default function EditQ(){
    let location = useLocation();
    let editor;
    let navigate = useNavigate();
    useEffect(() => {
        console.log(location.state.content)
        editor = new Editor({
            el: document.querySelector('#editor'),
            height: '500px',
            initialEditType : 'wysiwyg',
            initialValue : location.state.content,
            language : "ko-KR",
        });
        console.log(editor)
    },[]);
    const updateComment = () => {
        console.log(editor)
        let html = editor.getHTML();
        console.log(html)
        axios.patch("http://localhost:8080/html", {
            id: location.state.id,
            content: html
        }).then(r => {
            alert("아따 성공했당께");
            navigate(`/view/${location.state.id}`)
        }) .catch(err => {
            console.log(err);
        })
    }


    return <>
        <div id={"editor"} className={"center-box"} ></div>
        <button onClick={updateComment}>수정해줘잉</button>

    </>
}