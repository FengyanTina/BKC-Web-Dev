import PrayerBible from "./assets/spiritual-prayer-hands-holding-bible.jpg";
import worshipHands from "./assets/worshipHands.jpg";
import edward from "./assets/edward.jpg";
import BethelWorship from "./assets/BethelWorship.jpg";
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
import rosWorship  from "./assets/sundaySchool/rosWorship.jpg"


import bkcBaby from "./assets/sundaySchool/bkcBaby.jpg"
import davidPreaching from "./assets/sundaySchool/davidPreaching.jpg"
import sundayServe from "./assets/sundayServe.jpg"
import { ImageGallaryItemData } from "./models/ImageGallaryItemData";
import { CardTextSectionModel } from "./models/CardTextSectionModel";

export const newsImgs = [
    {
        id:"edward",
        url:edward,
    },
    {
        id:"bkcBaby",
        url:bkcBaby,
    },
    {
        id:"worshipHands",
        url: worshipHands,  
    },
    {
        id:"worshipHands",
        url: worshipHands,  
    },
    {
        id:"edward",
        url: edward,  
    },
    {
        id:" davidPreaching",
        url:  davidPreaching,  
    },
    {
        id:"bkcBaby",
        url:   bkcBaby,  
    }
    
    ]
   
    export const INITIAL_EVENTS =[
        { id: "",
            title: "sundayServe",
            start:"Sunday: 11:00-",
            end: "13:00",
            allDay: false,
            description: "Welcome to sunday",
            location: "BKC",
        },
        {
            id: "",
            title: "sundayServe",
            start:"Sunday: 11:00-",
            end: "13:00",
            allDay: false,
            description: "Welcome to sunday",
            location: "BKC",
        },
        {}    
   
   
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
    title:"New here? ",
    subtitle:"can't wait to meet you!",
    description:" ",
   
  }

  export const socialMediaActivityCardInfor={
    id: "1",
    inforSectionId:"",
    title: "Buzz on Social media",
    subtitle:"You@Insta#FaceInBKC!",
    category: EventCategory.SocialMedia,
    description:"Följ oss på sociala medier",
    images: socialActivity,
  }
  export const sundayServiceCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "-Vad göra på en söndag? ",
    subtitle:"Välkommen till vår kyrka nu på söndag!",
    startTime:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.SundayService,
    description:"Vi är en bibeltroende kyrka mitt i Borås, som älskar Jesus!",
    images:Varvision,
    buttonText:"Learn More",
  }
  export const activityCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "Aktiviteter",
    subtitle:"Hitta aktiviteter för både vuxna, ungdomar och små barn",
    startTime:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.SundaySchoole,
    description:" - BKC-Kids är för barn mellan 2-12 år. Barnens egna gudstjänst..\n- BKC-Ung för dig mellan 13-20 år. Då stavas en perfekt fredag BKC-UNG. Varje fredag ses vi för både häng och snack om Jesus och bibeln.\n - Seniorerna är de i församlingen som är 60+\nKom med du också!",
    images: sundayServe ,
    buttonText:"Learn More",
  }
 
  export const scheduleCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "Our Schedules",
    subtitle:"BKC Ungdom",
    startTime:new Date(2024, 9, 22, 14, 30),
    category: EventCategory.YouthService,
    description:"Vi kommer att leva, sova och äta på sommargården Solviken som ligger 5 km utanför Fristad precis vid sjön Ärtingen.  ",
    images:Bible,
    buttonText:"Learn More",
  }
//   export const homeGroupActivityCardInfor:ImageInforSectionModel={
//     id: "1",
//     inforSectionId:"",
//     title: "Your Small Community",
//     subtitle:"Together,Stronger!",
//     startTime:new Date(2024, 9, 22, 14, 30),
//     category:EventCategory.HomeGroup,
//     description:"Bibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa. Jesus säger att han är vägen, sanningen och livet och var och en som längtar efter livets mening, efter tillvarons själva pulserande centrum, är välkommen in i hans stora famn.",
//     buttonText:"Learn More",
//     images:bs1 
//   }
  export const news:HighlightEvent[] = [
    {
      id: "1",
      startTime: "WE LOVE BORÅS ", // October 22, 2024, 2:30 PM
      title: "Mission ",
      category: EventCategory.Event,
      image: PrayerBible,
      description:
        "Vi når ut i Borås. Välkommen att höra av dig till er hemgruppsledare eller mötesledare för mer information.",
    },
    {
      id: "2",
      startTime: "new Date(2024, 9, 25, 19, 0)", // October 25, 2024, 7:00 PM
      title: "Alphakurs",
      category: EventCategory.Event,
      image: edward,
      description:
        "Vem som helst kan gå en Alphakurs, men den vänder sig speciellt till dig som vill utforska livet och den kristna tron lite närmare eller är lite osäker på vad du egentligen tror på. Kursen är utformad för att passa dig som inte är van att gå i kyrkan. \n - Vi börjar med att äta något gott tillsammans, därefter hålls ett kortare föredrag som tar upp ett ämne som berör livet och kristen tro. Sedan delar vi upp oss i grupper för att samtala. Många upplever samtalsgruppen som ett av de mest positiva inslagen i Alphakursen.Här är några exempel på ämnen som tas upp under en Alphakurs: Vem är Jesus? Varför måste Jesus dö? Hur kan jag tro? Vad ska vi ha kyrkan till? Finns det mer att upptäcka i livet?.",
    },
    {
      id: "3",
      startTime:" new Date(2024, 9, 27, 9, 0)", // October 27, 2024, 9:00 AM
      title: "Expansion",
      category: EventCategory.Event,
      image:rosWorship,
      description:
        "Tillsammans med Kidsen`s pant i vår expansions-maskin samlar vi in medel för nya lokaler ..",
    },
    {
      id: "4",
      startTime: "new Date(2024, 9, 30, 17, 30)", // October 30, 2024, 5:30 PM
      title: "Bön&Lovsångskväll",
      category: EventCategory.Event,
      image: BethelWorship,
      description:
        "Tillsammans över generationera leder BKC-Ung oss i bön och lovsångsgudstjänst sista torsdagen i månaden. Kom med förväntan att bli förvandlad av Den Helige Andes..",
    },
  ];

// About us page
   export const Pastor= {
    id:"pastor",
    title:"David Byman",
    subTitle:"Main Pastor",
    content: "BKC pastor, Blog,\n\nSedan november 2018. I samband med församlingens 30-årsjubileum  installeras David och Johanna Byman som pastorspar. Idag har de fyra barn och bor i utkanten av Borås. Båda känner ett kall från Gud att predika om människans omätbara värde redan från tillblivelsen.",
    image: DavidB   
    }

    export const ourHistory ={
        id:"history",
        title: "Vår historia",
        description: "Vår kyrka startades 1988, församlingen som grundades av pastorsparet Peder och Yvonne Teglund. Hade året innan -1987 startat en bibelskola som hundratals personer i Sjuhärdas med omnejd gått. Den liksom församlingen är aktiv idag och har i dag har omkring 140 medlemmar. \n 1991 startade också en förskoleverksamhet och året efter de första klasserna av Borås Kristna Skola som idag omfattas av förskola och hela grundskolan till nionde klass. Församlingen är skolans huvudman.\n Borås Kristna Center tillhör det kristna samfund som kallas Trosrörelsen som bland annat betonar betydelsen av att läsa och tro på Bibelns ord och att tron på Jesus ska levas ut i vardagen. Vi är en frikyrka och har en god och nära relation med andra kyrkor i Borås och samarbetar i olika sammanhang.\n - Kontakta oss gärna för mer information om oss och vårt ställningstagande i olika frågor.",
        
        images:[Varvison,Varhistoria,Mission]
      };
      
// Tjänster page
export const findYourVision = {
    id:"103",
    title: "Want to Serve",
    description:"You can find your vision and purpose, and serve the Lord in different ways.\n Gifted in music? Sunday Service you can serve the Lord in worship team.\n Have a vision in young children? Want to help the next generation growing in the knowlege of the Bible? \n Recive people or help with fika prepareation, you can share your love and your smile with people coming to church. Give them the bigest welcome to the house of the Lord in the sunday morning .",
    
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
      "Live English simultaneous translation is available for theSunday services. Thought-provoking and engaging messages based on the Bible from our pastor, David Byman. Each service lasts around 90 minutes.\n\n Day: Sunday 11:00-13:00",
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
    "Live English simultaneous translation is available for theSunday services. Thought-provoking and engaging messages based on the Bible from our pastor, David Byman. Each service lasts around 90 minutes. Engaging worship music. Come as you are. There is no dress code.",
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
      description:"They learn the word, while having fun. In Swedish, they build their little community, and grow together as part of the church family,\n\n Day: Sunday ", 
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
    description:" Here you find a group of friends who you can be yourself with while growing in your relationship with God. By joining us in-person you can discover exactly who God intentionally made you to be.\n\n Day: Friday ", 
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
  export const contectText = [
   
    "Skriva direkt här!",
    "Vi ska svarå så smart som möjlight!",
  
    "Du kan bara rigna oss också.",
  
    "Varmt välkommen att besöka oss!",
  
  ];