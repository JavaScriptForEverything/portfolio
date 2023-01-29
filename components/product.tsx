import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Link from 'next/link'


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

	return (
		<>
			<Card>
				<Link href={`/project/${slug}`}>
					<CardMedia 
						component='img'
						src={coverPhoto}
						alt={coverPhoto}
					/>
				</Link>
				<CardHeader 
					title={title}
					subheader={subheader}
					sx={{ pb: 0 }}
				/>
				<CardContent >
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
					<Link href={websiteUrl}>
						<Button variant='outlined' disabled={!websiteUrl.trim()}>Live Demo</Button>
					</Link>

					<Link href={projectUrl}>
						<Button variant='contained' disabled={!projectUrl.trim()}>Source Code</Button>
					</Link>
				</CardActions>
			</Card>
		</>
	)
}
export default Product
