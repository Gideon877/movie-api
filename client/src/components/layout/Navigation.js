import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from 'context/auth-context';
import { NavLink } from 'react-router-dom';
import { Icon, Menu, Label } from 'semantic-ui-react'

const _ = require('lodash');

const styles = {
    link: {
        color: 'blue'
    }
}


const Navigation = (props) => {
    const [activeItem, setActiveItem] = useState('home')
    const handleItemClick = (e, { name }) => setActiveItem(name);
    const user = props.currentUser || null;

    const [] = useState(true)

    const mediaCount = (user && user.createdMovies) ? _.size(user.createdMovies) : 0
    return <AuthContext.Consumer>
        {(context) => (
            <>
                <NavLink style={styles.link} to='/home'>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={handleItemClick}
                    ><Icon name='home' /> Home
                </Menu.Item>
                </NavLink>
                <NavLink style={styles.link} to='/media'>
                    <Menu.Item
                        name='film'
                        active={activeItem === 'film'}
                        onClick={handleItemClick}
                    ><Icon name='film' /> Media
                    <Label color='teal' size='small' circular floating>{mediaCount}</Label>
                        {/**<Label color='teal' size='mini' corner='right' floating>3</Label> */}
                    </Menu.Item>
                </NavLink>

                <Menu.Menu position='right'>
                    <NavLink style={styles.link} to='/account'>
                        <Menu.Item
                            name='user'
                            active={activeItem === 'user'}
                            onClick={handleItemClick}
                        ><Icon color='green' name='user' /> {user.username}
                        </Menu.Item>
                    </NavLink>
                    <Menu.Item
                        name='sign-out'
                        onClick={context.logout}
                    ><Icon name='sign-out' /> Logout
                    </Menu.Item>
                </Menu.Menu>
            </>

        )}
    </AuthContext.Consumer>
}
Navigation.propTypes = {
    title: PropTypes.string
}

export default Navigation;


