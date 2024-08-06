import styles from './footer-player.module.scss';
import { SFlex } from 'react-simple-ui-lib';
import { FaShuffle } from 'react-icons/fa6';
import { IoIosPause, IoIosPlayCircle, IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io';
import { useMemo, useState } from 'react';

export default function FooterPlayer({ c_music }) {
    const [is_playing, set_is_playing] = useState(false);

    const toggle_play_music = () => {
        if (audio_object.paused) {
            audio_object.play().then();
            set_is_playing(true);
        } else {
            pause_music();
            set_is_playing(false);
        }
    };

    const pause_music = () => {
        audio_object.pause();
    };

    const audio_object = useMemo(() => {
        return new Audio(c_music.url);
    }, [c_music]);

    return (
        // Footer Player
        <SFlex align={'center'} className={styles.mainPlayer} gap={20}>
            <SFlex className={styles.sampleImage}></SFlex>
            <SFlex direction={'column'} gap={3}>
                <b>{c_music.title}</b>
                <p>{c_music.artist}</p>
            </SFlex>
            <SFlex className={styles.allButtonFont}>
                <FaShuffle fontSize={30} />
            </SFlex>
            <SFlex className={styles.allButtonFont}>
                <IoMdSkipBackward fontSize={30} />
            </SFlex>
            <SFlex className={styles.allButtonFont}>{!is_playing ? <IoIosPlayCircle onClick={toggle_play_music} fontSize={30} /> : <IoIosPause onClick={toggle_play_music} fontSize={30} />}</SFlex>
            <SFlex className={styles.allButtonFont}>
                <IoMdSkipForward fontSize={30} />
            </SFlex>
        </SFlex>
    );
}
