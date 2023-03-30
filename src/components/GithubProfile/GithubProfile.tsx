import React, { FC } from 'react';
import { Card } from 'flowbite-react';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';


interface GithubProfileProps {}

const GithubProfile: FC<GithubProfileProps> = () => (
  <Card>
    <ProfileAvatar full_name='Hicham Miftah' image='' username='HichamMiftah' date_created={new Date("2020-02-24T23:34:02Z")} />
  </Card>
);

export default GithubProfile;
