import { Layout } from '@/shared/Layout'
import { FunctionComponent, JSX } from 'react'

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}
