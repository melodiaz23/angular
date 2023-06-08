# ANGULAR

comands: 

    sudo npm install -g @angular/cli // to install angular globally
    // on the carpet we want to run angular:
    ng new first-app --no-strict
    // or if the project exist 
    //npm install
    // on the carpet we create our project
    ng serve // To run a serveng serve

to install bootstrap locally in the project.
  npm install --save bootstrap@3
  // and copy the path on angular.json - 'build - styles' (before src/styles.css)
  'node_modules/bootstrap/dist/css/bootstrap.min.css'

Bootstrap provides a collection of CSS and JavaScript components and tools that help us build visually appealing and functional user interfaces.

to create a new component from terminal:
    ng generate component servers<name of the component>
    // or...
    ng g c servers<name of the component>

## DATA BINDING

### Output Data
  **-String interpolation** -> {{data}}
  **-Property binding** -> [property] = "data"

### Event Binding

  event = "expression"

### Two-way binding
  [(ngModel)] = "data"

**Libraries imports:**
  import { FormsModule } from '@angular/forms'; // Forms features