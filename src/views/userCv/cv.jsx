import React,{useState,useEffect} from 'react'
import {Grid,Box, Typography} from '@mui/material';
import  Profile from '../../assets/pic.jfif';
import ReadMore from '../components/shortener.jsx';
import '../../App.css';

const cv = () => {
    //addr must be  just 30 chars long
    const addr ="#1 Tondo Divisoria Market, Metro Manila NCR#1 Tondo Divisoria Market, Metro Manila NCR";
  return (
    <Grid container sx={{ minHeight: "100vh", width:"100vw", border:"1px solid black", overflowY:'auto',overflowX:'hidden' }}>
       <Box sx={{display:'flex',flexDirection:'column',gap:1}}>
        <Box sx={{backgroundColor:'#24457A', height:"10vh", width:"100vw",display:'flex',flexDirection:'column',gap:3}}></Box>
       {/* parent box ng upperbox */}
        <Box sx={{
                display:'flex',
                flexDirection:'row',
                gap:{ xs: 1, sm: 2, md: 4,lg:6,xl:8}, 
                padding:0,
                border:'1px solid black',
                width:'100vw',
                height:'31vh',
                justifyContent:'center',
                alignItems:'center',
                }}>
            {/* children boxes */}
            <Box
                component="img"
                src={Profile}
                sx={{
                    width: { xs: 140, sm: 150, md: 160,lg:170,xl:180},
                    height:{xs:110,sm:120,md:130,lg:140,xl:150},
                    objectFit: "cover",
                    borderRadius: "5px", 
                }}
            />
            <Box 
                sx={{
                    backgroundColor:'#D7E0EB',
                    borderRadius:2,
                    width:{ xs: 110, sm: 150, md: 250,lg:350,xl:500},
                    height:{ xs: 170, sm: 180, md: 190,lg:200,xl:210},
                    }}>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:2,
                }}>
                    <Typography variant="h1"sx={{fontSize:{ xs:12, sm:14, md:16, lg:18, xl:20}}}>Personal Details</Typography>
                    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',border:'1px solid black',}}>
                        <Box sx={{display:'flex',justifyContent:'start'}}>
                        <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},minWidth:80}}>Name:</Typography></Box>
                        <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20}}}>Miki Matsubara</Typography>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',border:'1px solid black'}}>
                        <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},minWidth:80,}}>Birthday:</Typography>
                        <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},border:'1px solid black'}}>December 14, 2002</Typography>
                    </Box>
                    <Box className="scrollableAddress" sx={{display:'flex',flexDirection:'row',alignItems:'center',border:'1px solid black',whiteSpace:'nowrap',transition:'all 0.3 ease',}}>
                        <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},minWidth:80}}>Address:</Typography>
                        <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},border:'1px solid black',whiteSpace:'nowrap',overflow:'auto',}}>#1 Tondo Divisoria Market, Metro Manila NCR#1 Tondo Divisoria Market, Metro Manila NCR</Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor:'#D7E0EB',
                    borderRadius:2,
                    width:{ xs: 100, sm: 150, md: 250,lg:350,xl:500},
                    height:{ xs: 170, sm: 180, md: 190,lg:200,xl:210}}}>
                <Typography variant="h1"sx={{fontSize:{ xs:12, sm:14, md:16, lg:18, xl:20}}}>Contact Details</Typography>
            </Box>
        </Box>

        {/*parent box for educ and roles */}
        <Box sx={{
                border:'1px solid black',
                flexDirection:'row',
                display:'flex',
                gap:{ xs: 1, sm: 2, md: 4,lg:6,xl:8},
                justifyContent:'center',
                alignItems:'center',
                width:'100vw',
                height:'30vh'}}>
            <Box sx={{
                //border:'1px solid black',
                width:{ xs: 100, sm: 150, md: 250,lg:400,xl:450},
                height: { xs: 150, sm: 160, md: 170,lg:180,xl:200},
                backgroundColor:'#D7E0EB',
                borderRadius:2,
            }}>
                <Typography variant="h1"sx={{fontSize:{ xs:12, sm:14, md:16, lg:18, xl:20}}}>Education</Typography>
            </Box>
            <Box
                sx={{
                    //border:'1px solid black',
                    width:{ xs: 450, sm: 550, md: 650,lg:750,xl:850},
                    height: { xs: 150, sm: 160, md: 170,lg:180,xl:200},
                    backgroundColor:'#D7E0EB',
                    borderRadius:2,
                }}>
                <Typography variant="h1"sx={{fontSize:{ xs:12, sm:14, md:16, lg:18, xl:20}}}>Roles & Responsibiliies During Capstone</Typography>
            </Box>
        </Box>

        {/* <Box  sx={{
                border:'1px solid black',
                flexDirection:'row',
                display:'flex',
                gap:{ xs: 1, sm: 2, md: 4,lg:6,xl:8},
                justifyContent:'center',
                alignItems:'center',
                width:'100vw',
                height:'30vh',}}>
            <Box sx={{
                //border:'1px solid black',
                width:{ xs: 100, sm: 150, md: 250,lg:350,xl:300},
                height: { xs: 150, sm: 160, md: 170,lg:180,xl:200},
                backgroundColor:'#D7E0EB',
                borderRadius:2,
            }}>
                <Typography variant='body'>Education</Typography>
                <Box sx={{overflowY:'auto',flex:1,mt:1,height:100}}>
                <Box>yes</Box>
                <Box>yes</Box>
                <Box>yes</Box>
                <Box>yes</Box>
                <Box>yes</Box>
                <Box>yes</Box>
                <Box>yes</Box>
                <Box>yes</Box>
                <Box>yes</Box>
                <Box>yes</Box>
                <Box>yes</Box>
                <Box>yes</Box>
                </Box>
            </Box>
            <Box
                sx={{
                    //border:'1px solid black',
                    width:{ xs: 100, sm: 150, md: 250,lg:350,xl:800},
                    height: { xs: 150, sm: 160, md: 170,lg:180,xl:200},
                    backgroundColor:'#D7E0EB',
                    borderRadius:2,
                }}>
                <Typography variant='body'>Role and Responsibilities</Typography>
            </Box>
        </Box> */}

        <Box sx={{
                border:'1px solid black', 
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'100vw',
                height:'45vh'
            }}>
            <Box sx={{
                border:'1px solid black', 
                backgroundColor:'#D7E0EB',
                borderRadius:2,
                display:'flex',
                justifyContent:'center',
                // alignItems:'center',
                width:{ xs: 450, sm: 550, md: 650,lg:750,xl:1360},
                height: { xs: 150, sm: 160, md: 170,lg:180,xl:300},
            }}>
                <Typography variant="h1"sx={{fontSize:{ xs:12, sm:14, md:16, lg:18, xl:20}}}>On-the-Job Experience</Typography>
            </Box>
        </Box>
        </Box>
    </Grid>
  )
}

export default cv
