# 環境変数

## 推奨.envrc

```bash
source_up
export CLOUDSDK_CONFIG=`pwd`/.config
export CLOUDSDK_CORE_PROJECT=your-project-id
PATH_add node_modules/.bin # cliツールのパスを通しておくとnpm runで毎回呼ばないで良い
```

## CLOUDSDK_CORE_PROJECT

- gcloud CLI で使用されるデフォルトプロジェクト名

## GCLOUD_PROJECT

- Google Cloud クライアントライブラリで使用されるデフォルトのプロジェクトを指定する
- jest や firebase emulator 上で実行する場合に admin.initializeApp()で使われる

## GOOGLE_APPLICATION_CREDENTIALS

- `gcloud auth application-default login`で取得した認証情報のパス
- デフォルトなら特に何も指定する必要がないはず？

## CLOUDSDK_CONFIG

- gcloud CLI の設定ファイルのパス
- デフォルトは`~/.config/gcloud`
- `export CLOUDSDK_CONFIG=`pwd`/.config`すると、ローカルディレクトリに認証情報が閉じる

## CLOUDSDK_ACTIVE_CONFIG_NAME

- gcloud CLI の設定ファイルの名前
- デフォルトは`configurations`
- `export CLOUDSDK_ACTIVE_CONFIG_NAME=your-config-name`で指定できる

## Firebase の認証をローカルフォルダに閉じる

- XDG_CONFIG_HOME を変更するのはあまりおすすめできない
- `firebase login:add $GMAIL_ACCOUNT`で端末に認証情報を追加して
- `firebase login:use $GMAIL_ACCOUNT`で認証情報を切り替える
  - `.envrc`にスクリプトを書いておいてもいい

# Firebase プロジェクトのつくりかた

- https://console.firebase.google.com/?hl=ja へ行って新規プロジェクト作成
- firestore を有効にする
- `firebase use --add --alias dev ${GCLOUD_PROJECT}_dev`で dev 環境追加
- `firebase use --add --alias prd ${GCLOUD_PROJECT}_prd`で prd 環境追加
- `firbase init`で firebase 初期化(firebase.json を作る)
  - hosting で github workflow を自動生成させるなら、github~というサービスアカウントが生成されるので、setIamPolicy の role を付与する必要がある

# ToDo

- [x] packages/common フォルダが functions から読める
- [ ] packages/common フォルダが webapp から読める
- [ ] Mantine を入れる
- [ ] Biome を入れる
- [ ] cloudflare workers への discord bot の deploy
