import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'

const navItems = [
	{ label: 'home', path: '/' },
	{ label: 'about', path: '/about' },
	{ label: 'projects', path: '/project' },
	// { label: 'contact me', path: '/contact' },
]



const Header = () => {
	const theme = useTheme()
	const router = useRouter()
	
	console.log(router.pathname)
	
	return (
		<Box sx={ theme => ({ pt: 1, borderBottom: `1px solid ${theme.palette.divider}` })}>
			<Container>

				<Box sx={{ display: { xs: 'block', sm: 'none' }}}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box>
							<IconButton>
								<MenuIcon />
							</IconButton>
						</Box>

						<Link href={'/contact'} passHref style={{ marginLeft: 'auto' }}>
							<IconButton size='small'>
								<Avatar src='/images/aboutAvatar.png' />
							</IconButton>
						</Link>

					</Box>
				</Box>

				<Box sx={{ display: { xs: 'none', sm: 'block' }}}>
					<Box sx={{ display: 'flex', alignItems: 'center' }} >
						{navItems.map(({ label, path }) => (
							<Link key={label} href={path} passHref style={{
								paddingBottom: 8,
								borderBottom: router.pathname === path ?  `1px solid ${theme.palette.primary.main}` : '1px solid transparent'
							}}>
								<Button>{label}</Button>
							</Link>
						))}
						<Link href='/contact' passHref style={{ marginLeft: 'auto' }}>
							<IconButton size='small'>
								<Avatar src='/images/aboutAvatar.png' />
							</IconButton>
						</Link>
					</Box>
				</Box>

			</Container>
		</Box>
	)
}
export default Header

