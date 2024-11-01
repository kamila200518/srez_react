import style from './Accordeon.module.css'
import { AccordeonItem } from './AccordeonItem/AccordeonItem'


export function Accordeon() {
    return (
        <>
            <div className={style.accordeon}>
                <AccordeonItem title='Почему выгодно покупать ковры?'
                text='Покупка ковров в дом, квартиру или офис — не частое мероприятие. Оно случается раз в несколько лет при смене интерьера, ремонте, переезде и т.д. Только дизайнеры в силу профессии сталкиваются с этим явлением часто. У непрофессионалов такие события случаются гораздо реже. От этого важность подобного приобретения становится еще выше.' />
                <AccordeonItem title='Сколько стоят ковры?'
                text='Цены на наши ковры начинаются от 1000 до 500000 рублей.' />
                
            </div>
        </>
    )
}