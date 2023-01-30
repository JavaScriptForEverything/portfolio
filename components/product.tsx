import Link from 'next/link'

import { useTheme } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Image from 'next/image'


type Props = {
	id?: string,
	slug: string,
	technologies: string[]
	coverPhoto: string,
	title: string,
	subheader: string,
	summary: string,
	websiteUrl: string,
	projectUrl: string
}
const Product = (props: Props) => {
	const { 
		id = '',
		slug,
		technologies, 
		coverPhoto,
		title,
		subheader,
		summary,
		websiteUrl,
		projectUrl,
	} = props

	const theme = useTheme()

	return (
		<>
			<Card>
				<Box sx={{ position: 'relative', height: { xs: 250, sm: 200 }, cursor: 'pointer' }}>
					<Image 
						src={coverPhoto}
						alt={coverPhoto}
						fill
						onClick={() => alert('add modal')}
					/>
				</Box>

				<CardContent>
					<Link href={`/project/${slug}`} style={{
						color: theme.palette.primary.main,
						textDecoration: 'none'
					}}>
						<Typography variant='h5' sx={{ 
							width: 350,
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis'
						}}>{title}</Typography>
					</Link>
					<Typography variant='body2' color='textSecondary' paragraph >{subheader}</Typography>


					<Typography variant='body1' color='textSecondary' align='justify'> {summary} </Typography>

					<Typography sx={{ mt: 2, mb: 1 }} variant='h6'> Technologies: </Typography>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
						{technologies.map( technology => (
							<Chip key={technology}
								label={technology}
								variant='outlined'
								size='small'
							/>
						))}
					</Box>

					<Box sx={ theme => ({
						border: `1px solid ${theme.palette.warning.light}`,
						py: 1, px: 2,
						mt: 4
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
				

				<CardActions sx={{ mt: 2 }}>
					<Link href={websiteUrl} target='_blank' style={{ textDecoration: 'none' }}>
						<Button variant='outlined' disabled={!websiteUrl.trim()}>Live Demo</Button>
					</Link>

					<Link href={projectUrl} target='_blank' style={{ textDecoration: 'none' }}>
						<Button variant='contained' disabled={!projectUrl.trim()}>Source Code</Button>
					</Link>
				</CardActions>
			</Card>
		</>
	)
}
export default Product
