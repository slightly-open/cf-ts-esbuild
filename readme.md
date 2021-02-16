# `cfw-ts-esbuild`

A template to start [Cloudflare worker](https://workers.cloudflare.com/) project
with `typescript`.

Even though Cloudflare does not support bundlers different from [`webpack v4`](https://v4.webpack.js.org/), this template gives for you a speed of [`esbuild`](https://esbuild.github.io/) via [`esbuild-loader`](https://github.com/privatenumber/esbuild-loader).

# Getting Started

This template is meant to be used with [Wrangler](https://github.com/cloudflare/wrangler).
If you are not already familiar with the tool, it's recommended to
check [documentation](https://developers.cloudflare.com/workers/tooling/wrangler/) and [configure it to work](https://developers.cloudflare.com/workers/cli-wrangler) with your [Cloudflare account](https://dash.cloudflare.com).

This template does assume that you have `wrangler` installed locally.
Instead it uses [`npx`](https://www.npmjs.com/package/npx) to run `wrangler` commands.

To generate new project using this template run the following command:

```bash
npx @cloudflare/wrangler generate my-ts-project https://github.com/slightly-open/cfw-ts-esbuild
```

Then you need to configure the project to use you CF account.
NOTE: for all `wrangler` commands you can use [provided shorthand](#npm-run-w)
1. [Authenticate](https://developers.cloudflare.com/workers/cli-wrangler/authentication) your account locally
2. Create empty `.env` file at the root of you repo
    ```bash
    touch .env
    ```
3. Put your account into `.env` file as `CF_ACCOUNT_ID`
    ```
    CF_ACCOUNT_ID=0123456789abcdef0123456789abcdef
    ```

# Scripts

## `npm run dev`

Runs [wrangler's dev command](https://developers.cloudflare.com/workers/cli-wrangler/commands#dev) using dev [environment](https://developers.cloudflare.com/workers/cli-wrangler/configuration#environments).

**⚠️IMPORTANT** when you run your app with `npm run dev` all requests spend your [account's limits](https://developers.cloudflare.com/workers/platform/limits).


## `npm run w`

A shorthand for wrangler. Usage examples:


- get authorized CF account
  ```bash
  npm run w -- whoami
  ```
- [list secrets for dev environment](https://developers.cloudflare.com/workers/cli-wrangler/commands#list)
  ```bash
  npm run w -- secret list --env dev
  ```

# TODO

- [ ] prettier
- [ ] eslint
- [ ] jest
- [ ] pre-commit hooks
- [ ] publish shorthands (staging/production)
