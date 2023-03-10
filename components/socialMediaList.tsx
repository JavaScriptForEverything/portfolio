import Link from 'next/link'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

import { green, red } from '@mui/material/colors'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'


const socialMedias = [
	{ 
		label: 'Github',
		title: 'Software Development Platform',
		follower: 20,
		people: '.2%',
		Icon: GitHubIcon, 
		path: 'https://github.com/JavaScriptForEverything' 
	},
	{ 
		label: 'Youtube',
		title: 'Video Channel',
		follower: 2,
		people: '0.0%',
		Icon: YouTubeIcon, 
		path: 'https://www.youtube.com/@JavaScriptForEverything' 
	},
	{ 
		label: 'LinkedIn',
		title: 'Social Media',
		follower: 30,
		people: '1.0%',
		Icon: LinkedInIcon, 
		path: 'https://www.linkedin.com/in/javascriptforeverything/' 
	},
	{ 
		label: 'Twitter',
		title: 'Social Media',
		follower: 20,
		people: '.2%',
		Icon: TwitterIcon, 
		path: 'https://twitter.com/JSforEverything' 
	},
	{ 
		label: 'Facebook',
		title: 'Social Network',
		follower: 20,
		people: '0.9%',
		Icon: FacebookIcon, 
		path: 'https://www.facebook.com/JavaScriptForEverything' 
	},
	{ 
		label: 'Instagram',
		title: 'Social Network',
		follower: 20,
		people: '0.7%',
		Icon: InstagramIcon, 
		path: 'https://www.instagram.com/javascriptforeverything/' 
	},
]

const SocialMeidaList = () => {

	return (
		<>
			<Box>
				<List>
					<ListItem>
						<ListItemText 
							primary='Social Network Visits'
							secondary='300 social visitors'
						/>
						<Button color='primary' variant='outlined' disabled>View All</Button>
					</ListItem>
				</List>

				<List>
					{socialMedias.map( ({ label, title, follower, people, Icon, path }) => (
						<ListItem key={label} divider dense>
							<ListItemButton disableGutters component={Link} href={path} target='_blank'>
							<ListItemIcon><Icon /></ListItemIcon>
							<ListItemText 
								primary={label}
								secondary={title}
							/>
							<Button color='inherit' size='small' sx={{ fontWeight: 'bold' }} >{follower}</Button>
							<Button 
								color={ follower >= 20 ? 'success' : 'error' }
								size='small' 
								startIcon={ follower >= 20 ?  <ArrowUpwardIcon fontSize='small' /> :<ArrowDownwardIcon fontSize='small' /> }
								sx={{ backgroundColor: follower >= 20 ? green[50] : red[50] }}
							>{people}</Button>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</>
	)
}
export default SocialMeidaList
