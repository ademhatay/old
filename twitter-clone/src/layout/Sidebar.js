import React, { useState } from 'react';
import {
    BookmarkIcon,
    ExploreIcon,
    HomeIcon,
    ListIcon,
    MessagesIcon,
    MoreIcon,
    NotificationsIcon,
    ProfileIcon,
  } from "../icons/Icon";
import twitterLogo from '../images/twitter1080.gif';
import SideLink from '../components/SideLink';
import UserBox from '../components/UserBox';

const sideLinks = [
    {
        name: "Home",
        icon: HomeIcon,
    },
    {
        name: "Explore",
        icon: ExploreIcon,
    },
    {
        name: "Notifications",
        icon: NotificationsIcon,
    },
    {
        name: "Messages",
        icon: MessagesIcon,
    },
    {
        name: "Bookmark",
        icon: BookmarkIcon,
    },
    {
        name: "List",
        icon: ListIcon,
    },
    {
        name: "Profile",
        icon: ProfileIcon,
    },
    {
        name: "More",
        icon: MoreIcon,
    },
];


const Sidebar = () => {
    const [active, setActive] = useState('Home');

    const handleMenuItemClick = (name) => {
        setActive(name);
    }
    return (
        <div className="h-screen mt-1   ml-1 flex flex-col justify-between px-2 w-72 sticky top-0 bg-white">
            <div>
                <div className='flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-ligtest'>
                    <img width="70px" src={twitterLogo} alt="loading..." />
                </div>
                <nav className='mb-2'>
                    <ul>
                        {sideLinks.map(({ name, icon }) => (
                            <SideLink
                                key={name}
                                name={name}
                                Icon={icon}
                                active={active}
                                onMenuItemClick={handleMenuItemClick}
                            />
                        ))}
                    </ul>
                </nav>
                <button className='bg-primary-base text-white shadow-lg hover:bg-primary-dark rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200'>Tweet</button>
            </div>
            <UserBox />
        </div>
    )
}

export default Sidebar
