@echo off
for %%f in (processed_images\*) do (
    set "filename=%%~nf"
    set "newname=!filename:processed_=!"
    copy "%%f" "public\images\furniture\!newname!.png"
)
echo Done
