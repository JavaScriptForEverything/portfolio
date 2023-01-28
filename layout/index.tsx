import Footer from './footer'
import Header from './header'

import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {

	return (
		<>
		<CssBaseline />

			<Header />
			<Container>
				{children}
			</Container>
			<Footer />
		</>
	)
}
export default Layout
