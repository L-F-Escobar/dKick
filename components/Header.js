import React, { Component } from 'react';
import { Menu, Image, Button } from 'semantic-ui-react';
import { Link, Router } from '../routes';
import { web3, getConnection, getMetamask } from '../ethereum/web3.js';


class Header extends Component {
    state = {

    };

    handleConnect = () => {
        // web3;
        getMetamask();
        getConnection();
        // Router.push('/campaigns/new')
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

                    <Link route="/" replace>
                        <a className="item">Home</a>
                    </Link>

                    { <Link route="/campaigns/new" replace>
                        <a className="item">+</a>
                    </Link> }

                    <Menu.Item>
                        <Button color="black" onClick={this.handleConnect}>Connect Metamask</Button>
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