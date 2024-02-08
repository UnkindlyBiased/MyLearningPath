import styles from './Product.module.scss'
import { useRef } from 'react'

function Product({ prod }) {
    const productRef = useRef(null)
    const handleRef = (e) => {
        e.target.scrollIntoView({
            behavior: 'smooth'
        })
    }
    return (
        <div ref={productRef} className={styles.divWrapper} onClick={handleRef}>
            <img src={prod.thumbnail} alt={prod.title}/>
            <div className={styles.infoWrapper}>
                <h2>{prod.title}</h2>
                <p>{prod.description}</p>
            </div>
        </div>
    )
}

export default Product