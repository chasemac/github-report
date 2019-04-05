import { GithubApiService } from './GithubApiService';
import * as _ from 'lodash';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();
svc.getuserInfo('chasemac', (user: User) => {
  svc.getRepos('chasemac', (repos: Repo[]) => {
    let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
    let filteredRepos = _.take(sortedRepos, 5);
    user.repos = filteredRepos;
    console.log(user);
  });
});
