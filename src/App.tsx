import './App.css';
// import firstImage from './free-images-for-blogs.jpg';
import {useEffect, useMemo, useState} from 'react';
import {SBadge, SButton, SFlex} from "react-simple-ui-lib";
import {FaArrowCircleLeft, FaSearch} from "react-icons/fa";
import {Si500Px, SiBox} from "react-icons/si";

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
        // grandParent container
        <SFlex direction={'column'} style={{marginLeft: 15}}>
            {/*Header*/}
            <SFlex width={'100%'} align={'center'} justify={'space-between'}
                   style={{padding: '10px 20px', borderBottom: '1px solid lightgray'}}>
                <p>Adze.Design</p>
                <SFlex align={'center'} justify={'center'}
                       style={{width: 20, height: 30, background: 'lightgray', borderRadius: '20%'}}>
                    <FaArrowCircleLeft/>
                </SFlex>
                <SFlex></SFlex>
                <SFlex></SFlex>
                <SFlex></SFlex>
                <SFlex></SFlex>
                <SFlex></SFlex>

                <SFlex>
                    <SFlex align={'center'} justify={'center'}
                           style={{width: 30, height: 30, background: 'lightgray', borderRadius: '50%'}}>
                        <FaSearch/>
                    </SFlex>

                    <SFlex align={'center'} justify={'center'}>
                        <img src={'/Notification Icon.png'}
                             style={{width: 30, height: 30, background: 'lightgray', borderRadius: '50%'}}/>
                    </SFlex>
                    <SFlex className={'adjustProfilePhoto'}>
                        <button style={{width: 30, height: 30, background: 'lightgray', borderRadius: '50%'}}>
                            <img src={'/ProfilePhoto.png'}
                                 style={{width: 30, height: 30, background: 'lightgray', borderRadius: '50%'}}/>
                        </button>
                    </SFlex>
                    {/*Menu button*/}
                    {/*<SFlex align={'center'} justify={'center'}>*/}
                    {/*    <SButton outline={true} style={{borderRadius: 20, borderColor: 'black', color: 'black'}}*/}
                    {/*             onClick={() => {*/}
                    {/*             }}>Menu</SButton>*/}
                    {/*</SFlex>*/}
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
            {/*left hand side parent container*/}
            <SFlex direction={'column'}>
                <SButton outline={true} style={{borderRadius: 10, borderColor: 'black', color: 'black'}}
                         onClick={() => {
                         }}>WEB APP</SButton>

            </SFlex>


        </SFlex>

    )
}

export default App
