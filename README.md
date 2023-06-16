# ANGULAR

comands: 

    sudo npm install -g @angular/cli // to install angular globally
    // on the carpet we want to run angular:
    ng new first-app[name of the project] --no-strict
    // or if the project exist 
    //npm install
    // on the carpet we create our project
    ng serve // To run a serveng serve

to install bootstrap locally in the project.
  npm install --save bootstrap@3
  // and copy the path on angular.json - 'build - styles' (before src/styles.css)
  'node_modules/bootstrap/dist/css/bootstrap.min.css' // according to the ubication

Bootstrap provides a collection of CSS and JavaScript components and tools that help us build visually appealing and functional user interfaces.

to create a new component from terminal:
    ng generate component servers<name of the component>
    // or...
    ng g c servers<name of the component>

To prevent the creation of the testing file, we can use --skip-tests, it will be: 
  ng g c [name of the component] --skip-tests

## DATA BINDING

### Output Data
  **-String interpolation** -> {{data}}
  _expressions that return a string_

  **-Property binding** -> [property] = "data"


### Event Binding

  event = "expression"

### Two-way binding
  [(ngModel)] = "data"
  // FormsModule needs to be added to imports[] in appModule

## DIRECTORS

*ngIf
ngStyle
ngClass
ngFor
ng-content

**Planing the app**
- Root Component
- Header Component

-Shoping list
  - Shoping List
  - Shoping List Edit
  - Ingredients (model)

- Recipe Book
  -Recipe List
  -Recipe Item
  -Recipe Detail
  - Recipe (model)

## Model

TypeScript file, that is a blueprint for objects we create.

## Lifecycle Hook

ngOnChanges -> Called after a bound input property changes.
ngOnInit -> Called once the component is initialized.
ngDoCheck -> Called during every change detection run.
ngAfterContentInit -> Called after content (ng-content) has been projected into view.
ngAfterContentChecked -> Called every time the project content has been checked.
ngAfterViewInit -> Called after the components view (and child views has been initialized).
ngAfterViewChecked* -> Called every time the view (and child views) has been checked.
ngOnDestroy -> Called once the component is about to be desroyed.




**Libraries imports:**
  import { FormsModule } from '@angular/forms'; // Forms features