import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string = 'Steve Smith';// name is set to 'Steve Smith' here but ngOnInit() overwrites it
	age:number;
	email:string;
	// In typescript the type Address points to the Address interface below.
	address:Address;
	// Declares an array of any type
	hobbies:string[];
	hello:any;
	posts:Post[];
	isEdit:boolean = false;


  constructor(private dataService:DataService) {
  	console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'John Doe';
    this.email = 'test@test.com';
    this.age = 30;
    this.address = {
      street:'50 Main st',
      city: 'Boston',
      state:'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello ='hello';

    this.dataService.getPosts().subscribe((posts) => {
      console.table(posts);
      // return this.posts = posts;
    });
  }

  onClick(){
  	this.name='Jason Mayberry';
  	this.hobbies.push('New Hobbie');
  	console.log('Hello');
  }

  addHobby(hobby){
  	console.log(hobby);
  	this.hobbies.unshift(hobby);
  	return false;
  }

  deleteHobby(hobby){
  	for(let i = 0; i < this.hobbies.length; i++){
  		if(this.hobbies[i] == hobby){
  			this.hobbies.splice(i, 1);
  		}
  	}
  }

  toggleEdit(){
  	this.isEdit = !this.isEdit;
  }

}



// You can put an interface in another file and import it. 
// You can import it into other files as well. 
// That makes the code a lot more reusable and more organized.  
// The number one rule is to not have a repetitive value 
// stored as a property or variable in more than one place 
// if you can help it.
interface Address{
	street:string,
	city:string,
	state:string
}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}