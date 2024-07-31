import styles from './App.module.scss';
// import firstImage from './free-images-for-blogs.jpg';
import { useState } from 'react';
import { SButton, SFlex, SImage, SPageSection } from 'react-simple-ui-lib';
import { FaArrowCircleLeft, FaSearch, FaUser } from 'react-icons/fa';

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
        <SFlex direction={'column'}>
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
                    <SFlex w align={'center'} justify={'center'} className={styles.headerIcon}>
                        <FaUser fontSize={18} />
                    </SFlex>
                </SFlex>
            </SFlex>

            <SPageSection padding={0} className={styles.hero} backgroundUrl={'https://placehold.co/1366'} backgroundSize={'cover'}>
                <h1>Hero Section</h1>
            </SPageSection>

            <SPageSection className={styles.hero} backgroundColor={'green'}>
                <SFlex direction={'column'} align={'center'}>
                    <h1>Section 1</h1>
                    <SImage src="https://placehold.co/384" height={200} width={200} />
                </SFlex>
            </SPageSection>

            {/*Content*/}
            {/*<SFlex direction={'column'} style={{padding: 20}}>*/}
            {/*    <p>Total Posts: {postsLength}</p>*/}
            {/*    {*/}
            {/*        posts.map((item, idx) => {*/}
            {/*            return <p>{idx + 1}: {item.title}</p>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</SFlex>*/}
            {/*left hand side parent container*/}
            <SFlex direction={'column'}>
                <SButton outline={true} style={{ borderRadius: 10, borderColor: 'black', color: 'black' }} onClick={() => {}}>
                    WEB APP
                </SButton>
            </SFlex>
        </SFlex>
    );
}

export default App;
