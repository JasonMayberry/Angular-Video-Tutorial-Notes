# Starting an Angular from scratch
## Angular In 60 Minutes  https://www.youtube.com/watch?v=KhzGSHNhnbI
### By Traversy Media www.traversymedia.com  

If the Angular CLI is not already instaled, install it with:
### npm install -g @angular/cli

Then:
### cd ~/Desktop/
### mkdir ng-app
### cd ng-app/
### ng new a4app

Wait for it!... Done
Now:
### cd a4app
### ng serve

If your angular app Compiled successfully you 
can now view it on:  **http://localhost:4200/**

Now that we have a server running in that terminal
it is time to put it to the side and set up a nice workstation.

In another terminal instance: 
### cd ~/Desktop/ng-app/a4app/
and
Drag the ng-app folder into a text editor.
Then expand the src folder. 
The src folder is what we will focus on.

Take a look at the app/app.module.ts file.
When we create or add add any thing we need to
bring it into the app.module.ts file.
Think of it as the meeting place for everything
in an Angular app.

The app.component.spec.ts file is for testing
so no need to pay attention to that right now.

So... now we can focus on the 3 files left in the app folder.
1. app.component.css
2. app.component.html
3. app.component.ts
The territory should feel a little more familiar now.

# We can add new nested components by: 
creating a new folder in the app folder named components 
and then running this:
### ng g component components/user
or
### ng g component components/about



# We can create a new service by doing this:
(**If** your pwd is the main app folder)
### cd src/app
### mkdir services
### cd ../..
### ng g service services/data
Everything is done audomaticly except adding it to the
app.module.ts file. We have to do that manualy by adding:
***import { DataService } from './services/data.service';***
And then we just need to report it as a provider.
Remember services are providers!
***providers: [DataService]***

Then we need to import it into the user/user.component.ts file:
***import { DataService } from '../../services/data.service';***
Whenever you want a service you have to inject it as a dependency 
and that goes into the Constructor parameters right here so we're
going to set this as a private data service.
`***constructor(private dataService:DataService) {***  `
 ` ***console.log('constructor ran...')***  `
`***}***  `
Now open the services/data.service.ts file and add this to its constructor:  
  `***constructor() {***  `
  `	***console.log('Data Service Connected');***  `
 ` ***}***  `
`***}*** ` 
If everything is correct you will see “Data Service Connected” 
in the console.

# Much of writing Angular apps is just this:
1. Split your app into components
2. Create the views
3. Define your models
4. Display your models
5. Add interaction

From here we just have to learn the 
syntax and functionality of Angular.





















