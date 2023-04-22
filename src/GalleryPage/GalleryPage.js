import { useState } from 'react'
import GalleryContainer from '../GalleryContainer/GalleryContainer'
import Filters from '../Filters/Filters'
import Button from '../GenericComponents/GenericButton/Button'

import './GalleryPage.css'
import GenericModal from '../GenericComponents/GenericModal/GenericModal'


function GalleryPage() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };


    return (

        <div className='gallerypage'>
            <div className='header'>
                <div className="textLineHeader"></div>
                <div className='titleblock'>
                    <div className='gp_h2'><h2>Gallery</h2></div>
                    <div className='filters-button'><Button onClick={handleOpenModal} title={'Filters'} >Filters</Button></div>
                </div>


                <div className="textLineMain"></div></div>


            {modalIsOpen && <GenericModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} title='Filters'  ><Filters className='modalfilters' /></GenericModal>}

            <div className='main'>


                <GalleryContainer />
                <Filters className='filters' />

            </div>


        </div>



    )

}
export default GalleryPage