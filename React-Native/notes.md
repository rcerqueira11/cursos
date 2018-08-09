## [FIX] Plugin/Preset files are not allowed to export objects, only functions.

react-native seems to require installing versions of react-native, react, and expo that are all specifically compatible with each other

> Each version of these dependencies is only compatible with a narrow version range of the other two.


The most recent react-native version that is documented is react-native@0.55 (to go with react@16.3.1 and expo@27.0.0)

[Versions Matriz](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md)

```json

"dependencies": {
    ...
    "expo": "27.0.0",
    "react": "16.3.1",
    "react-native": "^0.55.0"
}

```