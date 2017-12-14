# In directories
find -name "* *" -type d | rename 's/ /_/g'    
# In files
find -name "* *" -type f | rename 's/ /_/g'