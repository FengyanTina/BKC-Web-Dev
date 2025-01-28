import PrayerBible from "./assets/spiritual-prayer-hands-holding-bible.jpg";
import worshipHands from "./assets/worshipHands.jpg";
import edward from "./assets/edward.jpg";
import BethelWorship from "./assets/BethelWorship.jpg";
import Worship from "./assets/Worship.jpeg";
import Conference from "./assets/Conference.jpg";
import Mission from "./assets/Mission.png";
import Prayer from "./assets/Prayer.jpg";
import sundaySchol11 from "./assets/sundaySchol11.jpg";
import serve1 from "./assets/serve1.png";
import bibelsko from "./assets/bibelsko.jpg";
import Varvison from "./assets/Varvision.jpg";
import Varhistoria from "./assets/Varhistoria.jpg"
import DavidB from "./assets/DavidB.jpg"
import Bible from "./assets/Bible.jpg"
import happySenior from "./assets/happySenior.jpg"
import Varvision from "./assets/Varvision.jpg"
import socialActivity from "./assets/socialActivity.jpg"
import { EventCategory,HighlightEvent } from "./models/Event";
import { ImageInforSectionModel } from "./models/ImageInforSection";
import SundaySchoolTeaching  from "./assets/sundaySchool/sundayTeaching.jpg"
import SundaySchool2 from "./assets/sundaySchool/sudaySchool2.jpg"
import SundaySchool3 from "./assets/sundaySchool/sudaySchool3.jpg"
import SundaySchool4 from "./assets/sundaySchool/sundayschool4.jpg"
import SundaySchool5 from "./assets/sundaySchool/sundaySchool5.jpg"
import SundaySchool6 from "./assets/sundaySchool/sundaySchool6.jpg"
import SundaySchool7 from "./assets/sundaySchool/sundaySchool7.jpg"
import SundaySchool8 from "./assets/sundaySchool/sundaySchool8.jpg"
import bs1 from "./assets/bs1.jpg"
import bkcBaby from "./assets/sundaySchool/bkcBaby.jpg"
import davidPreaching from "./assets/sundaySchool/davidPreaching.jpg"
import sundayServe from "./assets/sundayServe.jpg"
import { ImageGallaryItemData } from "./models/ImageGallaryItemData";
import { CardTextSectionModel } from "./models/CardTextSectionModel";

export const carouselImgs = [
    {
        id:"1",
        url:edward,
    },
    {
        id:"2",
        url:bkcBaby,
    },
    {
        id:"3",
        url: worshipHands,  
    },
    {
        id:"3",
        url: worshipHands,  
    },
    {
        id:"4",
        url: edward,  
    },
    {
        id:"5",
        url:  davidPreaching,  
    },
    {
        id:"6",
        url:   bkcBaby,  
    }
    
    
   
    
   
   
]
//start page 
export const higlightEvents:HighlightEvent[] = [
    {
      id: "1",
      title: "GUDSTJÄNST",
      category:EventCategory.Event,
      startTime: "SÖNDAG: 11:00-13:00",
      description: " Tillfället då vi samlas till att fira gudstjänst. Syftet är att upphöja och ära Gud tillsammans. Våra gudstjänster är öppna för alla och vi vill vara tydliga med allt vi gör, så att alla kan förstå. Våra gudstjänster innehåller bön och lovsång, predikan och förbön. ",
      image: davidPreaching, // Use actual image URL
      location:"Plats: Albanoliden 1, Borås; Borås Kristna Center "
    },
    {
      id: "2",
      title: "BKC-UNG",
      category:EventCategory.Event,
      startTime:  "FREDAG: 19:00-21:00",
      description: "- För dig mellan 13-20år stavas en perfekt fredag BKC-UNG. Varje fredag ses vi här för både häng och snack om Jesus och bibeln. Vi vill att du ska känna dig sedd, älskad och inkluderad. Att du ska på ett nytt, fräscht och relevant sätt få höra om Jesus, samt utmanas och att gå ut och sprida en glädje.",
      image: edward, // Use actual image URL
       location:"Plats: Albanoliden 1, Borås; Borås Kristna Center "
    },
    {
      id: "3",
      title: " KVÄLLSBIBELSKOLA",
      category:EventCategory.Event,
      startTime: " 3 september 2024 - 4 februari 2025",
      description: "Läsåret 2024-2025 är redan igång. Anmäl dig för kommande terminstart under september 2025 för läsåret 2025-2026. Skolan träffas varje tisdagkväll, med 16 träffar under höstterminen och 5 träffar under vårtermin.",
      image: bibelsko, // Use actual image URL
       location:"Plats: Albanoliden 1, Borås; Borås Kristna Center "
    },
    {
      id: "4",
      title: "BKC-KIDS",
      category:EventCategory.Event,
      startTime: "SÖNDAG: 11:15-13:00",
      description: "BKC-Kids är för barn mellan 2-12 år. Barnens egna gudstjänst där vi tillsammans får möta spännande bibelpersoner, lyssna på Guds ord, med lekar, drama och tävlingar, vi äter korv och pysslar tillsammans. Kom med du också!",
      image: bkcBaby, // Use actual image URL
       location:"Plats: Albanoliden 1, Borås; Borås Kristna Center "
    },
    {
        id: "5",
        title: "Bön",
        category:EventCategory.Event,
        startTime: "TORSDAG: 18:30",
        description: "Öppen församlingsbön. Vi kommer tillsammans för att be, stå i tro för under och mirakler. Vi vill gärna be för dig och dina behov. Har du ett böneämne? Skicka det till bon@bkc.nu eller sms:a 0790-018 97 20 så står vi med dig i bön. ",
        image:Bible, // Use actual image URL
         location:"Plats: Albanoliden 1, Borås; Borås Kristna Center "
      },
  ];
  
  
  export const newHere:ImageInforSectionModel ={
    id:'23',
    inforSectionId:"",
    title:"New Here? ",
    subtitle:"can't wait to meet you!",
    description:" ",
   
  }

  export const socialMediaActivityCardInfor={
    id: "1",
    inforSectionId:"",
    title: "All activities on Social media",
    subtitle:"Together,Stronger!",
    category: EventCategory.SocialMedia,
    description:"Under höstens tre första veckor (36-38) kommer vi uppmuntra till bön och fasta.Under höstens tre Under höstens tre Under höstens tre Under höstens tre tre Under höstens tre - auto updating activies from our social media",
    images: socialActivity,
  }
  export const sundayServiceCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "Våra Tjänster",
    subtitle:"välkommen till vår kyrka nu på söndag!",
    startTime:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.SundayService,
    description:"Veckans höjdpunkt i kyrkan är våra gudstjänster!",
    images:Varvision,
    buttonText:"Learn More",
  }
  export const activityCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "Våra Aktiviteter",
    subtitle:"Hitta aktiviteter för både vuxna, ungdomar och små barn",
    startTime:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.SundaySchoole,
    description:"BKC-Kids är för barn mellan 2-12 år. Barnens egen gudstjänst där vi tillsammans får möta spännande bibelpersoner, lyssna på Guds ord, lekar och tävlingar, vi äter korv och pysslar tillsammans. Kom med du också!",
    images: sundayServe ,
    buttonText:"Learn More",
  }
 
  export const scheduleCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "Our Schedules",
    subtitle:"Bkc Ungdom",
    startTime:new Date(2024, 9, 22, 14, 30),
    category: EventCategory.YouthService,
    description:"Vi kommer att leva, sova och äta på sommargården Solviken som ligger 5 km utanför Fristad precis vid sjön Ärtingen.  ",
    images: worshipHands ,
    buttonText:"Learn More",
  }
  export const homeGroupActivityCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "Your Small Community",
    subtitle:"Together,Stronger!",
    startTime:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.HomeGroup,
    description:"Bibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa. Jesus säger att han är vägen, sanningen och livet och var och en som längtar efter livets mening, efter tillvarons själva pulserande centrum, är välkommen in i hans stora famn.",
    buttonText:"Learn More",
    images:bs1 
  }
  export const news:HighlightEvent[] = [
    {
      id: "1",
      startTime: "", // October 22, 2024, 2:30 PM
      title: "Reaching out ",
      category: EventCategory.Event,
      image: PrayerBible,
      description:
        "An exhibition featuring contemporary art pieces from local artists.",
    },
    {
      id: "2",
      startTime: "new Date(2024, 9, 25, 19, 0)", // October 25, 2024, 7:00 PM
      title: "Tech Conference",
      category: EventCategory.Event,
      image: edward,
      description:
        "Join the biggest technology conference of the year with keynote speakers.",
    },
    {
      id: "3",
      startTime:" new Date(2024, 9, 27, 9, 0)", // October 27, 2024, 9:00 AM
      title: "Charity Run",
      category: EventCategory.Event,
      image: Worship,
      description:
        "Participate in the annual charity run to support a good cause.",
    },
    {
      id: "4",
      startTime: "new Date(2024, 9, 30, 17, 30)", // October 30, 2024, 5:30 PM
      title: "Food Festival",
      category: EventCategory.Event,
      image: BethelWorship,
      description:
        "Savor delicious dishes from a variety of food vendors and enjoy live entertainment.",
    },
  ];

// About us page
   export const Pastor= {
    id:"pastor",
    title:"David B",
    subTitle:"Main Pastor",
    content: "BKC pastor, Blog,\n\nThe relationship between Tim Dilena and Times Square Church is a close one. Tim’s father, Paul Dilena, was the police captain in David Wilkerson’s bestselling book The Cross and the Switchblade and was the treasurer of the first Teen Challenge.\n\nPrior to the senior pastorate, he had been a frequent and well-loved speaker at Times Square Church for over 25 years.\n\nThe relationship between Tim Dilena and Times Square Church is a close one. Tim’s father, Paul Dilena, was the police captain in David Wilkerson’s bestselling book The Cross and the Switchblade and was the treasurer of the first Teen Challenge.\n\nPrior to the senior pastorate, he had been a frequent and well-loved speaker at Times Square Church for over 25 years.\n\nThe relationship between Tim Dilena and Times Square Church is a close one. Tim’s father, Paul Dilena, was the police captain in David Wilkerson’s bestselling book The Cross and the Switchblade and was the treasurer of the first Teen Challenge.",
    image: DavidB   
    }

    export const ourHistory ={
        id:"history",
        title: "Vår historia",
        description: "1987 startades en bibelskola som under läsåret 2016-2017 alltså fyller 30 år och som hundratals personer i Sjuhärad med omnejd gått. Året efter, 1988, startade församlingen som grundades av pastorsparet Peder och Yvonne Teglund. Församlingen har i dag har omkring 140 medlemmar. \n 1991 startade också en förskoleverksamhet och året efter de första klasserna avBorås Kristna Skola som i dag omfattas av förskola och hela grundskolan. Församlingen är skolans huvudman.\n Borås Kristna Center tillhör det kristna samfund som kallas Trosrörelsen som bland annat betonar betydelsen av att läsa och tro på Bibelns ord och att tron på Jesus ska levas ut i vardagen. Vi har en god och nära relation med andra kyrkor i Borås och samarbetar i olika sammanhang, bland annat med Borås Biståndscenter som samlar in och säljer secondhandvaror till förmån för nödställda ut över världen.\n Här kan du läsa mer om vår vision och vår tro.Kontakta oss gärna för mer information om oss och vårt ställningstagande i olika frågor.",
        
        images:[Varvison,Varhistoria,Mission]
      };
      
// Tjänster page
export const findYourVision = {
    id:"103",
    title: "Want to Serve",
    description:"You can find your vision and purpose, and serve the Lord in different ways.\n Gifted in music? Sunday Service you can serve the Lord in worship team.\n Have a vision in young children? Want to help the next generation growing in the knowlege of the Bible?. Our sunday school has two groups, young children and older group. \n Recive people or help with fika prepareation, you can share your love and your smile with people coming to church. Give them the bigest welcome to the house of the Lord in the sunday morning .",
    
    images:[sundaySchol11,serve1,socialActivity],
    links:[
        
            {
                label: "Contact Us Here",
                url: "/contact",
              }, 
        
    ]
  };

  export const sundayServiceSection  = {
    id: "1",
    startTime: new Date(2024, 9, 30, 17, 30),
  
    location:"BKC",  // October 22, 2024, 2:30 PM
    title: "Welcom to our Sunday Service! ",
    subTitle: "  Come as you are !",
    category:EventCategory.SundayService,
    images: Conference,
    description:
      "Live English simultaneous translation is available for theSunday services. Thought-provoking and engaging messages based on the Bible from our senior pastor, Tim Dilena. Each service lasts around 90 minutes.\n\n Day: Sunday 11:00-13:00",
      buttontex:"",
      links:[
          
          {
              label: "Learn More Schedule",
              url: "/schedules",
            }, 
      
  ]
      
  };


  export const prayerService = {
    id:'12',
  title: "We want to pray for you!",
  linkSubtitle: "send in your prayer",
  images: Prayer,
  description:
    "Live English simultaneous translation is available for theSunday services. Thought-provoking and engaging messages based on the Bible from our senior pastor, Tim Dilena. Each service lasts around 90 minutes. Engaging worship music. Come as you are. There is no dress code.",
    buttontext:"",
    links:[
        
        {
            label: "Send In Your Prayer",
            url: "/contact",
          }, 
    
]
};

  export const baptismService = {
    id:"102",
    title: "Want to be baptized?",
    linkSubtitle: "Register Here",
    description:"Learn what is the meaning of baptism",
   
    image: Mission,
    buttontex:"",
    links:[
        
        {
            label: "Contact Us Here",
            url: "/contact",
          }, 
    
]
  };

//Aktivititer page
export const SundaySchoolImageGallary:ImageGallaryItemData [] = [
    {
        img: SundaySchoolTeaching ,
        title:"2",
        rows: 2,
        cols: 2,
      },
      {
        img: SundaySchool2,
        title:"3",
      },
      {
        img: SundaySchool3,
        title:"4",
      },
      {
        img: SundaySchool4,
        title:"5",
        cols: 2,
      },
      {
        img: SundaySchool5,
        title:"6",
        cols: 2,
      },
      {
        img: SundaySchool6,
        title:"7",
        author: '@arwinneil',
        rows: 2,
        cols: 2,
      },
      {
        img: SundaySchool7,
        title:"8",
      },
      {
        img: SundaySchool8,
        title: '9',
      },
];
export const BKCkIDS2:CardTextSectionModel = {
    id:"kids",
      title:"Sunday School",
      subtitle: "Lets kids come to the Lord",
      description:"The learn the word, while having fun. They build their little community, and grow together as part of the church family,The learn the word, while having fun. They build their little community, and grow together as part of the church family,The learn the word, while having fun. They build their little community, and grow together as part of the church family.\n\n Day: Sunday ", 
      startTime: new Date(2024, 9, 30, 12, ),
      endTime:new Date(2024, 9, 30, 13, 30),
   location:"BKC",  
   links: [
    {
      label: "BKS",
      url: "https://bkskola.org/",
    },
    {
      label: "BKC Ung",
      url: "https://example.com/register",
    },
    
  ]    
  }
  
export const BKCkYouth:CardTextSectionModel = {
    id:"youth",
    title:"Youth Group",
    subtitle: "Join Us Every Friday Night",
    description:"The learn the word, while having fun. They build their little community, and grow together as part of the church family,The learn the word, while having fun. They build their little community, and grow together as part of the church family,The learn the word, while having fun. They build their little community, and grow together as part of the church family.Find a group of friends who you can be yourself with while growing in your relationship with God. By joining us in-person or online you can discover exactly who God intentionally made you to be.\n\n Day: Friday ", 
    startTime: new Date(2024, 9, 30, 19, 30),
    endTime: new Date(2024, 9, 30, 21, 30),

 location:"BKC",  
}

// contact page 
export const ourVisionText = [
    "Borås Kristna Center vill vi vara:",
    "En plats för mötet mellan Gud och människa, en plats där vi ber och tillber Gud en plats där du kan lära känna och utvecklas i den plan Gud har för dig så att du blir hans lärjunge",
    "En plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden",
  
    "En plats för mötet mellan Gud och människa, en plats där vi ber och tillber Gud Bibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa. Jesus säger att han är vägen, sanningen och livet och var och en som längtar efter livets mening, efter tillvarons själva pulserande centrum, är välkommen in i hans stora famn.",
  
    "Vi vill som kyrka vara en plats där vi kan mötas för att be och för att i tal, musik och sång uttrycka vår kärlek till den som älskar oss mer än någon annan, Jesus Kristus. Det sker i gudstjänster, i hemgrupper och på samlingar för olika åldrar. Alla är välkomna att besöka oss och vi tror och hoppas att du här finner en plats där du känner dig som hemma, där du möter Gud och kan dela ditt hjärta med honom.",
  
    "En plats där du kan lära känna och utvecklas i den plan Gud har för dig så att du blir hans lärjunge Gud vill inte bara att vi ska kalla oss kristna, värma en stol vid en gudstjänst en gång i veckan och få en andlig upplevelse då och då. Han har mycket mer för oss. Gud har en fantastisk plan för varje människas liv och en uppgift för var och en att utföra, mitt i vardagen. Den vill vi som kyrka hjälpa dig att finna och utvecklas i.",
  
    "Jesus säger i Bibeln: ”Följ mig!” Att vara kristen är att gå i Jesu fotspår och leva som han levde – utgivande, kärleksfullt, förlåtande och med fokus på att hjälpa sina medmänniskor. Genom bland annat en bibelskola och andra typer av mötesplatser vill vi tillsammans följa Jesus och se hur hans perfekta vilja för varje del av våra liv allt mer tar form. Vi som kyrka finns till för att berätta om Jesu stora kärlek, och det gör vi både i Borås och genom mission i andra länder.",
  
    "En plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden Varje människa är så dyrbar i Guds ögon och han kan ge frid mitt i stormen och bygga slott av våra livs spillror. Vi tror att Gud kan och vill hela den som är sjuk, läka det som är brustet, skydda den som är svag och lyfta upp den som är nedböjd.",
  
    "Det finns en särskild plats i Guds hjärta för barn och unga. Han vill att den uppväxande generationen ska bli trygg, välmående och lära känna honom. I vår kyrka finns plats för själavård och omsorg. Vi är huvudman för en kristen förskola och skola och erbjuder söndagsskola och ungdomssamlingar. Detta gör vi för att vi tror på barnen och de unga, och framförallt vet vi att Gud tror på dem. Han vill möta dem och hjälpa dem att bygga ett liv i hans närhet och att sprida hans ljus till många fler.",
  
    "Varmt välkommen att besöka oss!",
  
  ];