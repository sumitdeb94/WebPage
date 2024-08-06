import styles from '../App.module.scss';
import { SFlex } from 'react-simple-ui-lib';
import { IoMusicalNotes } from 'react-icons/io5';
import { PiEyeBold } from 'react-icons/pi';
import { LuClock3 } from 'react-icons/lu';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { GoShareAndroid } from 'react-icons/go';
import { FiUpload } from 'react-icons/fi';
import { RxDotsVertical } from 'react-icons/rx';
import FooterPlayer from '../footer-player/footer-player.tsx';
import { useState } from 'react';

const music_list = [
    {
        id: 1,
        playButton: <FaRegCirclePlay />,
        title: 'The Finishing',
        artist: "Ikako Music's",
        views: '200k',
        music_length: '2:43',
        icon1: <GoShareAndroid />,
        icon2: <FiUpload />,
        icon3: <RxDotsVertical />,
        url: 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
    },
    {
        id: 2,
        playButton: <FaRegCirclePlay />,
        title: 'Hello',
        artist: 'Adele',
        views: '200k',
        music_length: '2:43',
        icon1: <GoShareAndroid />,
        icon2: <FiUpload />,
        icon3: <RxDotsVertical />,
        url: 'https://',
    },
    {
        id: 3,
        playButton: <FaRegCirclePlay />,
        title: 'And We Knew It',
        artist: 'We must earn love',
        views: '200k',
        music_length: '2:43',
        icon1: <GoShareAndroid />,
        icon2: <FiUpload />,
        icon3: <RxDotsVertical />,
        url: 'https://',
    },
    {
        id: 4,
        playButton: <FaRegCirclePlay />,
        title: 'In The End',
        artist: 'Linkin Park',
        views: '200k',
        music_length: '2:43',
        icon1: <GoShareAndroid />,
        icon2: <FiUpload />,
        icon3: <RxDotsVertical />,
        url: 'https://',
    },
    {
        id: 5,
        playButton: <FaRegCirclePlay />,
        title: 'Right Here Waiting For You',
        artist: 'Richard Marx',
        views: '200k',
        music_length: '2:43',
        icon1: <GoShareAndroid />,
        icon2: <FiUpload />,
        icon3: <RxDotsVertical />,
        url: 'https://',
    },
];
export default function Playlists() {
    const [current_song, set_current_song] = useState(music_list[0]);

    return (
        <SFlex width="100%" direction={'column'} className={styles.playList}>
            {/*<h1>{current_song.title}</h1>*/}
            <SFlex>
                <SFlex width={300}>
                    <b>#TITLE</b>
                </SFlex>
                <SFlex width={95}>
                    <IoMusicalNotes className={styles.allButtonFont} />
                </SFlex>
                <SFlex width={120}>
                    <PiEyeBold className={styles.allButtonFont} />
                </SFlex>
                <SFlex width={200}>
                    <LuClock3 className={styles.allButtonFont} />
                </SFlex>
            </SFlex>
            {music_list.map((music) => (
                <SFlex
                    className={styles.playListSection}
                    onClick={() => {
                        set_current_song(music);
                    }}>
                    <SFlex width={200} className={styles.buttonFont}>
                        {music.playButton}
                    </SFlex>
                    <SFlex width={200}>{music.artist}</SFlex>
                    <SFlex width={200}>{music.title}</SFlex>
                    <SFlex width={200}>{music.views}</SFlex>
                    <SFlex width={200}>{music.music_length}</SFlex>
                    <SFlex className={styles.allButtonFont} width={200}>
                        {music.icon1}
                    </SFlex>
                    <SFlex className={styles.allButtonFont} width={200}>
                        {music.icon2}
                    </SFlex>
                    <SFlex className={styles.allButtonFont} width={200}>
                        {music.icon3}
                    </SFlex>
                </SFlex>
            ))}
            {/*// Footer Player*/}
            <FooterPlayer c_music={current_song} />
        </SFlex>
    );
}
