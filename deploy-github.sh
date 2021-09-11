rm -rf docs-dist &&

yarn docs:build &&

cd docs-dist &&

git init &&

git add . &&

git commit -m "deploy" &&

git branch -M gh-pages &&


git remote add origin git@github.com:nwkami5010/react-liyueUI.git  &&
git push -f -u origin gh-pages &&

cd -

echo
https://nwkami5010.github.io/react-liyueUI/
