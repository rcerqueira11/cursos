git pull 

echo "Comentario para el Git"

read -r line || [[ -n "$line" ]]

Comentario="$line"

echo "Git status"
git status

echo "Git add all"
git add --all

echo "Git commit"
git commit -m "$Comentario"

git push
