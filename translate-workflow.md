1. test out api key hiding - .env, works
2. register with google cloud for translate api key but don't use it yet
3. create modal for prediction onClick - done but could use some refactoring


3a. make the dropdown menu more dynamic and separate component - getsupported languages with api key

3b. make translated words dynamically adjust with a useEffect and separated async api call logic

3c. write out README process of getting a google api key

4. write debounce function/api call/dummy data

5. test out localStorage for memoizing api calls

6. look for text-to-voice functionality

7. abstract, refactor
- try to separate prediction taable component into presentational parts
https://medium.com/frontend-digest/six-ways-to-get-better-at-react-ccb321a7c35

- translationModal -> instead of select, use a menu:
https://javascript.plainenglish.io/material-ui-links-and-menus-cea96901d650
 https://material-ui.com/components/menus/
- dropdown bugs? https://stackoverflow.com/questions/5569927/change-google-translate-dropdown-programmatically?rq=1
- api call in dropdown working? https://stackoverflow.com/questions/55673496/what-is-the-correct-way-to-call-api-inside-a-modal-when-its-visible-in-react
- design:
https://mui-treasury.com/components/card/
- https://material-ui.com/components/dialogs/#dialog
