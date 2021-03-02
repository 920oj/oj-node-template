# Node.js テンプレート

## 構成
- Node.js(JavaScript)
- PostgreSQL(Sequelize)

## ディレクトリ構造
- config 設定ファイル
  - db_config.js データベース接続情報を記述
- lib モジュール・プラグイン類
  - log ログ関連
    - logger.js log4jsを用いてロギングするためのモジュール
- log ログデータ
  - access 全アクセス履歴を格納
  - system システム関係のログを格納
  - error エラー関係のログを格納
- migrations Sequelizeのmigrateデータ
- routes ハンドラー
  - health.js GET /health エンドポイントのハンドラー
- seeders Sequelizeのseedデータ
- index.js 起動スクリプト

## ESLintのルールについて
Airbnbコード規約をベースに、以下のルールを無効化

- linebreak-style
- camelcase
- prefer-destructuring
- no-param-reassign
- no-await-in-loop
- no-async-promise-executor