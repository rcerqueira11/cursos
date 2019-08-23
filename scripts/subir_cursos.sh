#!/usr/bin/env bash

echo "Git status"
git status

echo "Comentario para el Git"

read -r line || [[ -n "$line" ]]

Comentario="$line"

echo "Git add all"
git add --all

echo "Git commit"
git commit -m "[GRAPHQL] $Comentario"

echo "git push"
git push

echo "Ready ヾ(⌐■_■)ノ"

