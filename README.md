# ANGULAR

comands: 

    sudo npm install -g @angular/cli
    // on the carpet we want to run angular:
    ng new first-app --no-strict
    // on the carpet we create our project
    ng serve // To run a serve

to install bootstrap locally in the project.
  npm install --save bootstrap@3
  // and copy the path on angular.json - 'build - styles' (before src/styles.css)
  'node_modules/bootstrap/dist/css/bootstrap.min.css'

Bootstrap provides a collection of CSS and JavaScript components and tools that help us build visually appealing and functional user interfaces.

Libraries imports:
  import { FormsModule } from '@angular/forms'; // Forms features