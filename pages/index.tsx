import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import Layout from '@/layout'
import { products } from '@/data/products'
import Product from '@/components/product'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MuiLink from '@mui/material/Link'

import { navItems } from '@/layout/header'
import SkillsTable from '@/components/skillTable'

// import CardActions from '@mui/material/CardActions'
// import Paper from '@mui/material/Paper'
// import CardContent from '@mui/material/CardContent'
// import Chip from '@mui/material/Chip'





const HomePage = () => {
	const theme = useTheme()

	return (
		<>
			<Head>
				<title>Portfolio | Home Page</title>
				<meta name='description' content='portfolio for javascriptforeverything' />
				<meta name='description' content='portfolio for riajul islam' />
				<meta name='description' content='portfolio for robitops10' />
				<meta name='description' content='portfolio for riaztora52' />
				<meta name='description' content='Im a Full Stack Web Developer in Dhaka, Bangladesh.' />

				<meta property="og:title" content="portfolio javascriptforeverything" />
				<meta property="og:type" content="portfolio" />
				<meta property="og:url" content="https://javascriptforeverything.vercel.app/" />
				<meta property="og:image" content="https://github.com/JavaScriptForEverything/javascriptforeverything/raw/main/BannerForGithub.png?raw=true" />
			</Head>

			<Layout>
				<Grid container spacing={4} sx={{ 
					display: 'flex',
					alignItems: 'center',
					mt: { xs: 2, sm: 0 }
				}}>

{/* 


	

*/}

					<Grid item xs={12} sm={6}>
						<Typography component='span' variant='h4' color='primary' sx={{ fontFamily: 'custo-regular', }} >Riajul Islam </Typography>

						<Typography color='textSecondary' paragraph variant='body2' component='h1' sx={{ mt: 1, mb: 2 }}>
							Full-Stack Developer | Node.js | Next.js | TypeScript | DevOps
						</Typography>


						<Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'left' }}}>
							{navItems.filter( item => item.path !== '/').map(({ label, icon, path }) => (
							<Link key={label} href={path} passHref style={{ textDecoration: 'none' }}>
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
								I&apos;m a passionate <strong>Full-Stack Web Developer</strong>,
								with over <strong>5+ years of experience</strong>,
								in designing and developing user-friendly, scalable, and feature-rich web applications. I thrive on solving complex problems and turning ideas into reality through clean, efficient code.
							</Typography>

							<Typography paragraph variant='body2'>
								I specialize in <strong> React, Node.js, and modern web technologies </strong>, 
								and I&apos;m always eager to take on new challenges. Whether it&apos;s building a 
								robust backend, crafting a sleek frontend, or deploying applications with <strong>Docker</strong> and <strong>Kubernetes</strong>, I&apos;m your go-to developer!
							</Typography>
						</Typography>
					</Grid>

					<Grid item xs={12} sm={6} >
						<Box sx={ theme => ({ 
							position: 'relative',
							// height: { xs: 400, sm: 600 }, 	// height mandatory
							height: { xs: 180, md: 300 }, 	// height mandatory
							borderLeft: { xs: '1px solid transparent', sm: `1px solid ${theme.palette.divider}` }
						})}>
							<Image 
								// src='/images/aboutAvatar.png'
								src='/images/coverPhoto.png'
								alt='user Avatar'
								fill
							/>
						</Box>
					</Grid>
				</Grid>

				<Box sx={{ mt: 4 }}>
					<SkillsTable />
				</Box>

				<Box sx={{ mt: 4 }}>
					<Typography sx={ theme => ({
						py: 1, px: 2,
						backgroundColor: theme.palette.primary.main,
						color: 'white',
					})} paragraph id='project'>Projects</Typography>

					<Grid container spacing={2}>
						{products.map( (product, key) => (
							<Grid key={key} item xs={12} sm={6} md={4} sx={{ 
								display: 'flex', 
							}}>
								<Product {...product} />
							</Grid>
						))}
					</Grid>

					{/* <Box sx={{
						display: 'grid',
						gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'},
						gridGap: 8*2,
					}}>
						{products.map( (product, key) => (
							<Paper key={key} sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between'
							}}>
								<Box>
									<Box sx={{ position: 'relative', height: { xs: 250, sm: 200 }, cursor: 'pointer' }}>
										<Image 
											src={product.coverPhoto}
											alt={product.coverPhoto}
											fill
											onClick={() => alert('add modal')}
										/>
									</Box>
									<CardContent>
										<Link href={`/project/${product.slug}`} style={{
											color: theme.palette.primary.main,
											textDecoration: 'none'
										}}>
											<Typography variant='h5' sx={{ 
												width: 350,
												whiteSpace: 'nowrap',
												overflow: 'hidden',
												textOverflow: 'ellipsis'
											}}>{product.title}</Typography>
										</Link>
										<Typography variant='body2' color='textSecondary' paragraph >{product.subheader}</Typography>

										<Typography variant='body1' color='textSecondary' align='justify'> {product.summary} </Typography>

										<Typography sx={{ mt: 2, mb: 1 }} variant='h6'> Technologies: </Typography>
										<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
											{product.technologies.map( technology => (
												<Chip key={technology}
													label={technology}
													variant='outlined'
													size='small'
												/>
											))}
										</Box>

										<Box sx={ theme => ({
											display: product.hasCredentials ? 'block' : 'none',
											border: `1px solid ${theme.palette.warning.light}`,
											py: 1, px: 2,
											mt: 4,
										})} >
											<Typography paragraph >Demo Account: </Typography>
											<Box sx={{ display: 'flex', flexDirection: 'column' }}>
												<Box>
													<Typography color='textSecondary' variant='caption'>Username: </Typography>
													<Typography color='textSecondary' variant='caption'>abc@gmail.com</Typography>
												</Box>
												<Box>
													<Typography color='textSecondary' variant='caption'>Password: </Typography>
													<Typography color='textSecondary' variant='caption'>asdfasdf</Typography>
												</Box>
											</Box>
										</Box>
									</CardContent>
								</Box>

								<Box>
									<CardActions sx={{ mt: 2, }}>
										<Link href={product.websiteUrl} target='_blank' style={{ textDecoration: 'none' }}>
											<Button variant='outlined' disabled={!product.websiteUrl.trim()}>Live Demo</Button>
										</Link>

										<Link href={product.projectUrl} target='_blank' style={{ textDecoration: 'none' }}>
											<Button variant='contained' disabled={!product.projectUrl.trim()}>Source Code</Button>
										</Link>
									</CardActions>
								</Box>
							</Paper>
						))}
					</Box> */}

				</Box>
			</Layout>
		</>
	)
}
export default HomePage
