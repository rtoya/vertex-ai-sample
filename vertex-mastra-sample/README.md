# Vertex AI Mastra サンプル

Mastraフレームワークを使用したGoogle Vertex AIによる天気エージェントとワークフローのサンプルです。

## 必要な環境

- Node.js >= 20.9.0
- Vertex AI APIが有効化されたGoogle Cloudプロジェクト
- 有効なGoogle Cloud認証情報
  - vertex-python-sampleのREADME.mdに記載しています。


## 環境変数の設定

1. `.env.sample` を `.env` としてコピーします。
2. `.env` の `GOOGLE_VERTEX_PROJECT=` にプロジェクトIDを設定します。


## 依存関係のインストール

```bash
npm install
```

## 実行

```bash
npm run dev
```
