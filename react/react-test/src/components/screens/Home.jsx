import styles from './styles/Home.module.css'

function Home() {
    return (
        <div className={styles.main}>
            <h1>Cars catalog</h1>
            <div>
                <div className={styles.item}>
                    <div>
                        <img src='./Felipe_Massa_2015_Malaysia_FP3.jpg' alt=''/>
                    </div>
                    <div className={styles.info}>
                        <h2>Car 1</h2>
                        <p>$100 000</p>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home