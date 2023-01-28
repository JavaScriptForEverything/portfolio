import SocialMedia from '@/components/socialMedia'

import Typography from '@mui/material/Typography'

const SocialMediaComponent = () => {

	return (
		<>
			<SocialMedia />
			<Typography fontSize='small'>
				Copyright &copy; 2018 - {new Date().getFullYear()} JavaScriptForEverything
			</Typography>
		</>
	)
}
export default SocialMediaComponent
