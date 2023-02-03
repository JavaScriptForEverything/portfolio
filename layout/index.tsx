import Footer from './footer'
import Header from './header'

import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {

	return (
		<main>
		<CssBaseline />

			<Header />
			<Container>
				{children}
			</Container>
			<Footer />
		</main>
	)
}
export default Layout
