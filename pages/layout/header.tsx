import Link from 'next/link'

import Button from '@mui/material/Button'
import MuiLink from '@mui/material/Link'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'

const navItems = [
	{ label: 'home', path: '/' },
	{ label: 'about', path: '/about' },
	{ label: 'projects', path: '/project' },
	{ label: 'contact me', path: '/contact' },
]


const pushFlexItemToRight = (arr: typeof navItems, index: number) => {
	return index + 1 === arr.length 
	? { marginLeft: 'auto' } 
	: { marginLeft: '0' } 
}

const Header = () => {

	return (
		<Box sx={ theme => ({
			py: 1,
			borderBottom: `1px solid ${theme.palette.divider}`
		})}>
			<Container>
				<Box sx={{ display: 'flex', alignItems: 'center' }} >
				{navItems.map(({ label, path }, index) => (
					<Link key={label} href={path} passHref style={ pushFlexItemToRight(navItems, index) }>
						<Button variant={ index + 1 === navItems.length ? 'outlined' : 'text' }>{label}</Button>
					</Link>
				))}
				</Box>
			</Container>
		</Box>
	)
}
export default Header

