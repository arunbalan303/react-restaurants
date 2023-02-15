import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image,Button } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';
import { useDispatch,useSelector } from 'react-redux';

function ViewRest() {
    const params = useParams()
    // // console.log(params.id);

    // const [allrestaurent, setAllrestaurent] = useState([])
    // //function f
    // const getrestarentdata = async () => {
    //     await fetch('/restaurants.json')
    //         .then(data => { data.json().then(result => { setAllrestaurent(result.restaurants) }) })
    // }

    //  console.log(allrestaurent);
    



    
    useEffect(() => { 
        // getrestarentdata() 
    }, [])
    const result=useSelector(state=>state.restaurentReducer)
   const {restaurantList}=result
   const restData = restaurantList.find(item=>item.id==params.id)

    return (
        <>
           {restData?(
            <Row>
                <Col>
                <Image className='p-5' src={restData.photograph} fluid/>
                </Col>
                <Col className='p-5'>
                <h1>{restData.name}</h1>
                <h4>{restData.neighborhood}</h4>
                <h5> Cuisine Type: {restData.cuisine_type}</h5>
                <h5>Address: {restData.address}</h5>
                <Operatingtime timedata={restData.operating_hours}></Operatingtime>
                <br></br>


                <Review  reviewData={restData.reviews}></Review>
                
                </Col>
        </Row>
    ):'null'}
    </>
    )
           }

export default ViewRest