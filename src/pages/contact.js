import React, { useEffect, useState } from "react"
import Modal from 'react-modal';
import { useStaticQuery, graphql,Link } from "gatsby"
import Search from './search';

function ModalInFunctionalComponent (){
const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    
    return(
        <>
        
           <button onClick={setModalIsOpenToTrue}>Click to View My Favourite Animes</button>
           <Modal isOpen={modalIsOpen}>
                <Search/>
            </Modal>
        </>
    )
}

export default ModalInFunctionalComponent
