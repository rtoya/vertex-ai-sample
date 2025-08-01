#!/usr/bin/env python3
"""
Gemini API with Application Default Credentials (ADC) - Minimal Example
"""

import os
from google.genai import Client

GOOGLE_CLOUD_PROJECT=os.getenv("GOOGLE_CLOUD_PROJECT", "hoge")
GOOGLE_CLOUD_LOCATION=os.getenv("GOOGLE_CLOUD_LOCATION", "asia-northeast1")

client = Client(
    vertexai=True,
    project=GOOGLE_CLOUD_PROJECT,
    location=GOOGLE_CLOUD_LOCATION
)

response = client.models.generate_content(
    model="gemini-1.5-flash",
    contents="最新のPythonについて簡単にまとめて"
)

print(response.text)
