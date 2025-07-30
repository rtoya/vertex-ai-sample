# vertex-ai-sample

## 実行前に

### uvのインストール

- [install](https://docs.astral.sh/uv/getting-started/installation/)

### gcloudでのログイン

- [install](https://cloud.google.com/sdk/docs/install?hl=ja)
- [init](https://cloud.google.com/sdk/docs/initializing?hl=ja)


### 環境変数の設定

1. `.env.sample` を `.env` としてコピーします。
2. `.env` の `GOOGLE_CLOUD_PROJECT=` にプロジェクトIDを設定します。


## 実行方法

```sh
uv run --env-file .env python main.py
```
