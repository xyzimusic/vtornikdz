import React, {useState} from 'react'
import s from './App.module.css'
import HW1 from '../s2-homeworks/hw01/HW1'
import HW2 from '../s2-homeworks/hw02/HW2'
import HW3 from '../s2-homeworks/hw03/HW3';
import HW4 from '../s2-homeworks/hw04/HW4';
import HW5 from '../s2-homeworks/hw05/HW5';
import HW6 from '../s2-homeworks/hw06/HW6';
import {restoreState, saveState} from '../s2-homeworks/hw06/localStorage/localStorage';
import s2 from './App.module.css';
import SuperEditableSpan from '../s2-homeworks/hw06/common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../s2-homeworks/hw04/common/c2-SuperButton/SuperButton';
import HW7 from '../s2-homeworks/hw07/HW7';
import HW8 from '../s2-homeworks/hw08/HW8';

function App() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('hw6-editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('hw6-editable-span-value',value))
    }


    return (
        <div className={s.App}>
            {/*<HW1/>*/}
            {/*раскомментировать по ходу выполнения*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {/*<HW4/>*/}

            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            <HW5/>
            <HW6/>
            <HW7/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <HW8/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default App
