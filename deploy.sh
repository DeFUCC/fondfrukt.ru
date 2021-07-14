cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:DeFUCC/DeFUCC.github.io.git master:master

cd -