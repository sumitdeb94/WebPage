import styles from './App.module.scss';
import { SButton, SFlex } from 'react-simple-ui-lib';
import { GoShareAndroid } from 'react-icons/go';
import { FiUpload } from 'react-icons/fi';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';

export default function DisplayOverImage() {
    return (
        <SFlex direction={'column'} align={'start'} className={styles.displayImage} style={{ padding: '10px' }}>
            <h3 className={styles.positionRelative}>Olsen Olsen</h3>
            <p className={styles.positionRelative}>43M Monthly listeners</p>
            <SButton className={styles.positionRelative}>Follow</SButton>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SFlex align={'center'} justify={'space-between'}>
                <MdOutlinePlayCircleFilled style={{ fontSize: '70px' }} />
                <GoShareAndroid style={{ fontSize: '30px' }} />
                <FiUpload style={{ fontSize: '30px' }} />
            </SFlex>
        </SFlex>
    );
}
