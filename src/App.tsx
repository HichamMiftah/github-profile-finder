import React from 'react';
import GithubProfile from './components/GithubProfile/GithubProfile';

const data = {
	avatar_url: "https://avatars.githubusercontent.com/u/61438673?v=4",
	name: "Hicham MIFTAH",
	login: "HichamMiftah",
	created_at: new Date("2020-02-24T23:34:02Z"),
	bio: "Old programmers never die. They simply give up their resources.\r\n☕️    +    🖥.     =    😇",
	public_repos: 5,
	followers: 2,
	following: 1,
}

function App() {
  return (
    <div className='flex py-14 justify-center min-h-screen'>
      <div className="container">
        <div className="content max-w-4xl mx-auto">
          <GithubProfile />
        </div>
      </div>
    </div>
  );
}

export default App;
