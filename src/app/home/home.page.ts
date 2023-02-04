import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slider', { static: true })
  public slider!: IonSlides;
  basicInfo:boolean=false
  usersList=[
    {
      id:1,
      name:'Maham 1234 | 25',
      designation:'Teacher',
      location:'Lahore, Pakistan',
      description:'',
      about_detail:[
        {
          icon:'globe-sharp',
          name:'Asian - Pakistani'
        },
        {
          icon:'woman-sharp',
          name:'Never Married'
        },
        {
          icon:'people-sharp',
          name:"Don't have children"
        }

      ],
      my_deen:[
        {
          icon:'moon-sharp',
          name:'Sect',
          description:'Sometimes Pray'
        },
        {
          icon:'reader-sharp',
          name:'Pray',
          description:'Sunni Muslim'
        },
        {
          icon:'person-sharp',
          name:'Religious History',
          description:'Muslim Since Birth'
        },
        {
          icon:'wine-sharp',
          name:'Polygyny',
          description:'No'
        }
      ]
    },
    {
      id:2,
      name:'Rimsha 231 | 23',
      designation:'Farmacist',
      location:'Islamabad, Pakistan',
      description:'I have completed my phram D and currently employed.I am simple girl.I love travelling and explore new things.',
      about_detail:[
        {
          icon:'globe-sharp',
          name:'Asian - Pakistani'
        },
        {
          icon:'woman-sharp',
          name:'Married'
        },
        {
          icon:'people-sharp',
          name:"Have children"
        }

      ],
       my_deen:[
        {
          icon:'moon-sharp',
          name:'Sect',
          description:'Sometimes Pray'
        },
        {
          icon:'reader-sharp',
          name:'Pray',
          description:'Sunni Muslim'
        },
        {
          icon:'person-sharp',
          name:'Religious History',
          description:'Muslim Since Birth'
        },
        {
          icon:'wine-sharp',
          name:'Polygyny',
          description:'No'
        }
      ]
    },
    {
      id:3,
      name:'Muhtaha123 | 31',
      designation:'Teacher',
      location:'Lahore,Pakistan',
      description:'I have completed my degree and currently employed.I am teacher.I love teaching and explore new things.',
      about_detail:[
        {
          icon:'globe-sharp',
          name:'Asian - Pakistani'
        },
        {
          icon:'woman-sharp',
          name:'Never Married'
        },
        {
          icon:'people-sharp',
          name:"Don't have children"
        }

      ],
      my_deen:[
        {
          icon:'moon-sharp',
          name:'Sect',
          description:'Sometimes Pray'
        },
        {
          icon:'reader-sharp',
          name:'Pray',
          description:'Sunni Muslim'
        },
        {
          icon:'person-sharp',
          name:'Religious History',
          description:'Muslim Since Birth'
        },
        {
          icon:'wine-sharp',
          name:'Polygyny',
          description:'No'
        }
      ]
    },
    {
      id:4,
      name:'Asmach 031 | 20',
      designation:'Doctor',
      location:'Punjab, Pakistan',
      description:'I have completed my MBBS and currently employed.I am simple girl.I love this profession and explore new things.',
      about_detail:[
        {
          icon:'globe-sharp',
          name:'Asian - Pakistani'
        },
        {
          icon:'woman-sharp',
          name:'Married'
        },
        {
          icon:'people-sharp',
          name:"Have children"
        }

      ],
      my_deen:[
        {
          icon:'moon-sharp',
          name:'Sect',
          description:'Sometimes Pray'
        },
        {
          icon:'reader-sharp',
          name:'Pray',
          description:'Sunni Muslim'
        },
        {
          icon:'person-sharp',
          name:'Religious History',
          description:'Muslim Since Birth'
        },
        {
          icon:'wine-sharp',
          name:'Polygyny',
          description:'No'
        }
      ]
    },
    {
      id:5,
      name:'Maryamzahoor | 27',
      designation:'Islamia Online University',
      location:'Islamabad, Pakistan',
      description:'I AM doing  Bs in Islamic Studies and currently employed.I am simple girl.I love this profession and explore new things.',
      about_detail:[
        {
          icon:'globe-sharp',
          name:'Asian - Pakistani'
        },
        {
          icon:'woman-sharp',
          name:'Never Married'
        },
        {
          icon:'people-sharp',
          name:"Don't have children"
        }

      ],
      my_deen:[
        {
          icon:'moon-sharp',
          name:'Sect',
          description:'Sometimes Pray'
        },
        {
          icon:'reader-sharp',
          name:'Pray',
          description:'Sunni Muslim'
        },
        {
          icon:'person-sharp',
          name:'Religious History',
          description:'Muslim Since Birth'
        },
        {
          icon:'wine-sharp',
          name:'Polygyny',
          description:'No'
        }
      ]
    }
  ]
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  selectedSection='images';

  constructor() {
   
  }
  public async ionSlideDidChange(): Promise<void> {
    const index = await this.slider.getActiveIndex();
    console.log('index ',index);
    this.selectedSection='images'
    

  }
  ionSlideDrag(event:any){
this.selectedSection='images'
  }
  segmentChanged(event:any){
    //console.log(event);
    this.selectedSection=event.detail.value;
   
    
  }
 

}
