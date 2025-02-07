import cn from 'classnames'
import { JSX } from 'react'
import styles from './Tag.module.css'
import { TagProps } from './Tag.props'

const Tag = ({
	className,
	size,
	color = 'ghost',
	children,
	href,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			{...props}
			className={cn(styles.tag, className, {
				[styles.m]: size === 'm',
				[styles.s]: size === 's',
				[styles.ghost]: color === 'ghost',
				[styles.green]: color === 'green',
				[styles.gray]: color === 'gray',
				[styles.red]: color === 'red',
				[styles.primary]: color === 'primary',
			})}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	)
}

export default Tag
