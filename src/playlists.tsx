import styles from './App.module.scss';
import { SFlex } from 'react-simple-ui-lib';
import { IoMusicalNotes } from 'react-icons/io5';
import { PiEyeBold } from 'react-icons/pi';
import { LuClock3 } from 'react-icons/lu';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { GoShareAndroid } from 'react-icons/go';
import { FiUpload } from 'react-icons/fi';
import { RxDotsVertical } from 'react-icons/rx';
import FooterPlayer from './footerPlayer.tsx';

const music_list = [
    {
        id: 1,
        playButton: <FaRegCirclePlay />,
        title: 'The Finishing',
        artist: "Ikako Music's",
        views: '200k',
        music_length: '2:43',
        icons1: <GoShareAndroid />,
        icons2: <FiUpload />,
        icons3: <RxDotsVertical />,
    },
    {
        id: 2,
        playButton: <FaRegCirclePlay />,
        title: 'Hello',
        artist: 'Adele',
        views: '200k',
        music_length: '2:43',
        icons1: <GoShareAndroid />,
        icons2: <FiUpload />,
        icons3: <RxDotsVertical />,
    },
    {
        id: 3,
        playButton: <FaRegCirclePlay />,
        title: 'And We Knew It',
        artist: 'We must earn love',
        views: '200k',
        music_length: '2:43',
        icons1: <GoShareAndroid />,
        icons2: <FiUpload />,
        icons3: <RxDotsVertical />,
    },
    {
        id: 4,
        playButton: <FaRegCirclePlay />,
        title: 'In The End',
        artist: 'Linkin Park',
        views: '200k',
        music_length: '2:43',
        icons1: <GoShareAndroid />,
        icons2: <FiUpload />,
        icons3: <RxDotsVertical />,
    },
    {
        id: 5,
        playButton: <FaRegCirclePlay />,
        title: 'Right Here Waiting For You',
        artist: 'Richard Marx',
        views: '200k',
        music_length: '2:43',
        icons1: <GoShareAndroid />,
        icons2: <FiUpload />,
        icons3: <RxDotsVertical />,
    },
];
export default function Playlists() {
    return (
        <SFlex width="100%" direction={'column'} className={styles.playList}>
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
                <SFlex className={styles.playListSection}>
                    <SFlex width={200} className={styles.buttonFont}>
                        {music.playButton}
                    </SFlex>
                    <SFlex width={200}>{music.artist}</SFlex>
                    <SFlex width={200}>{music.title}</SFlex>
                    <SFlex width={200}>{music.views}</SFlex>
                    <SFlex width={200}>{music.music_length}</SFlex>
                    <SFlex className={styles.allButtonFont} width={200}>
                        {music.icons1}
                    </SFlex>
                    <SFlex className={styles.allButtonFont} width={200}>
                        {music.icons2}
                    </SFlex>
                    <SFlex className={styles.allButtonFont} width={200}>
                        {music.icons3}
                    </SFlex>
                </SFlex>
            ))}
            {/*// Footer Player*/}
            <FooterPlayer />
        </SFlex>
    );
}
