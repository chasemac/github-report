"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
svc.getuserInfo('chasemac', function (user) {
    console.log(user);
});
svc.getRepos('chasemac', function (repos) {
    console.log(repos);
});
