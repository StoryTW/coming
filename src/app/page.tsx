import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <main className={styles.main}>
            {/* <Image src={'/E.svg'} fill alt='bg1' className={styles.bg1}/> */}
            {/* <Image src={'/R.svg'} fill alt='bg2' className={styles.bg2}/> */}

            <div className={styles.bg2} />
            <div className={styles.bg1} />

            <div className={styles.container}>
                <div className={styles.brand}>NeiroLink</div>

                <h1 className={styles.title}>
                    We have created a modern neural network
                </h1>

                <div className={styles.description}>
                    Try out NeiroLink and see for yourself how cool it is!
                </div>

                <Link href={'/'} target="_blank">
                    <button className={styles.btn} type="button" tabIndex={-1}>
                        Open Telegram BOT
                    </button>
                </Link>
            </div>
            <div className={styles.footer}>
                <div className={styles.copyright}>
                    Copyright © 2025. Powered by Insites.
                </div>

                <div className={styles.socials}>
                    <Link href={'/'} target="_blank" className={styles.link}>
                        <Image src={'/tg.svg'} width={36} height={36} alt="x" />
                    </Link>
                </div>
            </div>
        </main>
    )
}
