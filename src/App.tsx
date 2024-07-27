import './App.css';
import {useEffect, useMemo, useState} from 'react';
import {SBadge, SButton, SFlex} from "react-simple-ui-lib";
import {FaSearch} from "react-icons/fa";

function App() {
    const [posts, set_posts] = useState([])

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
        <SFlex direction={'column'}>
            {/*Header*/}
            <SFlex width={'100%'} align={'center'} justify={'space-between'}
                   style={{padding: '10px 20px', borderBottom: '1px solid lightgray'}}>
                <h1>BlogSpot.</h1>
                <SFlex align={'start'}>
                    <p>
                        Articles
                        <sup>(123)</sup>
                    </p>
                    <p>Radio
                        <sup>(123)</sup></p>
                    <p>Podcast
                        <sup>(123)</sup></p>
                    <p>Be a writer</p>
                    <p>Talk to us</p>
                    <SBadge>Basged</SBadge>
                </SFlex>
                <SFlex>
                    <SFlex align={'center'} justify={'center'}
                           style={{width: 30, height: 30, background: 'lightgray', borderRadius: '50%'}}>
                        <FaSearch/>
                    </SFlex>
                    <SFlex align={'center'} justify={'center'}>
                        <SButton outline={true} style={{borderRadius: 20, borderColor: 'black', color: 'black'}}
                                 onClick={() => {
                                 }}>Menu</SButton>
                    </SFlex>
                </SFlex>
            </SFlex>

            {/*Content*/}
            {/*<SFlex direction={'column'} style={{padding: 20}}>*/}
            {/*    <p>Total Posts: {postsLength}</p>*/}
            {/*    {*/}
            {/*        posts.map((item, idx) => {*/}
            {/*            return <p>{idx + 1}: {item.title}</p>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</SFlex>*/}
        </SFlex>
    )
}

export default App
