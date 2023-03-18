import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { ImageContainer } from "./styles";

const apiImg = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ title, poster_path, release_date, overview, vote_average}: {title: string; poster_path: string; release_date: string; overview: string; vote_average: number}) => {

const [show, setShow] = useState(false);

const handleShow = () => setShow(true);
const handleClose = () => setShow(false);

    return (
        <>
                
                <ImageContainer>
                <Card.Img style={{ width: '18rem', padding: '1rem' }} variant="top" src={apiImg + poster_path} alt={`Poster for ${title}`} onClick={handleShow} />
                </ImageContainer>
        
                

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card.Img variant="top" style={{width: "14rem"}} src={apiImg + poster_path} alt={`Poster for ${title}`} />
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>Release date: {release_date}</Card.Text>
                        <Card.Text>{overview}</Card.Text>
                    </Modal.Body>
                    <Modal.Footer>
                        <Card.Text>Rating: {Math.floor(vote_average)}/10</Card.Text>
                    </Modal.Footer>
                    
                </Modal>

        </>

        
    )
}

export default MovieCard;