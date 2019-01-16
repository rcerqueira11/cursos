## Wildcards

- A character or string used for pattern matching
- Globbing expands the wildcard patter into a list of files and/or directories. (path)
- Wildcards can be used with most commnads
  - ls
  - rm
  - cp

## * - matches zero or more characters
  - *.txt
  - a*
  - a*.txt

## ? - matches exactly one character
  - ?.txt
  - a?
  - a?.txt

## [] - A character class
- Matches any of the character included between the brackets. Marches exactly one character.
- [aeiou]
- ca[nt]*
  - can
  - cat
  - candy
  - catch

## [!] - Matches any of the characters NOT included between the brackets

- Matches exactly one character.
  - [!aeiou]*
    - baseball
    - cricket

## Character range
- use two characters separated by a hyphen to create a range in a character class
- [a-g]*
  - matches all files that start with a,b,c,d,e,f or g
- [3-6]*
  - Matches all files that start with 3,4,5 or 6

## Named Character Classes

- [[:alpha:]] = alpha letters
- [[:alnum:]] = decimal and alpha
- [[:digit:]] = 0-9
- [[:lower:]] = any lower case
- [[:space:]] = spaces tabs, new line characters
- [[:upper:]] = matcha any upper case

## Matching wildcard patterns

- \ - escape character. Use if you want to match a wildcard character
  - Match all files that en with a question mark:
    - *\?
      - done?