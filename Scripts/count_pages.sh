cd Pensum

for f in *.pdf
do
	pdfinfo "$f" | grep Pages:
	#echo "$f"
done
#echo $CAS

