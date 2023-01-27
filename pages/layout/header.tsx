import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'

const navItems = [
	{ label: 'home', path: '/' },
	{ label: 'about', path: '/about' },
	{ label: 'projects', path: '/project' },
	{ label: 'contact me', path: '/contact' },
]



const Header = () => {
	const theme = useTheme()
	const router = useRouter()
	
	console.log(router.pathname)
	
	return (
		<Box sx={ theme => ({
			pt: 1,
			borderBottom: `1px solid ${theme.palette.divider}`
		})}>
			<Container>
				<Box sx={{ display: 'flex', alignItems: 'center' }} >
				{navItems.map(({ label, path }, index, arr) => (
					<Link key={label} href={path} passHref style={{
						marginLeft: index + 1 === arr.length ? 'auto' : 0,

						paddingBottom: 8,
						borderBottom: router.pathname === path ?  `1px solid ${theme.palette.primary.main}` : '1px solid transparent'
					}}>
						<Button variant={ index + 1 === navItems.length ? 'outlined' : 'text' }>{label}</Button>
					</Link>
				))}
				</Box>
			</Container>
		</Box>
	)
}
export default Header

