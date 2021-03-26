# SmartRent Full-Stack Engineering Challenge

## Welcome
First of all, welcome to our full-stack engineering challenge!

If you've made it this far, we are already interested in you. This challenge is not meant to trip you up, it's
designed for us to better learn where your technical skills lie and understand how you solve problems that might
come up in a day-to-day real world application.

## Coding Challenge
For this coding challenge, you will be working on both the backend of the application and the frontend of the application.

### Guidelines
- Use the languages you feel most comfortable in
- Refer to Google or documentation as needed
- Ask your interviewer for a tip if you get stuck and can't figure out how to proceed

### Project Description
We are asking you to use a JSON blob that represents a list of fruit, return it from a backend API and then
to create a list in the UI that shows the fruit name, their color, and whether or not they are in season.

You should be able to filter the fruit by querystring to show only fruit of a certain color, AND OR
whether the fruit is in season or not.

### Tasks

1. Create your backend webserver
1. Create an API that returns the JSON blob found below
1. Create a simple frontend that fetches the list of fruit from your backend API and loads it into the application state
1. In a list, render the names of the fruit, their colors, and whether or not they are in season or not
1. In the query string allow the user to filter fruit by:
    1. In season or not (`in_season`)
    1. Their color (`color`)
    1. Partial search on name (can be anywhere within the string) (`name`) (example: `app` => `apple`); other examples would be `APP` or `aPp`
1. Ability to change the querystring filters from the UI

### JSON Fruit List
```json
[
    {
        "name": "Apple",
        "colors": ["red", "green", "yellow"],
        "in_season": true
    },
    {
        "name": "Orange",
        "colors": ["orange"],
        "in_season": true
    },
    {
        "name": "Grapes",
        "colors": ["purple", "green"],
        "in_season": false
    },
    {
        "name": "Lime",
        "colors": ["green"],
        "in_season": false
    },
    {
        "name": "Banana",
        "colors": ["yellow",
        "in_season": false
    },
    {
        "name": "Watermelon",
        "colors": ["red"],
        "in_season": false
    },
    {
        "name": "Blueberry",
        "colors": ["blue"],
        "in_season": true
    },
    {
        "name": "Coconut",
        "colors": ["white"],
        "in_season": true
    }
]
```

### Examples

**Filtering by Color / in Season / Name:**
```
Example 1: /fruit?color=red
Example 2: /fruit?in_season=true
Example 3: /fruit?color=red&in_season=true
Example 4: /fruit?name=app
```