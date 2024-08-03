import styles from './App.module.scss';
import { useState } from 'react';
import { SButton, SFlex } from 'react-simple-ui-lib';
import Header from './header.tsx';
import Menu from './menu.tsx';
import Playlists from './playlists.tsx';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import { GoShareAndroid } from 'react-icons/go';
import { FiUpload } from 'react-icons/fi';
import DisplayOverImage from './display_over_image.tsx';

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
        <SFlex width={'100%'}>
            {/*Menu collections*/}
            <Menu />

            {/*Content*/}
            <SFlex direction={'column'} width={'calc(100% - 250px)'}>
                {/*Header*/}
                <Header />
                {/*Content Display Over Image*/}
                <DisplayOverImage />
                {/*Play List Details*/}
                <Playlists />
            </SFlex>
        </SFlex>
    );
}

export default App;
