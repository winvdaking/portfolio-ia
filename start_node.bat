@echo off
rem --- Configuration des chemins ---
set "NODEJS_PATH=C:\Users\dorian.lopez\OneDrive - Association Cesi Viacesi mail\Documents\node-v22.17.1-win-x64"
set "PROJECT_PATH=C:\Users\dorian.lopez\OneDrive - Association Cesi Viacesi mail\Documents\Dev\portfolio-main\"

rem --- Modification du PATH pour cette session ---
set "PATH=%NODEJS_PATH%;%PATH%"
cd /d "%PROJECT_PATH%"

rem --- Verification des versions ---
echo --- Verification des versions ---
node -v
npm -v
echo -----------------------------
echo.

rem --- Installation de pnpm avec la bonne version de npm ---
echo --- Installation/Mise a jour de pnpm... ---
npm install -g pnpm
echo ----------------------------------------
echo.

rem --- Lancement de l'application ---
echo --- Lancement du serveur de developpement... ---
pnpm dev

pause