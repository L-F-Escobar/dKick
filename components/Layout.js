import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';



export default (props) => {
    return(
        <div>
            <Header/>
            
            <Container style={{ marginTop: '100px' }}>
                <Head>                
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"/>
                    <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
                    {/* <style>{'body {background-color: white; }'}</style> */}
                    {/* <div style={body}></div> */}
                    <title>dKick</title>
                </Head>
                {props.children}
            </Container>

            <Footer/>
        </div>
    );
};