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
                <div className={styles.img}>
                    <Image
                        src={'/Mlogo.svg'}
                        alt="logo"
                        width={132.8}
                        height={64}
                    />
                </div>

                <h1 className={styles.title}>
                    We are creating something amazing
                </h1>

                <div className={styles.description}>
                    We will launch our website soon!
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
                <Link href={'/'} target='_blank' className={styles.link}>
                  <Image src={'/icon-x.svg'} width={24} height={24} alt='x'/>
                </Link>

                <Link href={'/'} target='_blank' className={styles.link}>
                  <Image src={'/icon-x.svg'} width={24} height={24} alt='tg'/>
                </Link>
              </div>
            </div>
        </main>
    )
}
