# KoushikBaagh.github.io

</br> https://koushikbaagh.github.io/
</br> Following commands are useful when you want to initialize the "Github Pages" to the build folder instead of "main". Also note that, Since GitHub Pages doesn't allow direct selection of the build folder, we will rename build to docs in the next step.
</br> mkdir docs
</br> cp -r build/\* docs/
</br> git add docs
</br> git commit -m "Copy build contents to docs for GitHub Pages"
</br> git push origin main
