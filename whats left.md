7. abstract, refactor

List of css ideaS:

- take picture btn can mimic apple circle
- photo screen can be fuller
- loading page could have some interaction? particles?

8. google cloud vision api?
9. speech to text / speech commands

- slight fix
  there seems to be a bug. training knn will cause it to only classify whatever i took the most pictures of and trained and apply it to ALL photos
  maybe something wrt to classIndex?

labelToClassId seems to be the order of items categorized 0-indexed
labelToClassId also doesn't seem to be saving and reloading properly in the classifier
