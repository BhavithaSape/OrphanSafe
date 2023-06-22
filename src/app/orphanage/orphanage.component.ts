import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orphanage',
  templateUrl: './orphanage.component.html',
  styleUrls: ['./orphanage.component.css']
})
export class OrphanageComponent {
  constructor(private routes: Router){
    

  }
  ngOnInit(){
  
  }
  Images = [
    
    {
       image:'../assets/images/orphanageimage3.jpeg.jpg',
       alt:'sorry',
       desc:'Grace Home and Mission Home',
       
       button:'connect'},
       {
        image:'../assets/images/orphanageimage5.jpeg.jpg',
        alt:'sorry',
        desc:'Grace Ministries Childrens Home',
       
        button:'connect'},
        {
          image:'../assets/images/orphanageimage4.jpeg.jpg',
          alt:'sorry',
          desc:'Gouthami Jeeva  Sangham',
        
          button:'connect'},{
            image:'../assets/images/orphanageimage3.jpeg.jpg',
            alt:'sorry',
            desc:'sumithra charity foudation',
          
            button:'connect'},{
              image:'../assets/images/orphanageimage5.jpeg.jpg',
              alt:'sorry',
              desc:'Gouthami Old Age Home ',
          
              button:'connect'},{
                image:'../assets/images/orphanageimage5.jpeg.jpg',
                alt:'sorry',
                desc:'New Life Orphans Home',
            
                button:'connect'}
  
  ]
  onclick(){this.routes.navigateByUrl('connectnew')


}
  

  }