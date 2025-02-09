import { Footer, Header, Sidebar } from './index'
import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.body}>{children}</main>
			<Footer className={styles.footer} />
		</div>
	)
}
