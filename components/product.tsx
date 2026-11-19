// components/product.tsx
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

const TRUNCATE_LENGTH = 140

type Props = {
	id?: string,
	slug: string,
	lists?: string[]
	technologies: string[]
	coverPhoto: string,
	images: string[],
	title: string,
	subheader: string,
	summary: string,
	hasCredentials: boolean,
	websiteUrl: string,
	projectUrl: string,
	videoUrl: string
}

const Product = ({ coverPhoto, title, slug, subheader, summary, technologies, hasCredentials, websiteUrl, projectUrl, videoUrl }: Props) => {
	const [expanded, setExpanded] = useState(false)

	const isLong = summary?.length > TRUNCATE_LENGTH
	const displaySummary = expanded || !isLong
		? summary
		: `${summary.slice(0, TRUNCATE_LENGTH).trim()}…`

	return (
		<Paper sx={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			width: '100%',
			height: '100%',          // <- makes all cards equal height in the grid row
		}}>
			<Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
				<Box sx={{ position: 'relative', height: { xs: 250, sm: 200 }, cursor: 'pointer' }}>
					<Image src={coverPhoto} alt={coverPhoto} fill />
				</Box>

				<CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
					<Link href={`/project/${slug}`} style={{ textDecoration: 'none' }}>
						<Typography variant='h5' sx={{
							color: 'primary.main',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
						}}>
							{title}
						</Typography>
					</Link>

					<Typography variant='body2' color='textSecondary' paragraph>
						{subheader}
					</Typography>

					<Typography variant='body1' color='textSecondary' align='justify'>
						{displaySummary}
					</Typography>

					{isLong && (
						<Button
							size='small'
							onClick={() => setExpanded(prev => !prev)}
							sx={{ alignSelf: 'flex-start', mt: 1, textTransform: 'none' }}
						>
							{expanded ? 'Read less' : 'Read more'}
						</Button>
					)}

					{/* Push the rest of the content to the bottom */}
					<Box sx={{ mt: 'auto', pt: 2 }}>
						<Typography variant='h6' sx={{ mb: 1 }}>Technologies:</Typography>
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
							{technologies?.map(tech => (
								<Chip key={tech} label={tech} variant='outlined' size='small' />
							))}
						</Box>

						{hasCredentials && (
							<Box sx={theme => ({
								border: `1px solid ${theme.palette.warning.light}`,
								py: 1, px: 2,
							})}>
								<Typography paragraph>Demo Account:</Typography>
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
						)}
					</Box>
				</CardContent>
			</Box>

			<CardActions sx={{ mt: 'auto' }}>
				<Link href={websiteUrl || '#'} target='_blank' style={{ textDecoration: 'none' }}>
					<Button size='small' variant='outlined' disabled={!websiteUrl?.trim()}>Live Demo</Button>
				</Link>

				<Button size='small' variant='contained' disabled={!videoUrl.startsWith('http')}>
					<Link href={videoUrl} target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>Video Demo</Link>
				</Button>

				<Link href={projectUrl || '#'} target='_blank' style={{ textDecoration: 'none' }}>
					<Button size='small' variant='contained' disabled={!projectUrl?.trim()}>Source Code</Button>
				</Link>
			</CardActions>
		</Paper>
	)
}

export default Product




// import Link from 'next/link'
// import Image from 'next/image'
// import { useState } from 'react'

// import { useTheme } from '@mui/material/styles'
// import Carousel from './carousel'

// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import Button from '@mui/material/Button'
// import IconButton from '@mui/material/IconButton'
// import Chip from '@mui/material/Chip'
// import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import Dialog from '@mui/material/Dialog'
// import DialogTitle from '@mui/material/DialogTitle'
// import DialogContent from '@mui/material/DialogContent'

// import CloseIcon from '@mui/icons-material/Close'

// type Props = {
// 	id?: string,
// 	slug: string,
// 	lists?: string[]
// 	technologies: string[]
// 	coverPhoto: string,
// 	images: string[],
// 	title: string,
// 	subheader: string,
// 	summary: string,
// 	hasCredentials: boolean,
// 	websiteUrl: string,
// 	projectUrl: string,
// 	videoUrl: string
// }
// const Product = (props: Props) => {
// 	const { 
// 		id = '',
// 		slug,
// 		lists, 
// 		technologies, 
// 		coverPhoto,
// 		images,
// 		title,
// 		subheader,
// 		summary,
// 		hasCredentials,
// 		websiteUrl,
// 		projectUrl,
// 		videoUrl,
// 	} = props

// 	const theme = useTheme()
// 	const [ open, setOpen ] = useState(false)

// 	const closeHandler = () => {
// 		setOpen(false)
// 	}

// 	return (
// 		<>
// 			<Card sx={{ display: 'flex', flexDirection: 'column' }}>
// 				<Box sx={{ position: 'relative', height: { xs: 250, sm: 200 }, cursor: 'pointer' }}>
// 					<Image 
// 						src={coverPhoto}
// 						alt={coverPhoto}
// 						fill
// 						onClick={() => setOpen(true)}
// 					/>
// 				</Box>

// 				<CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', }}>
// 					<Link href={videoUrl} target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
// 						<Typography variant='h5' color='primary' sx={{ 
// 							width: 300,
// 							whiteSpace: 'nowrap',
// 							overflow: 'hidden',
// 							textOverflow: 'ellipsis'
// 						}}>{title}</Typography>
// 					</Link>

// 					<Typography variant='body2' color='textSecondary' paragraph sx={{ 
// 							width: 300,
// 							whiteSpace: 'nowrap',
// 							overflow: 'hidden',
// 							textOverflow: 'ellipsis'
// 						}} >{subheader}</Typography>
// 					<Typography variant='body1' color='textSecondary' paragraph align='justify' > {summary} </Typography>

// 					{lists && (
// 						<Typography component='div' sx={{  mt: -2, mb: 2, }} variant='body2' color='textSecondary'>
// 							<ul style={{ 
// 								paddingBlock: '8px',
// 								listStyleType: 'square', 
// 								backgroundColor: '#d5e5fb44'
// 								}}>
// 								{lists.map( list => <li key={list}>{list}</li>)}
// 							</ul>
// 						</Typography>
// 					)}


// 					<Typography sx={{  mt: 'auto', mb: 1 }} variant='h6'> Technologies: </Typography>

// 					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
// 						{technologies.map( technology => (
// 							<Chip key={technology}
// 								label={technology}
// 								variant='outlined'
// 							/>
// 						))}
// 					</Box>

// 					<Box sx={ theme => ({
// 						display: hasCredentials ? 'block' : 'none',
// 						border: `1px solid ${theme.palette.warning.light}`,
// 						py: 1, px: 2,
// 						mt: 4,
// 					})} >
// 						<Typography paragraph >Demo Account: </Typography>
// 						<Box sx={{ display: 'flex', flexDirection: 'column' }}>
// 							<Box>
// 								<Typography color='textSecondary' variant='caption'>Username: </Typography>
// 								<Typography color='textSecondary' variant='caption'>abc@gmail.com</Typography>
// 							</Box>
// 							<Box>
// 								<Typography color='textSecondary' variant='caption'>Password: </Typography>
// 								<Typography color='textSecondary' variant='caption'>asdfasdf</Typography>
// 							</Box>
// 						</Box>
// 					</Box>
// 				</CardContent>

// 				<CardActions sx={{ mt: 2, }}>
// 					<Button variant='outlined' disabled={!websiteUrl.startsWith('http')}>
// 						<Link href={websiteUrl} target='_blank'  style={{ textDecoration: 'none', color: 'inherit' }}>Live</Link>
// 					</Button>

// 					<Button variant='contained' disabled={!videoUrl.startsWith('http')}>
// 						<Link href={videoUrl} target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>Video Demo</Link>
// 					</Button>
// 					<Button variant='contained' disabled={!projectUrl.startsWith('http')}>
// 						<Link href={projectUrl} target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>Code</Link>
// 					</Button>
// 				</CardActions>
// 			</Card>

// 			<Dialog 
// 				open={open}
// 				onClose={closeHandler}
// 			>
// 					<Box sx={{
// 						display: 'flex',
// 						justifyContent: 'flex-end',
// 						pt: 1, pr: 1
// 					}}>
// 						<IconButton size='small' sx={{ color: '#00000066' }} onClick={closeHandler}>
// 							<CloseIcon sx={{ fontSize: 16 }} />
// 						</IconButton>
// 					</Box>

// 				<DialogTitle sx={{ pt: 0, mt: -1 }}>
// 					<Typography variant='h5' color='textSecondary'>{title}</Typography>
// 					<Typography variant='caption' color='textSecondary'>{subheader}</Typography>
// 				</DialogTitle>
// 				<DialogContent>

// 					{/* <Box sx={{ 
// 						position: 'relative', 
// 						width: { xs: 300, sm: 400 },
// 						height: { xs: 150, sm: 200 }
// 					}}>
// 						<Image 
// 							src={coverPhoto}
// 							alt={coverPhoto}
// 							// height={200}
// 							fill
// 						/>
// 					</Box> */}

// 						<Carousel images={images} />
// 				</DialogContent>
// 			</Dialog>
// 		</>
// 	)
// }
// export default Product
