import dynamic from 'next/dynamic'
import Section from '@/layout/footer/section'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'


const sectionItems = [
	{ title: 'HashTAG', Component: dynamic(() => import('./footer/hashTag')) },
	{ title: 'Contact',  Component: dynamic(() => import('./footer/contact')) },
	{ title: 'About Us',  Component: dynamic(() => import('./footer/aboutUs')) },
	{ title: 'Social Media',  Component: dynamic(() => import('./footer/socialMedia')) },
]


const Footer = () => {

	return (
		<footer>
		<Box sx={{ backgroundColor: '#282828', color: '#f9f9f9d0', mt: 6 }} >

			<Container>
				<Grid container spacing={3}>
					{sectionItems.map( ({ title, Component }) => (
					<Grid key={title} item xs={12} sm={6} md={3} >
						<Section title={title}>
							<Component />
						</Section>
					</Grid>
					))}
				</Grid>

				<Divider sx={{my: 3, borderBottom: '1px solid gray'}} />

			</Container>

			<Typography component='section' align='center' sx={{
				backgroundColor: '#18181888',
				mt: 3,
				py: 1
			}}> All Right Reserved &copy;HashTAG </Typography>
		</Box>
		</footer>
	)
}
export default Footer
