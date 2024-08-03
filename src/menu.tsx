import { FaLongArrowAltLeft } from 'react-icons/fa';
import styles from './App.module.scss';
import { SButton, SFlex } from 'react-simple-ui-lib';
import { RiHomeLine } from 'react-icons/ri';
import { MdLogout, MdOutlinePlaylistAdd, MdOutlineSubscriptions, MdPlaylistPlay, MdSettings } from 'react-icons/md';
import { IoMusicalNotes } from 'react-icons/io5';
import { BiSolidPlaylist } from 'react-icons/bi';
import { GiKiwiFruit } from 'react-icons/gi';

export default function Menu() {
    return (
        <SFlex direction={'column'} padding={20} paddingTop={60} style={{ minHeight: '100vh' }} width={250} gap={20}>
            <SButton>
                <FaLongArrowAltLeft /> Menu
            </SButton>
            <SFlex>
                <RiHomeLine className={styles.allButtonFont} /> Home
            </SFlex>
            <SFlex>
                <MdPlaylistPlay className={styles.allButtonFont} /> Recently Played
            </SFlex>
            <SFlex>
                <IoMusicalNotes className={styles.allButtonFont} /> Collections
            </SFlex>
            <SFlex>
                <BiSolidPlaylist className={styles.allButtonFont} /> Playlists
            </SFlex>
            <SFlex>
                <MdOutlineSubscriptions className={styles.allButtonFont} /> Subscription
            </SFlex>
            <SFlex>
                <MdOutlinePlaylistAdd className={styles.allButtonFont} /> Create Playlist
            </SFlex>
            <SFlex>
                <GiKiwiFruit className={styles.allButtonFont} /> My Fruits
            </SFlex>
            <br />
            <br />
            <SFlex>My Playlist #1</SFlex>
            <SFlex>Christmas Track</SFlex>
            <SFlex>Other Remix</SFlex>
            <SFlex>Release Radar</SFlex>
            <br />
            <br />
            <SFlex>
                <MdSettings className={styles.allButtonFont} /> Settings
            </SFlex>
            <SFlex>
                <MdLogout className={styles.allButtonFont} /> Log Out
            </SFlex>
        </SFlex>
    );
}
