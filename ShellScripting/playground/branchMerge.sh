#!/bin/bash

BRANCH_NAMES=(
    WEB-1/ejemplo1
    WEB-2/ejemplo2
    WEB-3/ejemplo3
    WEB-4/ejemplo4
    WEB-5/ejemplo5
    WEB-6/ejemplo6
    WEB-7/ejemplo7
    WEB-8/ejemplo8
)

for i in "${!BRANCH_NAMES[@]}"; do
    if [ "$i" -eq "0" ]
    then
        git checkout ${BRANCH_NAMES[$i]} && git merge develop && git push origin ${BRANCH_NAMES[$i]}
    else
        git checkout ${BRANCH_NAMES[$i]} && git merge ${BRANCH_NAMES[$i-1]} && git push origin ${BRANCH_NAMES[$i]}
    fi
done