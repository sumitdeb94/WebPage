import styles from './App.module.scss';
// import firstImage from './free-images-for-blogs.jpg';
import { useState } from 'react';
import { SButton, SFlex, SImage, SPageSection } from 'react-simple-ui-lib';
import { FaArrowCircleLeft, FaSearch, FaUser } from 'react-icons/fa';
import { RiHomeLine } from 'react-icons/ri';
import { MdOutlinePlaylistAdd, MdPlaylistPlay, MdOutlineSubscriptions, MdLogout, MdSettings } from 'react-icons/md';
import { BiSolidPlaylist } from 'react-icons/bi';
import { GiKiwiFruit } from 'react-icons/gi';
import { IoMusicalNotes } from 'react-icons/io5';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { PiEyeBold } from 'react-icons/pi';
import { LuClock3 } from 'react-icons/lu';

function App() {
    const [posts, set_posts] = useState([]);

    // useEffect(() => {
    //     loadPosts().then()
    // }, []);
    //
    // const loadPosts = async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    //     const json = await res.json()
    //     set_posts(json)
    // }

    return (
        // grandParent container
        <SFlex width={'100%'} style={{ background: 'grey' }}>
            {/*Menu collections*/}
            <SFlex direction={'column'} padding={20} paddingTop={60} style={{ minHeight: '100vh' }} width={250} gap={20}>
                <SButton>
                    <FaLongArrowAltLeft /> Menu
                </SButton>
                <SFlex>
                    <RiHomeLine /> Home
                </SFlex>
                <SFlex>
                    <MdPlaylistPlay /> Recently Played
                </SFlex>
                <SFlex>
                    <IoMusicalNotes /> Collections
                </SFlex>
                <SFlex>
                    <BiSolidPlaylist /> Playlists
                </SFlex>
                <SFlex>
                    <MdOutlineSubscriptions /> Subscription
                </SFlex>
                <SFlex>
                    <MdOutlinePlaylistAdd /> Create Playlist
                </SFlex>
                <SFlex>
                    <GiKiwiFruit /> My Fruits
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
                    <MdSettings /> Settings
                </SFlex>
                <SFlex>
                    <MdLogout /> Log Out
                </SFlex>
            </SFlex>

            {/*content*/}
            <SFlex direction={'column'} width={'calc(100% - 250px)'}>
                {/*Header*/}
                <SFlex height={60} width={'100%'} align={'center'} justify={'space-between'} padding={'10px 20px'} style={{ borderBottom: '1px solid lightgray' }}>
                    <SFlex>
                        <p>Adze.Design</p>
                        <FaArrowCircleLeft />
                    </SFlex>
                    <SFlex>
                        <SFlex align={'center'} justify={'center'} className={styles.headerIcon}>
                            <FaSearch fontSize={18} />
                        </SFlex>
                        <SFlex align={'center'} justify={'center'} className={styles.headerIcon}>
                            <FaUser fontSize={18} />
                        </SFlex>
                        <SFlex align={'center'} justify={'center'} className={styles.headerIcon}>
                            <FaUser fontSize={18} />
                        </SFlex>
                    </SFlex>
                </SFlex>

                {/*Content Parent*/}
                <SPageSection className={styles.displayImage} align={'center'}>
                    <h3>Olsen Olsen</h3>
                    <p>43M Monthly listeners</p>
                    <SButton>Follow</SButton>
                </SPageSection>
                <SFlex height={30} width={'80%'} align={'center'} justify={'space-between'} padding={'10px 20px'} style={{ borderBottom: '1px solid lightgray' }}>
                    <b># TITLE</b>
                    <SFlex gap={160}>
                        <SFlex>
                            <IoMusicalNotes fontSize={18} />
                        </SFlex>
                        <SFlex>
                            <PiEyeBold fontSize={18} />
                        </SFlex>
                        <SFlex>
                            <LuClock3 fontSize={18} />
                        </SFlex>
                    </SFlex>
                </SFlex>
            </SFlex>

            {/*<SPageSection padding={0} className={styles.hero} backgroundUrl={'https://placehold.co/720'} backgroundSize={'cover'}>*/}
            {/*    <h1>Hero Section</h1>*/}
            {/*</SPageSection>*/}

            {/*<SPageSection className={styles.hero} backgroundColor={'green'}>*/}
            {/*    <SFlex direction={'column'} align={'center'}>*/}
            {/*        <h1>Section 1</h1>*/}
            {/*        <SImage src="https://placehold.co/384" height={200} width={200} />*/}
            {/*    </SFlex>*/}
            {/*</SPageSection>*/}

            {/*<SFlex direction={'column'} style={{padding: 20}}>*/}
            {/*    <p>Total Posts: {postsLength}</p>*/}
            {/*    {*/}
            {/*        posts.map((item, idx) => {*/}
            {/*            return <p>{idx + 1}: {item.title}</p>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</SFlex>*/}
            {/*left hand side parent container*/}
        </SFlex>
    );
}

export default App;
