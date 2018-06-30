read -p "Introduce name of file: " FILE_NAME
if [ -d $FILE_NAME ]
then
	echo "its a folder"
elif [ -f $FILE_NAME ]
then
	echo "its a regular file"
else
	echo "its other type of file"
fi
