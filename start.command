#!/bin/bash
cd "$(dirname "$0")"
echo "Starting The Margin dev server..."
open http://localhost:3000
npm run dev
