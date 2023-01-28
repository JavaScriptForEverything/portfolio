import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import CallIcon from '@mui/icons-material/Call'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

const navItems = [
	{ label: 'home', path: '/', icon: <HomeIcon /> },
	{ label: 'about', path: '/about', icon: <PersonIcon /> },
	{ label: 'projects', path: '/project', icon: <AccountTreeIcon /> },
	{ label: 'contact me', path: '/contact', icon: <CallIcon /> },
]



const Header = () => {
	const theme = useTheme()
	const router = useRouter()
	
	const [ open, setOpen ] = useState(false)
	const openHandler = () => setOpen(true)
	const closeHandler = () => setOpen(false)
	
	
	return (
		<Box sx={ theme => ({ pt: 1, borderBottom: `1px solid ${theme.palette.divider}` })}>
			<Container>
				<Box sx={{ display: { xs: 'block', sm: 'none' }}}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box>
							<IconButton onClick={openHandler}>
								<MenuIcon />
							</IconButton>
						</Box>

							<Link href={'/contact'} passHref style={{
								textDecoration: 'none',
								marginLeft: 'auto',
								paddingBottom: 8,
								borderBottom: router.pathname === '/contact' ?  `1px solid ${theme.palette.primary.main}` : '1px solid transparent'
							}}>
								<Button variant='contained'>Contact Me</Button>
							</Link>
					</Box>
				</Box>

				<Box sx={{ display: { xs: 'none', sm: 'block' }}}>
					<Box sx={{ display: 'flex', alignItems: 'center' }} >
						{navItems.map(({ label, path }, index, arr) => (
							<Link key={label} href={path} passHref style={{
								textDecoration: 'none',
								marginLeft: index === arr.length - 1 ? 'auto' : 0,
								paddingBottom: 8,
								borderBottom: router.pathname === path ?  `1px solid ${theme.palette.primary.main}` : '1px solid transparent'
							}}>
								<Button variant={index === arr.length - 1 ? 'contained' : 'text' }>{label}</Button>
							</Link>
						))}
					</Box>
				</Box>
			</Container>

			<SwipeableDrawer 
				open={open} 
				onOpen={openHandler}
				onClose={closeHandler}
				PaperProps={{
					style: { minWidth: '50%' }
				}}
			>
				<MenuItem sx={{ py: 2, backgroundColor: '#007acc33' }}>
					<Typography sx={{ textTransform: 'uppercase' }}>Hash Tag</Typography>
				</MenuItem>

				{navItems.map(({ label, path, icon }) => (
					<MenuItem key={label} onClick={() => { router.push(path); closeHandler() }} >
						<ListItemIcon> {icon} </ListItemIcon>
						<ListItemText primary={label} sx={{ textTransform: 'capitalize' }} />
					</MenuItem>
				))}
			</SwipeableDrawer>
		</Box>
	)
}
export default Header

