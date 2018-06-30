if [ -e /etc/shadow ]
then
	echo "Shadow passwords are enabled"
fi

if [ -r /etc/shadow ]
then
	echo "You have permissions to edit /etc/shadow"
else
	echo "You DONT have permissions to edit /etc/shadow"
fi
