
'use client';

import { useEffect, useState } from 'react';
import {fetchGitHubRepos} from '../../../lib/github';
import { Repo } from '../../../lib/github';

export default function ProjectShowcase() {
  const [repo, setRepo] = useState<Repo[]>([]);

  useEffect(() => {
    fetchGitHubRepos().then(setRepo);
  }, []);

  return (
    <div className="w-full h-full bg-neutral-100 flex flex-col gap-8 items-center justify-center p-10">
      <ul>
        {repo.map((repo) => (
      <div key={repo.id} className='w-[80vw] h-80 m-5 group  flex bg-neutral-900/80 border border-white shadow-md rounded-xl'>
       <li className="">
<div className="w-[80vw] h-12 px-4 bg-neutral-400/20 border border-white/20 rounded-t-xl flex items-center justify-between">
  <a href={repo.html_url} target="_blank" rel="noreferrer">
    <h1 className="font-bold text-white text-lg">
      {repo.name}
    </h1>
  </a>
  <div className="flex items-center gap-2">
    <h1 className="font-semibold text-white text-sm">
      {repo.owner.login}
    </h1>
    <a href={repo.owner.html_url} target="_blank" rel="noreferrer">
    <img
      src={repo.owner.avatar_url}
      alt={repo.owner.login}
      className="w-7 h-7 rounded-full"
    />
    </a>
  </div>

</div>

            <h1 className='font-semibold text-white ml-2'>{repo.language}</h1>
            <h1 className=' text-white ml-1'>⭐: {repo.stargazers_count}</h1>
            <div className='p-5 h-1/2 w-full flex items-center justify-center'>
              <p className='text-white text-sm'>{repo.description}</p>
            </div>
        </li> 
      </div>
        ))}

      </ul>

        

    </div>
  );
}