import styles from './App.module.scss';
import { SFlex } from 'react-simple-ui-lib';
import { FaShuffle } from 'react-icons/fa6';
import { IoIosPlayCircle, IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io';

export default function FooterPlayer() {
    return (
        // Footer Player
        <SFlex align={'center'} justify={'space-between'} direction={'row'}>
            <SFlex className={styles.sampleImage}></SFlex>
            <SFlex direction={'column'}>
                <b>The Finishing</b>
                <p>Ikako Music's</p>
            </SFlex>
            <SFlex className={styles.allButtonFont}>
                <FaShuffle />
            </SFlex>
            <SFlex className={styles.allButtonFont}>
                <IoMdSkipBackward />
            </SFlex>
            <SFlex className={styles.allButtonFont}>
                <IoIosPlayCircle />
            </SFlex>
            <SFlex className={styles.allButtonFont}>
                <IoMdSkipForward />
            </SFlex>
        </SFlex>
    );
}
