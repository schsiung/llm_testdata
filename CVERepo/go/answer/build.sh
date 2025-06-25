#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if wire and mockgen are installed
if ! command_exists wire || ! command_exists mockgen; then
    echo "wire or mockgen is not installed. Installing..."
    make check
fi

# Run the commands in sequence
echo "Generating code..."
make generate

echo "Installing frontend dependencies and building..."
make ui

echo "Installing backend dependencies and building..."
make build

echo "Build process completed."