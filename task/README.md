# Task

You are presented with a very basic app and tasked to make a couple
of improvements to make the user experience better.

## Installation

Run `npm install` in `/useEffect-demo/task/`;

## Running

Run `npm start` in `/useEffect-demo/task/`;

## Improvement I

After clicking "Convert" there is a delay before the converted amount is displayed.

Let's fix this by displaying "Loading..." in the textbox until the converted
amount is ready to be displayed.

## Improvement II

Clicking is tiresome. Let's help the user by automatically converting the amount
as soon as they finish typing it. Be aware that if you make too many API calls
in a short period of time the server might block your subsequent requests.

Hint: WAIT until the user has not typed for at least a second.
