import SocialMeidaList from '@/components/socialMediaList'
import Layout from '@/layout'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Head from 'next/head'

const contactArrayObject = [
	{
		title: 'Mobile:',
		description: '+8801957500605'
	},
	{
		title: 'Email:',
		description: 'JavascriptForEverything@gmail.com'
	},
	{
		title: 'WhatsApp:',
		description: '01957500605'
	},
]


const Contact = () => {

	const center = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}


	return (
		<Layout>
			<Head>
				<title>Portfolio | Contact Page</title>
				<meta name='description' content='portfolio for javascriptforeverything' />
				<meta name='description' content='portfolio for riajul islam' />
				<meta name='description' content='portfolio for robitops10' />
				<meta name='description' content='portfolio for riaztora52' />
				<meta name='description' content='Anyone can contact up via bellow methods' />

				<meta property="og:title" content="portfolio javascriptforeverything" />
				<meta property="og:type" content="portfolio" />
				<meta property="og:url" content="https://javascriptforeverything.vercel.app/" />
				<meta property="og:image" content="https://github.com/JavaScriptForEverything/javascriptforeverything/raw/main/BannerForGithub.png?raw=true" />
			</Head>


				<Box sx={{ mt: 4, ...center }}>
					<Typography variant='h6'> Contact Us </Typography>
					<Typography variant='body2'>Anyone can contact up via bellow methods</Typography>
					{/* <Divider sx={{ width: '100%', mt: 2 }} /> */}
				</Box>

				<Box sx={{ mt: 4 }} >
					<Typography variant='h6' paragraph>Contact</Typography>
					<Box sx={{ 
						px: 2,
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						justifyContent: 'space-evenly'
					}}>
						{contactArrayObject.map(({ title, description}) => (
							<Box key={title} sx={{ mb: 2 }}>
								<Typography variant='body1'> {title} </Typography>
								<Typography variant='body2' color='textSecondary'> {description} </Typography>
							</Box>
						))}
					</Box>
				</Box>





				<SocialMeidaList />
		</Layout>
	)
}
export default Contact
