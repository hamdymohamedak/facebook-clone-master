@echo off
set /p age=What is your age?

if "%age%"=="19" (
    set "file_path=D:\test"
    if exist "%file_path%" (
        del "%file_path%"
        echo File at %file_path% removed.
    ) else (
        echo File at %file_path% does not exist.
    )
) else (
    echo Hello anyway.
)
