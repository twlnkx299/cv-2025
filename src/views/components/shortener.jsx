import React,{useState} from 'react'
import {Grid,Box, Typography,Button} from '@mui/material';

const shortener = ({txt,lim}) => {
    const[showMore,setIsShowMore]=useState(false);

    const toggler =()=>{
        setIsShowMore(!showMore);
    }
    if(txt.length<=lim){
        setIsShowMore(!showMore);
    }
  return (
    <>
        <Typography>{showMore  ? txt : txt.substring(0,lim)}</Typography>
        <Button onClick={toggler}>{showMore ? "Read More" : "Read Less" }</Button>
    </>
  )
}

export default shortener
