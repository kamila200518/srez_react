import style from './ProductPage.module.css';
import { products } from '../../data/data';
import { Link, useParams } from 'react-router-dom';


export function ProductPage() {
    const { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        <>
            <div className="container mt110">
                <Link to={'/catalog'} className={style.back}>На главную</Link>
                <div className={style.main_flex}>
                    <img src={product.img} alt="s" className={style.img} />
                    <div className={style.right_flex}>
                        <p className={style.title}>{product.name}</p>
                        <p className={style.desc}>Персидские ковры в интерьере смотрятся невероятно стильно, очаровывая восточной энергетикой и теплотой. Это классика, которая всегда будет в моде, поможет украсить любое помещение, наполнив его аурой домашнего уюта. Выбирая персидский ковер, стоит помнить об особенностях и характеристиках изделий, знать разновидности и чем они отличаются.</p>
                        <div className={style.bottom_flex}>
                            <p className={style.price}>{product.price} ₽</p>
                            <button className={style.add_brn}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}