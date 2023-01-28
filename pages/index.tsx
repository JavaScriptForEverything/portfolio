import Link from 'next/link'
import Image from 'next/image'

import Layout from '@/layout'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MuiLink from '@mui/material/Link'

// import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import CallIcon from '@mui/icons-material/Call'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

const navItems = [
	// { label: 'home', path: '/', icon: <HomeIcon /> },
	{ label: 'about', path: '/about', icon: <PersonIcon /> },
	{ label: 'projects', path: '/project', icon: <AccountTreeIcon /> },
	{ label: 'contact me', path: '/contact', icon: <CallIcon /> },
]

const HomePage = () => {

	return (
		<>
			<Layout>
				<Grid container spacing={4} sx={{ 
					display: 'flex',
					alignItems: 'center',
					mt: { xs: 2, sm: 0 }
				}}>

					<Grid item xs={12} sm={6}>
						<Typography variant='h4'>
							Hi there, I&apos;m 
							<Typography component='span' variant='h4' color='primary' sx={{ fontFamily: 'custo-regular', pl: 1 }} > 
								Riajul Islam 
							</Typography>
						</Typography>

						<Typography color='textSecondary' paragraph variant='body2'>
							I&apos;m a Full Stack Web Developer in Dhaka, Bangladesh.	
						</Typography>

						<Box sx={{ display: 'flex', gap: 1 }}>
							{navItems.map(({ label, icon, path }) => (
							<Link key={label} href={path} passHref>
								<Button 
									variant='outlined' 
									size='small'
									startIcon={icon}
								>{label}</Button>
							</Link>
							))}
						</Box>

						<Typography component='section' color='textSecondary' align='justify' sx={{ mt: 4 }} >
							<Typography paragraph variant='body2'>
								I&apos;ve been designing websites for businesses since 2018 and I&apos;m always up to a challenge! 
								Recently I participated in a frontend development programming contest in 2022 and won 3rd prize in 
								the contest, which has been shared on my <Link 
									href='https://www.linkedin.com/in/javascriptforeverything/overlay/1635514732753/single-media-viewer/?profileId=ACoAADXLBKcBlmcS6KAyc5BTL9urWMAKZB1pJj4'
									target='_blank'
									passHref
								> <MuiLink component='span' > linkedIn profile.  </MuiLink>
								</Link>
							</Typography>

							<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							<Typography paragraph variant='body2'>
								I&apos;m comfortable working with React applications. React, Redux and Next.js in frontend and node, 
								Express, and MongoDB in the backend. CSS framework such as Material-UI or MUI and deploying 
								applications with docker.
							</Typography>

							<Typography paragraph variant='body2'>
								I would love to put my skills to work to create a beautiful and user-friendly website for you.
							</Typography>
							</Box>
						</Typography>

					</Grid>

					<Grid item xs={12} sm={6} >
						<Box sx={ theme => ({ 
							position: 'relative',
							height: { xs: 400, sm: 600 }, 	// height mandatory
							borderLeft: { xs: '1px solid transparent', sm: `1px solid ${theme.palette.divider}` }
						})}>
							<Image 
								src='/images/aboutAvatar.png'
								alt='user Avatar'
								fill
							/>
						</Box>
					</Grid>
				</Grid>


			</Layout>
		</>
	)
}
export default HomePage
