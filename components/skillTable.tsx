import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import { blue } from '@mui/material/colors'
	
const institute = 'Institute'
const header = ['Tranning Title', 'Topic', institute, 'Duration' ]
const rows = [
	{
		title: 'Backend',
		topics: [ 'Node.js / Express', 'TypeScript', 'Express.js', 'MongoDB/MySQL', 'RESTfull / GraphQL', 'Socket.io' ],
		institute: 'Dream Touch | NGen IT | Bit Encrypt IT ',
		duration: '3 Years'
	},
	{
		title: 'Fronted',
		topics: [ 'React', 'Next.js', 'Redux', 'Tailwind | Material-UI', 'TypeScript', 'Socket.io', 'WebRTC'],
		institute: 'Dream Touch | NGen IT | Bit Encrypt IT',
		duration: '2 Years'
	},
	{
		title: 'Tools',
		topics: [ 
			'Git', 'Docker', 'Kubernetes', 'NginX',
			'Networking (CCNA)', 
			'Linux (Ubuntu, CentOS)', 
			'Virtualization', 
		],
		institute: 'NGen IT | Bit Encrypt IT',
		duration: '1 Years'
	},
]

const SkillsTable = () => {

	return (
		<>
			<Table size='small'>
				<TableHead>
					<TableRow sx={ theme => ({
						backgroundColor: theme.palette.primary.main, 
						'& > th': { 
							whiteSpace: 'nowrap',
							border: `1px solid ${theme.palette.primary.dark}`
						}
					})}>
						{header.map((item, key) => item === institute ? (
							<TableCell key={key} sx={{ 
								color: '#ffffff', 
								fontWeight: 600,
								display: { xs: 'none', sm: 'table-cell' }
							}} >{item} </TableCell>
						) : (
							<TableCell key={key} sx={{ color: '#ffffff', fontWeight: 600 }} >{item} </TableCell>
						))}
					</TableRow>
				</TableHead>
						<TableBody>
						{rows.map( ({ title, topics, institute, duration }, key) => (
						<TableRow key={key} sx={{
							'& > td': { 
								// whiteSpace: 'nowrap',
								border: `1px solid ${blue[100]}`
							}
						}}>
							<TableCell sx={{ fontSize: '1.1em', fontWeight: 'bold', color: blue[900] }}>{title}</TableCell>
							<TableCell>{topics.map( topic => (
								<li key={topic}>{topic}</li>
							))}</TableCell>
							<TableCell sx={{ display: { xs: 'none', sm: 'table-cell' }}}>{institute}</TableCell>
							<TableCell>{duration}</TableCell>

						</TableRow>
						))}


					</TableBody>

			</Table>
		</>
	)
}
export default SkillsTable
