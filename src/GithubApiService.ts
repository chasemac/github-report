import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

const OPTIONS: any = {
  headers: {
    'User-Agent': 'request',
  },
  json: true,
};

export class GithubApiService {
  getuserInfo(username: string, cb: (user: User) => any) {
    request.get(
      'https://api.github.com/users/' + username,
      OPTIONS,
      (error: any, response: any, body: any) => {
        let user = new User(body);
        cb(user);
      }
    );
  }

  getRepos(username: string, cb: (repos: Repo[]) => any) {
    request.get(
      'https://api.github.com/users/' + username + '/repos',
      OPTIONS,
      (error: any, response: any, body: any) => {
        let repos = body.map((repo: any) => new Repo(repo));
        cb(repos);
      }
    );
  }
}
