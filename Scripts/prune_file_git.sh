GIT_PATH_TO_FILE="$1"
echo "$GIT_PATH_TO_FILE"
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch $GIT_PATH_TO_FILE' --prune-empty --tag-name-filter cat -- --all