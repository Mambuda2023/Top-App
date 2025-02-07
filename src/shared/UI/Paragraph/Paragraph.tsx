import { default as cn } from 'classnames'
import { JSX } from 'react'
import styles from './Paragraph.module.css'
import { ParagraphProps } from './Paragraph.props'

const Paragraph = ({
	className,
	size = 'm',
	children,
	...props
}: ParagraphProps): JSX.Element => {
	return (
		<p
			{...props}
			className={cn(styles.p, className, {
				[styles.m]: size === 'm',
				[styles.l]: size === 'l',
				[styles.h]: size === 'h',
			})}
		>
			{children}
		</p>
	)
}

export default Paragraph
