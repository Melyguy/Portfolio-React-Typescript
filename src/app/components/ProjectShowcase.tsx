
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
      <div className='w-[80vw] h-80 m-5 group  flex bg-neutral-900/80 border border-white shadow-md rounded-xl'>
       <li key={repo.id} className="">
        <div className='w-[80vw] h-10 p-2 bg-neutral-400/20 rounded-t-xl-center border border-white/20'>
          <a href={repo.html_url} target='/'>
            <h1 className='font-bold text-white'>{repo.name}</h1>
          </a>
        </div>
            <h1 className='font-semiboldbold text-white ml-2'>{repo.language}</h1>
            <h1 className='font-bold text-white ml-1'>⭐: {repo.stargazers_count}</h1>
        </li>
      </div>
        ))}

      </ul>

        

    </div>
  );
}