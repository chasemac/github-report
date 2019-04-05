import { GithubApiService } from './GithubApiService'
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService()
svc.getuserInfo('chasemac', (user: User) => {
    console.log(user)
})

svc.getRepos('chasemac', (repos: Repo[]) => {
    console.log(repos)
})