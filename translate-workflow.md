7. abstract, refactor

8. some photo tips might be helpful

9. add pics/gifs to the readme

10.

------- options
need a british accent - en-GB - need to make a British supported Language

filipino? fil-PH? - languageCode: fl

chinese - cmn-CN : zh-cn
cmn-TW : zh-tw

canto? yue-HK? try a button for chinese

---

need to prevent spamming of button

memoize either the base64 encoding or the new Audio
-> see which makes sense both as an operation and for storage. local/session storage can only store strings, so have to go with base64 encoded. indexedDB can store audio...

-> abstract the session Storage object and store languageCode instead of language
{
LC : { word: [translation, audio]},
LC : { another word: [translation, audio]}...
}

looks like ~4m characters for session storage. storing enough base64 encoded audio files might be an issue eventually? dunno.

List of css ideaS:

- take picture btn can mimic apple circle
- photo screen can be fuller
- loading page could have some interaction? particles?
