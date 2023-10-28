# Frontend

## 環境構築

### Node Version

- `18.x`
- nvmで管理すると便利です。

### 設定値取り込み

`front` 配下で実施

`pwd`

`> KinmuStamp/front`

.envファイルを作成します

`cp .env.example .env`

Slackの認証URIを設定します

`https://slack.com/oauth/v2/authorize?client_id=2085093365168.6109733478129&scope=channels:history,channels:write.invites,incoming-webhook,users:read,groups:history,groups:write.invites&user_scope=`

```.env:.env
NEXT_PUBLIC_SERVICE_NAME="KinmuStamp"
NEXT_PUBLIC_SLACK_AUTH_URI="Slackの認証URI"
NEXT_PUBLIC_PC_BREAK_POINT=900
```

### Package取り込み

- npmパッケージの取り込みを行います `npm ci`
- 一通りのコマンドが動作することを確認します
  - `npm run build`
  - `npm run lint`
  - `npm run dev`
  - `npm run start`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
