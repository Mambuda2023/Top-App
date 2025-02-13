import { HomeProps, MenuItem } from '@/app/interfaces/menu.Interface'
import { withLayout } from '@/shared/helpers/HOC/withLayout'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Head from 'next/head'
import { JSX, useState } from 'react'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4)
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wgth@300;400;500;700&display=swap'
				/>
			</Head>
			<>
				<ul>
					{menu.map(m => (
						<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
					))}
				</ul>
			</>
		</>
	)
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{ firstCategory }
	)
	return {
		props: { menu, firstCategory },
	}
}
