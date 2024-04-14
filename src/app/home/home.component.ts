import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carsData = [
    {
      title: "Car ttitle -1",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -1",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -1",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -1",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "india ttitle -2",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://static.toiimg.com/thumb/msid-87815542,width-400,resizemode-4/87815542.jpg"
    },
    {
      title: "india ttitle -2",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://static.toiimg.com/thumb/msid-87815542,width-400,resizemode-4/87815542.jpg"
    },
    {
      title: "india ttitle -2",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://static.toiimg.com/thumb/msid-87815542,width-400,resizemode-4/87815542.jpg"
    },
    {
      title: "india ttitle -2",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://static.toiimg.com/thumb/msid-87815542,width-400,resizemode-4/87815542.jpg"
    },
    {
      title: "Car ttitle -1",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -2",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -3",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "/assets/image/bugati.jpg"
    },
    {
      title: "Car ttitle -4",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.signaturecarhire.co.uk/blog/wp-content/uploads/2016/03/geneva-motor-show-bugatti-chiron-22.jpg"
    },
    {
      title: "Car ttitle -5",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -6",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -7",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -1",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "/assets/image/bugati.jpg"
    },
    {
      title: "Car ttitle -2",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -3",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -4",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.signaturecarhire.co.uk/blog/wp-content/uploads/2016/03/geneva-motor-show-bugatti-chiron-22.jpg"
    },
    {
      title: "Car ttitle -5",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "/assets/image/bugati.jpg"
    },
    {
      title: "Car ttitle -6",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -7",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -1",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "/assets/image/bugati.jpg"
    },
    {
      title: "Car ttitle -2",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -3",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -4",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.signaturecarhire.co.uk/blog/wp-content/uploads/2016/03/geneva-motor-show-bugatti-chiron-22.jpg"
    },
    {
      title: "Car ttitle -5",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
    {
      title: "Car ttitle -6",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "/assets/image/bugati.jpg"
    },
    {
      title: "Car ttitle -7",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: "Click Here",
      image: "https://www.enca.com/sites/default/files/Bugatti_Chiron_1.jpg"
    },
  ]
  myFilterData!: any;
  constructor() { }

  ngOnInit(): void {
    console.log("deafult myfilterData===>",this.myFilterData)
  }

  findCar(name:string){
    this.myFilterData = this.carsData.filter(resp => resp.title == name )
    console.log("myFilteredData===>",this.myFilterData)
  }
}
