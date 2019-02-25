import React, { Component } from 'react';
import { Menu, Image, Button } from 'semantic-ui-react';
import { Link, Router } from '../routes';

let web3
class Header extends Component {
    state = {

    };

    handleConnect = () => {

    };

    render() {
        return(
            <Menu fixed='top' inverted>
                <Menu.Item as="a" header>
                    {/* <Link route="/" as="a"> */}
                        {/* <a> */}
                            <div>
                                <Image alt=" " avatar size="mini" src='../static/dPen.png' style={{ marginRight: '20px' }}></Image>
                                <b>Decentralized Kickstarter</b>
                            </div>
                        {/* </a> */}
                    {/* </Link> */}
                </Menu.Item>

                <Menu.Menu position="right">

                    {/* <Menu.Item> */}
                        <Link route="/">
                            <a className="item">Home</a>
                        </Link>
                    {/* </Menu.Item> */}

                    {/* <Menu.Item> */}
                        { <Link route="/campaigns/new" replace>
                            <a className="item">+</a>
                        </Link> }
                     {/* </Menu.Item> */}
                    
                    {/* <Menu.Item as="a" onClick={() => Router.push('/campaigns/new')}>+
                         <Button color="black" onClick={() => Router.push('/campaigns/new')}>+</Button> 
                    </Menu.Item> */}

                    <Menu.Item>
                        <Button color="black" onClick={() => Router.push('/campaigns/new')}>Connect Metamask</Button>
                    </Menu.Item>

                </Menu.Menu>
            </Menu>
        );
    }
}
export default Header;



// export default () => {
//     return(
//         <Menu fixed='top' inverted>
//             <Menu.Item as="a" header>
//                 <Link route="/" as="a">
//                     <a>
//                         <div>
//                             <Image alt=" " avatar size="mini" src='../static/dPen.png' style={{ marginRight: '20px' }}></Image>
//                             <b>Decentralized Kickstarter</b>
//                         </div>
//                     </a>
//                 </Link>
//             </Menu.Item>

//             <Menu.Menu position="right">

//                 <Link route="/">
//                     <a className="item">Home</a>
//                 </Link>

//                 <Link route="/campaigns/new">
//                     <a className="item">+</a>
//                 </Link>

//             </Menu.Menu>
//         </Menu>
//     );  
// };