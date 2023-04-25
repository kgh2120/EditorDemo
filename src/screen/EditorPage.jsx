import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import {useEffect, useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function EditorPage(){
    let editor;
    let navigate = useNavigate();
    useEffect(()=>{
       editor = new Editor({
            el: document.querySelector('#editor'),
            previewStyle: 'vertical',
            height: '500px',
            initialEditType : 'wysiwyg',
            initialValue : ' ',
            language : "ko-KR",

        });
       editor.removeToolbarItem("image")
    },[])

    const onClicked = () => {
        let html = editor.getHTML();
        console.log(html)
        axios.post("http://localhost:8080/html",{
            html
        }).then(res => {
            alert("success!")
            navigate("/view/list")
        })
    }

    return <>

            <div id={"editor"} className={"center-box"} ></div>
        <button onClick={onClicked}>전송</button>

    </>
}