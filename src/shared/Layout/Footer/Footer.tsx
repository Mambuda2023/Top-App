import cn from 'classnames'
import style from './Footer.module.css'
import { FooterProps } from './Footer.props'

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer {...props} className={cn(className, style.footer)}>
			<p className={style.text}>OwlTop © 2020 - 2021 Все права защищены</p>
			<ul className={style.list}>
				<li className={style.item}>
					<a href='#'>Пользовательское соглашение</a>
				</li>
				<li className={style.item}>
					<a href='#'>Политика конфиденциальности </a>
				</li>
			</ul>
		</footer>
	)
}
