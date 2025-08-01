# Vertex AI サンプル

Google Cloud Vertex AI を試すためのサンプルプロジェクトです。

## 前提条件

- Python 3.8以上
- Google Cloud SDK (`gcloud`)
- uv (Pythonパッケージマネージャー)

## セットアップ

1. uvをインストールしていない場合はインストール:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

2. プロジェクトの依存関係をインストール:
```bash
uv sync
```

3. Google Cloudで認証:
```bash
gcloud auth login
gcloud auth application-default login
```

4. Google Cloudプロジェクトを設定:
```bash
export GOOGLE_CLOUD_PROJECT="your-project-id"
```

## 使い方

Vertex AIのサンプルコードを追加して、このセクションを使用方法で更新してください。

## プロジェクト構成

```
vertex-ai-sample/
├── .gitignore
├── pyproject.toml
├── uv.lock
└── README.md
```

## ライセンス

[ライセンス情報をここに追加]