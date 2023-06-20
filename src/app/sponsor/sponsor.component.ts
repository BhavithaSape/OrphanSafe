import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent {
  constructor(private routes: Router){
    

  }
  ngOnInit(){
  
  }
  Images = [
    {
      image:'../assets/images/orphanprofile.jpg',
      alt:'sorry',
      desc:' hii iam Trivikram a bright and joyful young boy. he is always laughing with her friends, singing and dancing. When he grows up, she would love to become a doctor and help the people who need it most in her community.',
      title:'Trivikram 14years old',
      button:'Donate'
    },
    {
       image:'../assets/images/orphanprofile3.webp',
       alt:'sorry',
       desc:'hii iam Rahul came to Zion Childrens Home when iam  five. He loves to play games with the other boys. Vigo just began to attend school and enjoys computers and sports, particularly soccer. He dreams of becoming a soccer player one day.',
       title:'Rahul 12years old',
       button:'Donate'},
       {
        image:'../assets/images/orphanprofile2.jpg',
        alt:'sorry',
        desc:'hii iam Bindu a bright and joyful young girl. She is always laughing with her friends, singing and dancing. When she grows up, she would love to become a doctor and help the people who need it most in her community.',
        title:'Bindu 15years old',
        button:'Donate'},
        {
          image:'../assets/images/orphanprofile4.jpg',
          alt:'sorry',
          desc:'hii iam santhosh came to mahitha Childrens Home when iam  five. He loves to play games with the other boys. Vigo just began to attend school and enjoys computers and sports, particularly tennis. He dreams of becoming a soccer player one day.',
          title:'Santhosh 13years old',
          button:'Donate'},{
            image:'../assets/images/orphanprofile.png',
            alt:'sorry',
            desc:'hii iam Nihal a bright and joyful young boy. he is always laughing with her friends, singing and dancing. When she grows up, he would love to become a doctor and help the people who need it most in her community.',
            title:'Nihal 15years old',
            button:'Donate'},{
              image:'../assets/images/orphanprofile6.jpg',
              alt:'sorry',
              desc:'hii iam Rajesh came to Zion Childrens Home when iam  five. He loves to play games with the other boys. Vigo just began to attend school and enjoys computers and sports, particularly soccer. He dreams of becoming a soccer player one day.',
              title:'Rajesh 14years old',
              button:'Donate'}
  
  ]
  onclick(){
    this.routes.navigateByUrl('donate')
  }


}
