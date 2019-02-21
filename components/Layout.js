import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Head from 'next/head';
import { Container, Popup, Button, Image, Message } from 'semantic-ui-react';
import { Link } from '../routes';
import { web3 } from '../ethereum/web3.js'

export default (props) => {

    return(
        <div>
            
            <Header/>
            
            <Container style={{ marginTop: '100px' }}>

                <Head>                
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"/>
                    <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
                    <title>dKick</title>
                </Head> 

                {/* {props.missingMetaMask ? null : (
                    <div>
                        <h3 align="center">Metamask required! Website may not function as intended.</h3>
                        <Popup
                            // on="click"
                            // open={"false"}
                            header="Metamask"
                            size="small" 
                            content="Metamask is required to access the Ethereum network." 
                            trigger={
                                <div>
                                    <Link route="https://metamask.io/">
                                        <a href={"https://metamask.io/"} target="_blank">
                                            <Button onClick={web3} fluid negative content="Get metamask">
                                                <Image avatar src="../static/metamask.png"></Image>
                                                Get Metamask extension
                                            </Button>
                                        </a>
                                    </Link>
                                </div>
                            } 
                        >
                        </Popup>
                    </div>
                )}

                {props.signatureError ? null : (
                    <div>
                        <h3 align="center">Metamask connection required!</h3>
                        <Popup
                            header="Metamask Connection"
                            size="small" 
                            content="Metamask connection needed. " 
                            isOpen="false"
                            trigger={
                                <div>
                                    <Button fluid negative content="Metamask connection" >
                                        <Image avatar src="../static/metamask.png"></Image>
                                        Request Metamask connection
                                    </Button>
                                </div>
                            } 
                        >
                        </Popup>
                    </div>
                )}  */}

                {/* <div style={{ marginTop: '50px' }}></div>  */}
                

                {/* <h3>Am in Layout testing missingMetaMask --> {props.missingMetaMask.toString()}</h3>
                <h3>Am in Layout testing signatureError --> {props.signatureError.toString()}</h3> */}
                {props.children}

            </Container>

            <Footer/>
        </div>
    );
};