import React from "react";
import ReactModal from 'react-modal';
import Form from '../components/Form'
import { useSelector } from "react-redux";
import { useParams} from "react-router-dom";
const MyModal = ({ isOpen, onSubmit, onCancel }) => {
    
    const handleClickSubmit = () => {
      onSubmit();
    };

    const handleClickCancel = () => {
      onCancel();
    };

    const data = useSelector((state) => state.form);
    const { id } = useParams();
    const post = data.find((post)=> {return String(post.id)=== id;})


    return (
      <ReactModal isOpen={isOpen}>
        <div>모달 입니다.</div>
        Id: {post.id}
        
        <Form/>

        <div>
          <button onClick={handleClickSubmit}>확인</button>
          <button onClick={handleClickCancel}>취소</button>
        </div>
      </ReactModal>
    );
  
};
export default MyModal;