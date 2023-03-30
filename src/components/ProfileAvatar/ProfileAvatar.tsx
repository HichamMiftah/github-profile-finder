import React, { FC } from 'react';
import { Avatar, Flowbite, CustomFlowbiteTheme } from 'flowbite-react';


interface ProfileAvatarProps {
	image: string;
	full_name: string;
	username: string;
	date_created: Date;
}

const theme: CustomFlowbiteTheme = {
	avatar: {
		root: {      
			rounded: '!rounded-full object-cover',
		}
  } 
};

const ProfileAvatar: FC<ProfileAvatarProps> = ({image, full_name, username, date_created}) => {
	const date = new Intl.DateTimeFormat('en-US', {
	  day: 'numeric',
	  month: 'long',
	  year: 'numeric'
	}).format(date_created);

	return(
		<Flowbite theme={{theme}}>
			<div className='flex justify-between max-w-2xl gap-10'>
			 <Avatar
				img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
				size="xl"
				rounded={true}
			 />
			 <div className="flex-grow my-auto">
				<div className="header flex w-full items-center justify-between mb-2">
				  <h1 className="text-4xl font-bold">{full_name}</h1>
				  <span>{date}</span>
				</div>
				<span>@{username}</span>
			 </div>
			</div>
		</Flowbite>
	);
 };

export default ProfileAvatar;
