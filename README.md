# typescriptForYellows
1) L'installation ( débrouiller vous :D )
https://www.typescriptlang.org/download
npm i -g typescript@latest

2) let's code Typescript:
Créer un fichier index.ts

3) Transpiler notre code:
tsc index.ts ( ou npx tsc index.ts )
l'output c'est un fichier .js:
index.js

4) watch mode:
tsc -w
excuté ce code pour tester l'erreur en temps réel:
console.log(math.floor(2.3));

5) configuration:
tsc --init
ça va permettre de créer le fichier tsconfig.json

6) play with config:
Changer la root directory sous src:
"rootDir": "./src"

changer le dossier distination (ou les fichiers compilé seront placés):
 "outDir": "./dist" 

7) - Statically vs Dynamically Typed Languages
exemple d'erreur lors de l'excution