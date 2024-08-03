import { FaArrowCircleLeft, FaSearch, FaUser } from 'react-icons/fa';
import styles from './App.module.scss';
import { SFlex } from 'react-simple-ui-lib';

export default function Header() {
    return (
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
    );
}
