import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
 //// this i

=======
>>>>>>> c4368203950b992bfb3ec27ba129a43f98862cc4
@Component({
  selector: 'app-test',
  template: `
    <div *ngFor="let employee of employees">
      <h2>{{employee.id}} {{employee.name}}  {{employee.age}}</h2>
    </div>



   `,
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {

  public hasError = true;
  //public animals = ["cat","dog","scorpion","bat","lion"];
  public name="gazel";
  public help = 'Hello';
  public employees = [
      {"id": 1,"name":"dieudo", "age":"25"},
      {"id": 2,"name":"zaki", "age":"35"},
      {"id": 3,"name":"nowar", "age":"42"},
      {"id": 4,"name":"nora", "age":"29"}
  ];

  public date = new Date();
  
  public urlSite = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  onclick(){
      window.console.log(name);
      //this.animals.push(name);
  }

}
