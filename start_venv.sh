#!/bin/bash

# run this script using ". start_venv.sh" or "source start_venv.sh"

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/backend/.venv/Scripts/activate"