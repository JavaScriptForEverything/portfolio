import Link from 'next/link'
import Box from '@mui/material/Box'
import { socialMediaItems } from '@/data/me'

const SocialMedia = () => {

	return (
		<>
			<Box sx={{display: 'flex', justifyContent:'center', gap: 2, my: 2 }}>
				{socialMediaItems.map(({ Icon, path}, key) => <Link key={key} 
					href={path} 
					passHref 
					style={{ color: 'inherit' }}
					target='_blank'
				>
					<Icon fontSize='large' />
				</Link>
				)}
			</Box>
		</>
	)
}
export default SocialMedia
