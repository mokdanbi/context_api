import React, { useContext } from 'react'
import { DarkTheme } from './App';

const TheDeepSub = () => {
    const { dark, setDark } = useContext(DarkTheme);
    console.log(dark)
    return (
        <>
            <div className='btn'>
                <label htmlFor='mode' className={`Btn ${dark ? "on" : ""}`}>
                    모드를 변경해보세요
                </label>
                <button id='mode' onClick={() => setDark(!dark)}>
                    mode change
                </button>
            </div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quaerat esse non dolor totam ex quam qui quasi quo rerum perspiciatis odio expedita ut necessitatibus repellendus eveniet, quod voluptas. Itaque ipsam eaque perferendis distinctio aliquid odio accusantium non quidem nam nostrum hic natus atque, provident excepturi veritatis saepe dignissimos, quia impedit explicabo iusto sit adipisci! Consequatur, incidunt quisquam. Eligendi, doloribus, labore libero quos provident aspernatur odit aut ducimus tempora laudantium voluptas deleniti accusantium reiciendis! Eos accusamus culpa necessitatibus nemo facilis! Quae fugit fuga aut deleniti, ducimus repellat omnis laboriosam repudiandae necessitatibus, error at debitis accusamus asperiores sunt natus atque hic?
            </div>
        </>
    )
}

export default TheDeepSub