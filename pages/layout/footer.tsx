import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Footer = () => {

	return (
		<Box sx={ theme => ({
			mt: 20,
			// py: 1,
			borderTop: `1px solid gray`,
			// borderTop: `1px solid ${theme.palette.divider}`,
			backgroundColor: '#00000044'
		})}>
			<Container>
				<Typography>Footer</Typography>
			</Container>
		</Box>
	)
}
export default Footer
