# Angular - WordPress Project

This is the Angular code used to generate a simple tic-tac-toe game. Its
purpose is to show how a block of code written in Angular produces files through the build process that can be easily dropped into a WordPress project. 

We used the same ideas to build a larger project for our website covering personal finance, student loans and mortgages. You can see here the working example of our [loan and mortgage calculator with a sample payoff strategy](https://theloanrobot.com/see-an-example-payoff-shared).

## To get started with the example:

1) To try things out, first make sure you've installed the Angular CLI. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1. 

2) Then clone this repo, or download the zip file. 

3) Next, cd into the root directory of the project and run "npm install".



## To run it as a standalone Angular project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## To build the files needed to "drop in" to a WordPress project

Run `ng build --prod --output-hashing=none` to build the project files as seen in the tutorial. The build files will be stored in the `dist/` directory. 

Add these files into your WordPress project (e.g., in a child theme). The simply type 

```
<app-root></app-root>

<link href="www.your-wp-site.com/wp-content/themes/your-theme/tic-tac-toe/styles.bundle.css" rel="stylesheet" />
<script type="text/javascript" src="www.your-wp-site.com/wp-content/themes/your-theme/tic-tac-toe/inline.bundle.js"></script>
<script type="text/javascript" src="www.your-wp-site.com/wp-content/themes/your-theme/tic-tac-toe/polyfills.bundle.js"></script>
<script type="text/javascript" src="www.your-wp-site.com/wp-content/themes/your-theme/tic-tac-toe/main.bundle.js"></script>
```


in the text tab of your WordPress editor, and that's where the tic-tac-toe game will appear on the frontend. (This is just a quick way to incorporate the game files, not the recommended approach for a serious project.)


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
