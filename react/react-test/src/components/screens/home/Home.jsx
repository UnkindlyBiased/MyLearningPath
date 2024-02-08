import styles from './styles/Home.module.css'
import { data } from './data'

function Home() {
    return (
        <div className={styles.main}>
            <h1>F1 cars</h1>
            <div className={styles.container}>
                {data.map(car => (
                    <div key={car.id} className={styles.item}>
                        <div>
                            <img src={car.imgLink} alt=''/>
                        </div>
                        <div className={styles.info}>
                            <h2>{car.name}</h2>
                            <p>{`Year: ${car.year}`}</p>
                            <p>{`Drivers: ${car.drivers.join(', ')}`}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home