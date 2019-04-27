#!/bin/bash
fsorder="/home/work/fs-order"
if [   -f "$fsorder" ];
then
       cd $fsorder
        npm run delete
else
        echo 'no found fsorder'
fi