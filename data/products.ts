export const products = [
	{
		id: '63691e3748954b433be5ecdd',
		slug: 'messenger-clone',
		coverPhoto: '/images/projects/messenger/file-upload-progress-bar.png',
		images: [
			'/images/projects/messenger/active-users.png',
			'/images/projects/messenger/call-busy-dialog-on-engaged-user.png',
			'/images/projects/messenger/called-engaged.png',
			'/images/projects/messenger/callee-side-incomming-call.png',
			'/images/projects/messenger/caller-or-callee-side-error-call.png',
			'/images/projects/messenger/caller-side-outgoing-call.png',
			'/images/projects/messenger/complete-large-file-shared.png',
			'/images/projects/messenger/home-page-drag-and-drop-and-emoji-message-dialog.png',
			'/images/projects/messenger/home-page.png',
			'/images/projects/messenger/home-page-search-firends.png',
			'/images/projects/messenger/home-page-search-message.png',
			'/images/projects/messenger/home-page-search-people.png',
			'/images/projects/messenger/image-upload-crop-and-image-slide.png',
			'/images/projects/messenger/image-upload.png',
			'/images/projects/messenger/incomming-outgoing-dialog.png',
			'/images/projects/messenger/profile-page.png',
			'/images/projects/messenger/start-larg-file-sharing.png',
		],

		title: 'Messenger | Full-Stack ( Node.js, Socket.IO, WebRTC )',
		subheader: 'Chatting | Audio or Video Calling | File Sharing',
		summary: `
			It is a chatting application, which allows realtime text, emoji, image, audio messages.
			which also allows to share large files (upto 2GB) via secure tunnel via webRTC dataChannel (peer-to-peer connection).
			Shows uploading progress-bar in caller-side and downloading percentage in callee-side.	
		`,
		lists: [
			'Text, Emoji, Image and Audio messaging',
			'Follow or Unfollow friends',
			'Audio and Video Calling',
			'Large File Sharing via secure tunnel',
			'Image Image Croping and Resizing',
			'Searching Friends, Users and Messages',
			'Cookie Based Authenication',
		],
		technologies: [
			'Node.js', 
			'WebRTC',
			'Socket.io',
			'MongoDB',
			'Tailwind-css',
			'Service-Worker',
			'pug',
		],
		hasCredentials: false,
		websiteUrl: 'https://messenger-1-73xb.onrender.com/',
		projectUrl: 'https://github.com/JavaScriptForEverything/messenger',
		videoUrl: 'https://youtu.be/uQtPaz1XYVE'
	},
	{
		id: '63691d3748944b433ce5ecdd',
		slug: 'twitter-clone',
		coverPhoto: '/images/projects/twitter-clone/cover-photo.png',
		images: [
			'/images/projects/twitter-clone/cover-photo.png',
			'/images/projects/twitter-clone/chat-page.png',
			'/images/projects/twitter-clone/emoji.png',
			'/images/projects/twitter-clone/group-chat-1.png',
			'/images/projects/twitter-clone/group-chat-reply.png',
			'/images/projects/twitter-clone/home_page.png',
			'/images/projects/twitter-clone/muli-user.png',
			'/images/projects/twitter-clone/notification-page.png',
			'/images/projects/twitter-clone/reply-tweet.png',
			'/images/projects/twitter-clone/searching-result.png',
			'/images/projects/twitter-clone/search-page.png',
			'/images/projects/twitter-clone/search-tweets.png',
			'/images/projects/twitter-clone/sing-chat-2.png',
			'/images/projects/twitter-clone/sing-chat.png',
			'/images/projects/twitter-clone/tweet-details-page.png',
		],
		title: 'Twitter Clone | Full-Stack ( Node.js, Socket.IO)',
		subheader: 'Social-Media Application | Chatting | Post & Comments',
		summary: `
		It is a Social media app like twitter which allows to create tweet, commnents on others tweet, 
		like/unlike tweets. & follow and unfollow friends and upload photos and also has private and group chats with notifications.
		`,
		lists: [
			'Tweets, retweets and comments.',
			'Add comments, like, unlike and deleting (self comments)',
			'Private Chats',
			'Group Chats',
			'Image Image Croping and Resizing',
			'Searching Friends, Users and Messages',
			'Session Based Authenication',
		],
		technologies: [
			'Node.js',
			'Socket.io',
			'MongoDB',
			'Tailwind-css',
			'pug',
		],
		hasCredentials: false,
		websiteUrl: 'https://twitter-clone-06nd.onrender.com/',
		projectUrl: 'https://github.com/JavaScriptForEverything/twitter-clone',
		videoUrl: 'https://youtu.be/pSLaFQgS7qQ'
	},
	{
		id: '63691d3748344b433ce5ecdd',
		slug: 'webrtc-video-calling-and-messaging-application',
		coverPhoto: '/images/projects/webrtc/cover-photo.png',
		images: [
			'/images/projects/webrtc/01_home-page-desktop-view.png',
			'/images/projects/webrtc/02_home-page-mobile-view-with-panel.png',
			'/images/projects/webrtc/03_home-page-mobile-view-hide-panel.png.png',
			'/images/projects/webrtc/04_caller-side-desktop-view.png',
			'/images/projects/webrtc/05_callee-side-mobile-view.png',
			'/images/projects/webrtc/06_reject-view.png',
			'/images/projects/webrtc/07_reject-view.png',
			'/images/projects/webrtc/08_accept-view.png',
			'/images/projects/webrtc/09_accept-view.png',
			'/images/projects/webrtc/10_typing_message.png',
			'/images/projects/webrtc/11_messaging view.png',
			'/images/projects/webrtc/12_screen-sharing.png',
			'/images/projects/webrtc/13_screen-sharing.png',
			'/images/projects/webrtc/14_recording.png',
			'/images/projects/webrtc/15_play_recording_video.png',
			'/images/projects/webrtc/16_error-handling-view.png',

		],
		title: 'Video Call + Messaging | Socket.io, WebRTC, Express, pug, Tailwind-css | Full-Stack',
		subheader: 'Video-chat Application',
		summary: `
			It is a chatting application between user via WebRTC technology
			socket.io used only as STUN server but data communication happend
			via end-to-end browser (behind the NAT networking).
			as websocket (socket.io) or AJAX (fetch or XMLHTTPRequest) is client-server
			architracture while WebRTC is client-to-client architracture. so we can send any
			large number data between users without any restriction or limitation and alsow support
			data channel security, it also support both TCP and UDP protocol.
			...
		`,
		technologies: [
			'WebRTC',
			'Socket.io',
			'Node, Express',
			'pug',
			'Tailwind-css',
		],
		hasCredentials: false,
		websiteUrl: 'https://webrtc-video-call-yt6x.onrender.com/',
		projectUrl: 'https://github.com/JavaScriptForEverything/webrtc',
		videoUrl: 'https://youtu.be/67tf9qnA1Bg'
	},
	{
		id: '63691d3748944b433cc5ecdc',
		slug: 'front-end-coding-challange',
		coverPhoto: '/images/projects/rick-and-morty/cover-photo.png',
		images: [
			'/images/projects/rick-and-morty/cover-photo.png',
			'/images/projects/rick-and-morty/images-1.png',
			'/images/projects/rick-and-morty/images-2.png',
			'/images/projects/rick-and-morty/images-3.png',
			'/images/projects/rick-and-morty/images-4.png',
			'/images/projects/rick-and-morty/images-5.png',
			'/images/projects/rick-and-morty/images-6.png',
			// '/images/projects/rick-and-morty/web_2_cast-page.png',
			// '/images/projects/rick-and-morty/web_3_cast-details-page.png',
		],
		title: 'Top Coder Challange | Lemon Hive',
		subheader: 'Front-End Development Challange',
		summary: `
			Top Coder Challenge 2022!  Dear Contestant, Congratulations on your 
			success in the Lemon Hive Top Coder Challenge 2022! We are pleased 
			to present you with a certificate commemorating your achievement.  
			Attached to this email, you will find a copy of your certificate, 
			as well as a selection of photos from the event. We hope that these 
			memories will serve as a reminder of your hard work and dedication. 
			We hope you will enjoy looking back on these memories and sharing 
			them with your friends and family.
		`,
		technologies: [
			'React',
			'Redux',
			'Material-UI',
			'REST API ',
			'TypeScript',
			'MERN Stack',
		],
		hasCredentials: false,
		websiteUrl: 'https://rick-and-morty-ts.netlify.app/',
		projectUrl: 'https://github.com/JavaScriptForEverything/rick-and-morty',
		videoUrl: 'https://youtu.be/VP_qh7fVLu4'
	},
	{
		id: '63691d3748944b433cc5ecda',
		slug: 'shopping-showroom',
		coverPhoto: '/images/projects/shop-next-ts-graphql/cover-photo.png',
		images: [
		 	'/images/projects/shop-next-ts-graphql/cover-photo.png',
			'/images/projects/shop-next-ts-graphql/carousel.png',
			'/images/projects/shop-next-ts-graphql/images-1.png',
			'/images/projects/shop-next-ts-graphql/images-2.png',
			'/images/projects/shop-next-ts-graphql/images-3.png',
			'/images/projects/shop-next-ts-graphql/images-4.png',
			'/images/projects/shop-next-ts-graphql/images-5.png',
			'/images/projects/shop-next-ts-graphql/images-6.png',
			'/images/projects/shop-next-ts-graphql/images-7.png',
			'/images/projects/shop-next-ts-graphql/images-8.png',
			'/images/projects/shop-next-ts-graphql/images-9.png',
			'/images/projects/shop-next-ts-graphql/images-10.png',
			'/images/projects/shop-next-ts-graphql/images-11.png',
			'/images/projects/shop-next-ts-graphql/images-12.png',
			'/images/projects/shop-next-ts-graphql/images-13.png',
			'/images/projects/shop-next-ts-graphql/images-14.png',
			'/images/projects/shop-next-ts-graphql/images-15.png',
		],
		title: 'Shopping Showroom',
		subheader: 'E-Commerce',
		summary: `
			Hi there, it is a e-commerse applications same as 'Next-Amazona' project,
			only difference is that here used TypeScript instead of JavaScript, and
			GraphQL instead of REST API. It has user dashboard, authentication via
			JWT web token, forget password with email validation, and payment via Stripe.
			beside it is fully responsive and user-friendly UI, to design used the Material-UI
			framework for UX/UI design concept in mind.
		`,
		technologies: [
			'Next.js',
			'TypeScript',
			'GraphQL',
			'Redux',
			'Serverless API',
			'MongoDB',
			'Stripe ',
			'Nodemailer',
		],
		hasCredentials: true,
		websiteUrl: '',
		projectUrl: 'https://github.com/JavaScriptForEverything/shop-next-ts-graphql',
		videoUrl: 'https://youtu.be/dQNSk3s1eQk'
	},
	{
		id: '63691d3748944b433cc5ecdb',
		slug: 'next-amazona-shopping-app',
		coverPhoto: '/images/projects/next-amazona/cover-photo.png',
		images: [
		 	'/images/projects/next-amazona/cover-photo.png',
		 	'/images/projects/next-amazona/images-1.png',
		 	'/images/projects/next-amazona/images-2.png',
		 	'/images/projects/next-amazona/images-3.png',
		 	'/images/projects/next-amazona/images-4.png',
		 	'/images/projects/next-amazona/images-5.png',
		 	'/images/projects/next-amazona/images-6.png',
		 	'/images/projects/next-amazona/images-7.png',
		 	'/images/projects/next-amazona/images-8.png',
		 	'/images/projects/next-amazona/images-9.png',
		 	'/images/projects/next-amazona/images-10.png',
		 	'/images/projects/next-amazona/images-11.png',
		 	'/images/projects/next-amazona/images-12.png',
		 	'/images/projects/next-amazona/images-13.png',
		 	'/images/projects/next-amazona/images-14.png',
		 	'/images/projects/next-amazona/images-15.png',
		 	'/images/projects/next-amazona/images-16.png',
		 	'/images/projects/next-amazona/images-17.png',
		 	'/images/projects/next-amazona/images-18.png',
		 	'/images/projects/next-amazona/images-19.png',
		 	'/images/projects/next-amazona/images-20.png',
		],
		title: 'Next Amazona',
		subheader: 'E-Commerce',
		summary: `
			This is my first server side rendering web application, which is fully 
			functional and user-friendly UI. The technologies used in this project are
			JavaScript, REST API, Material-UI, Redux-Toolkit, Git...
			It has user dashboard, authentication via JWT web token, forget password with email 
			validation, and payment via Stripe.  beside it is fully responsive and user-friendly UI, 
			to design used the Material-UI framework for UX/UI design concept in mind.
		`,
		technologies: [
			'Next.js',
			'REST API',
			'Redux',
			'Serverless API',
			'MongoDB',
			'Stripe ',
		],
		hasCredentials: true,
		websiteUrl: '',
		projectUrl: 'https://github.com/JavaScriptForEverything/next-amazona',
		videoUrl: ''
	},
]