#!/bin/bash

TEST=(
    WEB-1905/general
    WEB-1906/create_controller
    WEB-1907/partial_quick_form
    WEB-1908/partial_form
    WEB-1909/partial_index
    WEB-1910/delete_soft
    WEB-1911/translate_module
    WEB-1912/search_form
    WEB-1913/download_excel
    WEB-1914/import_excel
)

for i in "${!TEST[@]}"; do
    if [ "$i" -eq "0" ]
    then
        git checkout ${TEST[$i]} && git merge develop && git push
    else
        git checkout ${TEST[$i]} && git merge ${TEST[$i-1]} && git push
    fi
done