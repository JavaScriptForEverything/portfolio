import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

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
		follower: 200,
		people: '2.0%',
		indicator: true,
		Icon: GitHubIcon, 
		path: 'https://github.com/JavaScriptForEverything' 
	},
	{ 
		label: 'Youtube',
		title: 'Video Channel',
		follower: 800,
		people: '8.0%',
		indicator: true,
		Icon: YouTubeIcon, 
		path: 'https://www.youtube.com/@JavaScriptForEverything' 
	},
	{ 
		label: 'LinkedIn',
		title: 'Social Media',
		follower: 30,
		people: '1.0%',
		indicator: false,
		Icon: LinkedInIcon, 
		path: 'https://www.linkedin.com/in/javascriptforeverything/' 
	},
	{ 
		label: 'Twitter',
		title: 'Social Media',
		follower: 890,
		people: '28.0%',
		indicator: true,
		Icon: TwitterIcon, 
		path: 'https://twitter.com/JSforEverything' 
	},
	{ 
		label: 'Facebook',
		title: 'Social Network',
		follower: 990,
		people: '4.9%',
		indicator: true,
		Icon: FacebookIcon, 
		path: 'https://www.facebook.com/JavaScriptForEverything' 
	},
	{ 
		label: 'Instagram',
		title: 'Social Network',
		follower: 20,
		people: '0.7%',
		indicator: false,
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
								secondary='4k social visitors'
							/>
							<Button color='primary' variant='outlined'>View All</Button>
						</ListItem>
					</List>
					<List>
						{socialMedias.map( ({ label, title, follower, people, Icon, indicator }) => (
							<ListItem key={label} divider dense>
								<ListItemIcon><Icon /></ListItemIcon>
								<ListItemText 
									primary={label}
									secondary={title}
								/>
								<Button color='inherit' size='small' sx={{ fontWeight: 'bold' }} >{follower}</Button>
								<Button 
									color={ indicator ? 'success' : 'error' }
									size='small' 
									startIcon={ indicator ?  <ArrowUpwardIcon fontSize='small' /> :<ArrowDownwardIcon fontSize='small' /> }
									sx={{ backgroundColor: indicator ? green[50] : red[50] }}
								>{people}</Button>
							</ListItem>
						))}
					</List>
				</Box>
		</>
	)
}
export default SocialMeidaList
