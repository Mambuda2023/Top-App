import { HeaderProps } from './Header.props'

export const Header = ({ ...props }: HeaderProps) => {
	return <header {...props}>Header привет мир</header>
}
