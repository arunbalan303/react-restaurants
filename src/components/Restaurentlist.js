import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurentlistAction } from '../actions/restaurantAction';
import { useDispatch,useSelector } from 'react-redux';



function Restaurentlist() {





  // const [allrestaurent,setAllrestaurent]=useState([])
       //function f
  //  const getrestarentdata=async()=>
  // {
    // await fetch('/restaurants.json')
    // .then(data=>{data.json().then(result=>{setAllrestaurent(result.restaurants)})})
  // }

  //  console.log(allrestaurent);



  const dispatch = useDispatch()
    const result=useSelector(state=>state.restaurentReducer)
   const {restaurantList}=result
useEffect(()=>{
  dispatch(RestaurentlistAction())
  // getrestarentdata()
},[])


  return (
    <Row>
      {
      restaurantList.map(item=>(
       <RestCard data={item}/>

      ))
      }

    </Row>
  )
    }

export default Restaurentlist