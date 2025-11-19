import React,{useState,useEffect} from 'react'
import {Grid,Box, Typography,Link} from '@mui/material';
import  Profile from '../../assets/pic.jfif';
import '../../App.css';
import Wordpress from '../../assets/cvpic/wordpress.png';
import Ts from '../../assets/cvpic/ts.png';
import Trello from '../../assets/cvpic/trello.png';
import Sql from '../../assets/cvpic/sql.png';
import Mern from '../../assets/cvpic/mern.png';
import Laravel from '../../assets/cvpic/laravel.png';
import Jsreact from '../../assets/cvpic/js&react.jpg';
import Joom from '../../assets/cvpic/joomlah.png';
import Jira from '../../assets/cvpic/jira.png';
import Html from '../../assets/cvpic/html.png';
import Github from '../../assets/cvpic/github.png';
import Git from '../../assets/cvpic/Git.png';
import Figma from '../../assets/cvpic/Figma.png';
import Electron from '../../assets/cvpic/electron.png';
import Css from '../../assets/cvpic/css2.png';
import Cicd from '../../assets/cvpic/cicdd.png';
import C from '../../assets/cvpic/c++.png';

const cv = () => {
    
    //addr must be  just 30 chars long
    const addr ="#1 Tondo Divisoria Market, Metro Manila NCR#1 Tondo Divisoria Market, Metro Manila NCR";
    const skillsimg = [Git,Github,Css,Html,Jsreact,Ts,Sql,Wordpress,Joom,Laravel,Trello,Jira,Figma,Electron,Cicd,Mern,C];
  return (
    <Grid container sx={{ minHeight: "100vh", width:"100vw",overflowY:'auto',overflowX:'hidden'}}>
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
                p:2
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
                    border:'1px solid black',
                    p:1,
                    }}>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:3,
                }}>
                    <Typography variant="h1"
                        sx={{fontSize:{ xs:12, sm:14, md:16, lg:18, xl:20},border:'1px solid black'}}>Personal Details</Typography>
                    
                    {/* name box */}
                    <Box className="scrollableAddress" sx={{display:'flex',flexDirection:'row',alignItems:'center',overflow:'auto'}}>
                        <Box>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},minWidth:50,textAlign:'right'}}>Name:</Typography>
                        </Box>
                        <Box sx={{
                                // border:'1px solid black', 
                                width:{ xs:6, sm:9, md:16, lg:18, xl:20},
                                height:{ xs:6, sm:9, md:16, lg:18, xl:20},
                                flexShrink:0
                                }}>
                        </Box>
                        <Typography variant="h1" 
                            sx={{
                                fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},
                                whiteSpace:'nowrap'}}>MikikokiMatsubaramikikortbhrttyunjydj
                        </Typography>
                    </Box>

                    {/* birthday box */}
                    <Box className="scrollableAddress" sx={{display:'flex',flexDirection:'row',alignItems:'center',whiteSpace:'nowrap',overflow:'auto',whitespace:'nowrap',overflowX:'auto'}}>
                        <Box>
                            <Typography variant="h1" sx={{
                                fontSize:{ xs:6, sm:9, md:16, lg:18,    xl:20},
                                minWidth:50,textAlign:'right'}}>
                                Birthdate:
                            </Typography>
                        </Box>
                        <Box sx={{
                            // border:'1px solid black', 
                            width:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            height:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            flexShrink:0}}>
                        </Box>
                        <Typography variant="h1" sx={{
                            fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            }}>
                                December 14, 2002
                        </Typography>
                    </Box>

                    {/* addr box */}
                    <Box className="scrollableAddress" sx={{display:'flex',flexDirection:'row',alignItems:'center',whiteSpace:'nowrap',transition:'all 0.3 ease',overflow:'auto'}}>
                        <Box>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},minWidth:80,textAlign:'right'}}>Address Address:</Typography>
                        </Box>
                        <Box sx={{
                            //border:'1px solid black', 
                            width:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            height:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            flexShrink:0}}>
                        </Box>
                        <Typography variant="h1" sx={{
                            fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            order:'1px solid black',
                            whiteSpace:'nowrap',
                            }}>
                                #1 Tondo Divisoria Market, Metro Manila NCR#1 Tondo Divisoria Market, Metro Manila NCR
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box 
                sx={{
                    backgroundColor:'#D7E0EB',
                    borderRadius:2,
                    width:{ xs: 110, sm: 150, md: 250,lg:350,xl:500},
                    height:{ xs: 170, sm: 180, md: 190,lg:200,xl:210},
                    p:1
                    }}>
                    <Box sx={{display:'flex',flexDirection:'column',gap:3,}}>
                    <Typography variant="h1"sx={{fontSize:{ xs:12, sm:14, md:16, lg:18, xl:20}}}>Contact Details</Typography>
                    
                    {/* gmail box */}
                    <Box className="scrollableAddress" sx={{display:'flex',flexDirection:'row',alignItems:'center',whiteSpace:'nowrap',overflow:'auto'}}>
                        <Box>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},minWidth:50,textAlign:'right'}}>Name:</Typography>
                        </Box>
                        <Box sx={{
                                width:{ xs:6, sm:9, md:16, lg:18, xl:20},
                                height:{ xs:6, sm:9, md:16, lg:18, xl:20},
                                flexShrink:0
                                }}>
                        </Box>
                        <Typography variant="h1" 
                            sx={{
                                fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},
                                whiteSpace:'nowrap'}}>sample@gmail.comdgbvfgg
                        </Typography>
                    </Box>

                    {/* number box */}
                    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <Typography variant="h1" sx={{
                            fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            minWidth:50,
                            textAlign:'right'}}>
                                Number:
                        </Typography>
                        <Box sx={{
                            width:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            height:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            flexShrink:0}}>
                        </Box>
                        <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20}}}>+639877621264</Typography>
                    </Box>
                    {/* personal acct box */}
                    <Box className="scrollableAddress" sx={{display:'flex',flexDirection:'row',alignItems:'center',transition:'all 0.3 ease',whiteSpace:'nowrap',overflow:'auto'}}>
                        <Box><Typography variant="h1" sx={{
                            fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            minWidth:80,
                            textAlign:'right',}}>
                                Personal Account:
                        </Typography></Box>
                        <Box sx={{ 
                            width:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            height:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            flexShrink:0}}>
                        </Box>
                        <Typography variant="h1" sx={{
                            fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},
                            whiteSpace:'nowrap',
                            }}>
                                <Link href="#">https://www.facebook.com/facebook</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>

        {/* skills pics */}
        <Box 
            sx={{
                border:'1px solid black',
                width:'100vw',
                height:'10vh',
                justifyContent:'center',
                alignItems:'center',
                display:'flex',
                // backgroundColor:'#F0F4F8',
            }}>
            <Box 
                sx={{
                    //border:'1px soplid black',
                    width:'90vw',
                    height:'10vh',
                    backgroundColor:'#D7E0EB',
                    borderRadius:2,
                }}
                className="scroller"
                >
                <Box 
                    sx={{
                        
                        display:'flex',
                        flexDirection:'row',
                        gap:{ xs: 1, sm: 2, md: 4,lg:6,xl:4},
                        //border:'1px solid black',
                    }}
                    className="scrollerTrack"
                    >
                    {skillsimg.map(pic => <img src={pic} />) }
                </Box>
            </Box>
        </Box>

        {/*parent box for educ and roles */}
            <Box 
            sx={{
                border:'1px solid black',
                flexDirection:'row',
                display:'flex',
                gap:{ xs: 1, sm: 2, md: 4,lg:6,xl:8},
                justifyContent:'center',
                alignItems:'center',
                width:'100vw',
                height:'30vh',
                p:2}}>

            {/* education box */}
            <Box 
                className="scrollableAddress"
                sx={{
                    border:'1px solid black',
                    width:{ xs: 100, sm: 150, md: 250,lg:400,xl:450},
                    height: { xs: 150, sm: 160, md: 170,lg:180,xl:200},
                    backgroundColor:'#D7E0EB',
                    borderRadius:2,
                    overflowY:'auto',
                    overflowX:'hidden'
            }}>
                    {/* school box */}    
                    <Box sx={{
                        display:'flex',
                        border:'1px  solid black',
                        width:{ xs:6, sm:9, md:16, lg:18, xl:432},
                        height:'auto',
                        p:1,
                        flexDirection:'column',
                        gap:0.5 ,
                    }}>
                        <Typography variant="h1"sx={{fontSize:{ xs:12, sm:14, md:16, lg:18, xl:20},fontWeight:'bold'}}>Education</Typography>
                        <Box>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},textAlign:'left',border:'1px solid black',}}>Bachelor of Science in Information Technology</Typography>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},textAlign:'center',border:'1px solid black'}}>Tertiary Education | 2021 - 2025</Typography>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},textAlign:'center',border:'1px solid black',}}>TUP - Taguig Campus</Typography>
                        </Box>

                        <Box>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},textAlign:'left',border:'1px solid black',}}>Bachelor of Science in Information Technology</Typography>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},textAlign:'center',border:'1px solid black'}}>Tertiary Education | 2021 - 2025</Typography>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},textAlign:'center',border:'1px solid black',}}>TUP - Taguig Campus</Typography>
                        </Box>

                        <Box>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},textAlign:'left',border:'1px solid black',}}>Bachelor of Science in Information Technology</Typography>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},textAlign:'center',border:'1px solid black'}}>Tertiary Education | 2021 - 2025</Typography>
                            <Typography variant="h1" sx={{fontSize:{ xs:6, sm:9, md:16, lg:18, xl:20},textAlign:'center',border:'1px solid black',}}>TUP - Taguig Campus</Typography>
                        </Box>
                    </Box>
            </Box>

            {/* roles box*/}
            <Box
                sx={{
                        border:'1px solid black',
                    width:{ xs: 450, sm: 550, md: 650,lg:750,xl:850},
                    height: { xs: 150, sm: 160, md: 170,lg:180,xl:200},
                    backgroundColor:'#D7E0EB',
                    borderRadius:2,
                    overflowY:'auto',
                    overflowX:'hidden'
            }}>
                <Box 
                    sx={{
                        display:'flex',
                        border:'1px  solid black',
                        width:{ xs:6, sm:9, md:16, lg:18, xl:432},
                        height:'auto',
                        p:1,
                        flexDirection:'column',
                        gap:0.5 ,
                }}>
                    <Typography variant="h1"sx={{fontSize:{ xs:12, sm:14, md:16, lg:18, xl:20}}}>Roles & Responsibiliies During Capstone</Typography>
                    
                </Box>
            </Box>
        </Box>

        <Box 
            sx={{
                border:'1px solid black', 
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'100vw',
                height:'45vh'
            }}>
            <Box 
                sx={{
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
