import './App.css';
import {useState} from 'react';
import {SButton, SFlex, SSelect} from "react-simple-ui-lib";

function App() {
    const [student_name, set_student_name] = useState({})
    const [l1, set_l1] = useState(false)

    return (
        <SFlex direction={'row'}>
            <SSelect searchable loading={l1} placeholder={'My'} options={[{label: 'Sumit', value: 1}, {label: 'Raj', value: 2}]}
                     value={student_name} onChange={(ev) => {
                set_student_name(ev)
            }}></SSelect>
            <SButton onClick={() => {
                set_l1(prev => !prev)
            }}>
                Toggle Loading
            </SButton>
        </SFlex>
    )
}

export default App
