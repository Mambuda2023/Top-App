import { MenuItem } from '@/app/interfaces/menu.Interface'
import { TopPageModel } from '@/app/interfaces/page.interface'
import { ProductModel } from '@/app/interfaces/product.inteface'
import { withLayout } from '@/shared/helpers/HOC/withLayout'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { JSX } from 'react'

const firstCategory = 0

const Course = ({ menu, page, products }: CourseProps): JSX.Element => {
	return <>{products && products.length}</>
}

export default withLayout(Course)

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		}
	)
	return {
		paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return { notFound: true }
	}

	const { data: menu } = await axios.post<MenuItem>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{ firstCategory }
	)
	const { data: page } = await axios.get<TopPageModel>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
	)

	const { data: products } = await axios.post<ProductModel[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
		{
			category: page.category,
			limit: 10,
		}
	)
	return {
		props: { menu, firstCategory, page, products },
	}
}

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem
	firstCategory: number
	page: TopPageModel
	products: ProductModel[]
}
