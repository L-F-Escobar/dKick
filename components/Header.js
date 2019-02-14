import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from '../routes';


export default () => {
    return(
        <Menu fixed='top' inverted>
            <Menu.Item as="a" header>
                <Link route="/" as="a">
                    {/* <a> */}
                        <div>
                            <Image alt=" " avatar size="mini" src='../static/dPen.png' style={{ marginRight: '20px' }}></Image>
                            <span>Decentralized Kickstarter</span>
                        </div>
                    {/* </a> */}
                </Link>
            </Menu.Item>

            <Menu.Menu position="right">

                <Link route="/">
                    <a className="item">Home</a>
                </Link>

                <Link route="/campaigns/new">
                    <a className="item">+</a>
                </Link>

            </Menu.Menu>
        </Menu>
    );  
};