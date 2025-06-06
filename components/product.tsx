import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import { useTheme } from '@mui/material/styles'
import Carousel from './carousel'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'

import CloseIcon from '@mui/icons-material/Close'

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
const Product = (props: Props) => {
	const { 
		id = '',
		slug,
		lists, 
		technologies, 
		coverPhoto,
		images,
		title,
		subheader,
		summary,
		hasCredentials,
		websiteUrl,
		projectUrl,
		videoUrl,
	} = props

	const theme = useTheme()
	const [ open, setOpen ] = useState(false)

	const closeHandler = () => {
		setOpen(false)
	}

	return (
		<>
			<Card sx={{ display: 'flex', flexDirection: 'column' }}>
				<Box sx={{ position: 'relative', height: { xs: 250, sm: 200 }, cursor: 'pointer' }}>
					<Image 
						src={coverPhoto}
						alt={coverPhoto}
						fill
						onClick={() => setOpen(true)}
					/>
				</Box>

				<CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', }}>
					<Link href={videoUrl} target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
						<Typography variant='h5' color='primary' sx={{ 
							width: 300,
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis'
						}}>{title}</Typography>
					</Link>

					<Typography variant='body2' color='textSecondary' paragraph sx={{ 
							width: 300,
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis'
						}} >{subheader}</Typography>
					<Typography variant='body1' color='textSecondary' paragraph align='justify' > {summary} </Typography>

					{lists && (
						<Typography component='div' sx={{  mt: -2, mb: 2, }} variant='body2' color='textSecondary'>
							<ul style={{ 
								paddingBlock: '8px',
								listStyleType: 'square', 
								backgroundColor: '#d5e5fb44'
								}}>
								{lists.map( list => <li key={list}>{list}</li>)}
							</ul>
						</Typography>
					)}


					<Typography sx={{  mt: 'auto', mb: 1 }} variant='h6'> Technologies: </Typography>

					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
						{technologies.map( technology => (
							<Chip key={technology}
								label={technology}
								variant='outlined'
							/>
						))}
					</Box>

					<Box sx={ theme => ({
						display: hasCredentials ? 'block' : 'none',
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

				<CardActions sx={{ mt: 2, }}>
					<Button variant='outlined' disabled={!websiteUrl.startsWith('http')}>
						<Link href={websiteUrl} target='_blank'  style={{ textDecoration: 'none', color: 'inherit' }}>Live</Link>
					</Button>

					<Button variant='contained' disabled={!videoUrl.startsWith('http')}>
						<Link href={videoUrl} target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>Video Demo</Link>
					</Button>
					<Button variant='contained' disabled={!projectUrl.startsWith('http')}>
						<Link href={projectUrl} target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>Code</Link>
					</Button>
				</CardActions>
			</Card>

			<Dialog 
				open={open}
				onClose={closeHandler}
			>
					<Box sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						pt: 1, pr: 1
					}}>
						<IconButton size='small' sx={{ color: '#00000066' }} onClick={closeHandler}>
							<CloseIcon sx={{ fontSize: 16 }} />
						</IconButton>
					</Box>

				<DialogTitle sx={{ pt: 0, mt: -1 }}>
					<Typography variant='h5' color='textSecondary'>{title}</Typography>
					<Typography variant='caption' color='textSecondary'>{subheader}</Typography>
				</DialogTitle>
				<DialogContent>

					{/* <Box sx={{ 
						position: 'relative', 
						width: { xs: 300, sm: 400 },
						height: { xs: 150, sm: 200 }
					}}>
						<Image 
							src={coverPhoto}
							alt={coverPhoto}
							// height={200}
							fill
						/>
					</Box> */}

						<Carousel images={images} />
				</DialogContent>
			</Dialog>
		</>
	)
}
export default Product
