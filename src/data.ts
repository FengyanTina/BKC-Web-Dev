import edward from "./assets/edward.jpg";
import ungWorship from "./assets/ungWorship.jpg";
import Mission from "./assets/Mission.png";
import Prayer from "./assets/Prayer.jpg";
import sundaySchol11 from "./assets/sundaySchol11.jpg";
import serve1 from "./assets/serve1.png";
import bibelsko from "./assets/bibelsko.jpg";
import Varvison from "./assets/Varvision.jpg";
import ourvision from "./assets/ourvision.jpg";
import Varhistoria from "./assets/Varhistoria.jpg"
import davidNew from "./assets/davidNew.jpg"
import Bible from "./assets/Bible.jpg"
import Varvision from "./assets/Varvision.jpg"
import HomeGroup from "./assets/homeGroup.jpg"
import SeniorGroup from "./assets/happySenior.jpg"
import WomanGroup from "./assets/woman.jpg"
import socialActivity from "./assets/socialActivity.jpg"
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
import { ImageGallaryItemData } from "./models/ImageGallaryItemData";
import { CardTextSectionModel } from "./models/CardTextSectionModel";
import { CalendarEvent } from "./models/CalendarEvent";
import { EventCategory } from "./models/Event";

export const newsImgs = [
  
    
    {
        id:"Biblep",
        url:"Biblep.jpg,"  
    },
   
    
    {
        id:" edwardp",
        url:"edwardp.jpg",  
    },
    {
        id:"Worshippp",
        url:"Worshippp,jpg",  
    } ]
   
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
export const higlightEvents:CalendarEvent[] = [
    {
      id: "1",
      title: "GUDSTJÄNST",
    
      start: "SÖNDAG: 11:00-13:00",
      end:"",
      allDay:false,
      description: " Tillfället då vi samlas till att fira gudstjänst. Syftet är att upphöja och ära Gud tillsammans. Våra gudstjänster är öppna för alla och vi vill vara tydliga med allt vi gör, så att alla kan förstå. Våra gudstjänster innehåller bön och lovsång, predikan och förbön. ",
      imgUrl: davidPreaching, // Use actual image URL
      location:"Plats: Albanoliden 1, Borås; Borås Kristna Center "
    },
    {
      id: "2",
      title: "BKC-UNG",
     
      start:  "FREDAG: 19:00-21:00",
      end:"",
      allDay:false,
      description: "- För dig mellan 13-20år stavas en perfekt fredag BKC-UNG. Varje fredag ses vi här för både häng och snack om Jesus och bibeln. Vi vill att du ska känna dig sedd, älskad och inkluderad. Att du ska på ett nytt, fräscht och relevant sätt få höra om Jesus, samt utmanas och att gå ut och sprida en glädje.",
      imgUrl: edward, // Use actual image URL
       location:"Plats: Albanoliden 1, Borås; Borås Kristna Center "
    },
    {
      id: "3",
      title: " KVÄLLSBIBELSKOLA",
      end:"",
      allDay:false,
      start: " 3 september 2024 - 4 februari 2025",
      description: "Läsåret 2024-2025 är redan igång. Anmäl dig för kommande terminstart under september 2025 för läsåret 2025-2026. Skolan träffas varje tisdagkväll, med 16 träffar under höstterminen och 5 träffar under vårtermin.",
      imgUrl: bibelsko, // Use actual image URL
       location:"Plats: Albanoliden 1, Borås; Borås Kristna Center "
    },
    {
      id: "4",
      title: "BKC-KIDS",
      end:"",
      allDay:false,
      start: "SÖNDAG: 11:15-13:00",
      description: "BKC-Kids är för barn mellan 2-12 år. Barnens egna gudstjänst där vi tillsammans får möta spännande bibelpersoner, lyssna på Guds ord, med lekar, drama och tävlingar, vi äter korv och pysslar tillsammans. Kom med du också!",
      imgUrl: bkcBaby, // Use actual image URL
       location:"Plats: Albanoliden 1, Borås; Borås Kristna Center "
    },
    {
        id: "5",
        title: "Bön",
        end:"",
        allDay:false,
        start: "TORSDAG: 18:30",
        description: "Öppen församlingsbön. Vi kommer tillsammans för att be, stå i tro för under och mirakler. Vi vill gärna be för dig och dina behov. Har du ett böneämne? Skicka det till bon@bkc.nu eller sms:a 0790-018 97 20 så står vi med dig i bön. ",
        imgUrl:Bible, // Use actual image URL
         location:"Plats: Albanoliden 1, Borås; Borås Kristna Center "
      },
  ];
  
  
  export const newHere:ImageInforSectionModel ={
    id:'23',
    inforSectionId:"",
    title:"New here? ",
    subtitle:"",
    description:" ",
  
  }
  export const newHere1:ImageInforSectionModel ={
    id:'23',
    inforSectionId:"",
    title:"New here? ",
    subtitle:"",
    description:" ",
    links:[
        {
            label: "SundayService",
            url: "/services#sundayService",
          }, 
        {
            label: "Connect To Your Purpose",
            url: "/services#serve",
          }, 
          {
            label: "Find Activities For Your Family",
            url: "/activities#groups",
          },
        ]
  
  }

  export const socialMediaActivityCardInfor={
    id: "1",
    inforSectionId:"",
    title: "Buzz on Social media",
    subtitle:"You@Insta#FaceInBKC!",
    category: "",
    description:"Vi upderar ssöndaytjänsten och ungdom aktiviter vary vecka. Följ oss på sociala medier",
    images: socialActivity,
    buttonText:"Läs mer",
    links:[
        
        {
            label: "Kolla mer här",
            url: "/services",
          }, ]
  }
  export const servicesCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "  -Vad göra på en söndag? ",
    subtitle:"Välkommen till vår kyrka!",
    start:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.SundayService,
    description:"Vi välkomnar dig till våra gudstjänster varje söndag, öppna för alla som vill delta. Om du är intresserad av att bli döpt, erbjuder vi även dopgudstjänster. Behöver du förbön? Vi ber gärna för dig och dina behov. Vår kyrka är en plats för gemenskap, tro och hopp, och vi ser fram emot att träffa dig! ",
    images:Varvision,
    buttonText:"Läs mer",
    links:[
        
        {
            label: "Kolla mer här",
            url: "/services",
          }, ]
  }
  export const activityCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "Aktiviteter",
    subtitle:"Hitta aktiviteter för både vuxna, ungdomar och små barn",
    start:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.SundaySchoole,
    description:" - BKC-Kids är för barn mellan 2-12 år. Barnens egna gudstjänst..\n- BKC-Ung för dig mellan 13-20 år. Då stavas en perfekt fredag BKC-UNG. Varje fredag ses vi för både häng och snack om Jesus och bibeln.\n - Seniorerna är de i församlingen som är 60+\nKom med du också!",
    images:ungWorship ,
    buttonText:"Läs mer",
    links:[
        
        {
            label: "Kolla mer här",
            url: "/activities",
          }, ]
  }
 
  export const scheduleCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "Vår Schema",
    subtitle:"Hitta tider för alla aktiviteter och jänster",
    start:new Date(2024, 9, 22, 14, 30),
    category: EventCategory.YouthService,
    description:"Välkommen att ta del av våra gudstjänster, aktiviteter och gemenskap! Vi har regelbundna samlingar för alla åldrar. Besök vår kalender för att se kommande evenemang och hitta en tid som passar dig. Vi ser fram emot att träffa dig!",
    images:Bible,
    buttonText:"Läs mer",
    links:[
        
        {
            label: "Kolla mer här",
            url: "/schedules",
          }, ]
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
  export const news:CalendarEvent[] = [
    {
      id: "1",
      start: "new Date(2024, 9, 25, 19, 0) ", // October 22, 2024, 2:30 PM
      end:"new Date(2024, 9, 25, 19, 0)",
      title: "Mission ",
      imgUrl: edward,
      description:
        "Vi når ut i Borås. Välkommen att höra av dig till er hemgruppsledare eller mötesledare för mer information.",
        allDay:false

    },
    {
      id: "2",
      start: "new Date(2024, 9, 25, 19, 0)", // October 25, 2024, 7:00 PM
      title: "Alphakurs",
      end: "new Date(2024, 9, 25, 19, 0)",
      allDay:false,
      imgUrl: edward,
      description:
        "Vem som helst kan gå en Alphakurs, men den vänder sig speciellt till dig som vill utforska livet och den kristna tron lite närmare eller är lite osäker på vad du egentligen tror på. Kursen är utformad för att passa dig som inte är van att gå i kyrkan. \n - Vi börjar med att äta något gott tillsammans, därefter hålls ett kortare föredrag som tar upp ett ämne som berör livet och kristen tro. Sedan delar vi upp oss i grupper för att samtala. Många upplever samtalsgruppen som ett av de mest positiva inslagen i Alphakursen.Här är några exempel på ämnen som tas upp under en Alphakurs: Vem är Jesus? Varför måste Jesus dö? Hur kan jag tro? Vad ska vi ha kyrkan till? Finns det mer att upptäcka i livet?.",
    },
    {
      id: "3",
      start: "new Date(2024, 9, 25, 19, 0)", // October 25, 2024, 7:00 PM
      title: "Alphakurs",
      end: "new Date(2024, 9, 25, 19, 0)",
      allDay:false,
      imgUrl: edward,
      description:
        "Tillsammans med Kidsen`s pant i vår expansions-maskin samlar vi in medel för nya lokaler ..",
    },
    {
      id: "4",
      start: "new Date(2024, 9, 25, 19, 0)", // October 25, 2024, 7:00 PM
      title: "Alphakurs",
      end: "new Date(2024, 9, 25, 19, 0)",
      allDay:false,
      imgUrl: edward,
      description:
        "Tillsammans över generationera leder BKC-Ung oss i bön och lovsångsgudstjänst sista torsdagen i månaden. Kom med förväntan att bli förvandlad av Den Helige Andes..",
    },
  ];

// About us page
export const ourVision:ImageInforSectionModel={
    id: "44",
    inforSectionId:"",
    title: "Vår Vision ",
    subtitle:"",
    start:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.SundayService,
    description:"Borås Kristna Center vill vi vara: \n– en plats för mötet mellan Gud och människa, en plats där vi ber och tillber Gud.\n– en plats där du kan lära känna och utvecklas i den plan Gud har för dig så att du blir hans lärjunge.\n– en plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden.\nBibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa. Jesus säger att han är vägen, sanningen och livet och var och en som längtar efter livets mening, efter tillvarons själva pulserande centrum, är välkommen in i hans stora famn.\nGud vill inte bara att vi ska kalla oss kristna, värma en stol vid en gudstjänst en gång i veckan och få en andlig upplevelse då och då. Han har mycket mer för oss. \nGud har en fantastisk plan för varje människas liv och en uppgift för var och en att utföra, mitt i vardagen. Den vill vi som kyrka hjälpa dig att finna och utvecklas i.\nVarje människa är så dyrbar i Guds ögon och han kan ge frid mitt i stormen och bygga slott av våra livs spillror. Vi tror att Gud kan och vill hela den som är sjuk, läka det som är brustet, skydda den som är svag och lyfta upp den som är nedböjd.",
    images:ourvision,
    buttonText:"Läs mer",
  }
   export const Pastor:ImageInforSectionModel= {
    id:"pastor",
    title:"David Byman",
    inforSectionId:"Huvud Pastor",
    subtitle:"Huvud Pastor",
    description: "BKC Pastor, sedan november 2018. I samband med församlingens 30-årsjubileum  installeras David och Johanna Byman som pastorspar. Idag har de fyra barn och bor i utkanten av Borås. Båda känner ett kall från Gud att predika om människans omätbara värde redan från tillblivelsen.\nBKC Pastor, sedan november 2018. I samband med församlingens 30-årsjubileum  installeras David och Johanna Byman som pastorspar. Idag har de fyra barn och bor i utkanten av Borås. Båda känner ett kall från Gud att predika om människans omätbara värde redan från tillblivelsen.\nBKC Pastor, sedan november 2018. I samband med församlingens 30-årsjubileum  installeras David och Johanna Byman som pastorspar. Idag har de fyra barn och bor i utkanten av Borås. Båda känner ett kall från Gud att predika om människans omätbara värde redan från tillblivelsen.",
    images:davidNew,
    buttonText:"Läs mer" 
    }

    export const ourHistory ={
        id:"history",
        title: "Vår historia",
        description: "Vår kyrka startades 1988, församlingen som grundades av pastorsparet Peder och Yvonne Teglund. Hade året innan -1987 startat en bibelskola som hundratals personer i Sjuhärdas med omnejd gått. Den liksom församlingen är aktiv idag och har i dag har omkring 140 medlemmar. \n 1991 startade också en förskoleverksamhet och året efter de första klasserna av Borås Kristna Skola som idag omfattas av förskola och hela grundskolan till nionde klass. Församlingen är skolans huvudman.\n Borås Kristna Center tillhör det kristna samfund som kallas Trosrörelsen som bland annat betonar betydelsen av att läsa och tro på Bibelns ord och att tron på Jesus ska levas ut i vardagen. Vi är en frikyrka och har en god och nära relation med andra kyrkor i Borås och samarbetar i olika sammanhang.\n - Kontakta oss gärna för mer information om oss och vårt ställningstagande i olika frågor.",
        
        images:[Varvison,Varhistoria,rosWorship],
        buttonText:"Läs mer"
      };
      
// Tjänster page
export const findYourVision = {
    inforSectionId:"",
    id:"103",
    title: "Vill du tjäna?",
    subtitle: "You can serve the Lord in many different ways!",
    description:"Upptäck din kallelse och tjäna Herren på ett sätt som passar dina gåvor och din passion.\n  Älskar du musik? Var med i lovsångsteamet och prisa Gud genom sång under söndagens gudstjänst.\n Brinner du för barn? Hjälp nästa generation att växa i tro och kunskap om Bibeln. \n Tycker du om att välkomna människor? Hälsa besökare med värme och glädje eller hjälp till med att förbereda fika. Ditt leende och din omtanke kan få alla att känna sig hemma i Herrens hus!",
    buttonText:"Läs mer",
    images:[sundaySchol11,serve1,socialActivity],
    links:[
        
            {
                label: "Kontakta oss här",
                url: "/contact",
              }, 
        
    ]
  };

  export const sundayServiceSection:ImageInforSectionModel  = {
    inforSectionId:"",
    id: "1",
    start: new Date(2024, 9, 30, 11,),
    end: new Date(2024, 9, 30, 13,),
  
    location:"BKC",  // October 22, 2024, 2:30 PM
    title: "Välkommen till vår söndagsgudstjänst!",
    subtitle: "Welcom to our Sunday Service!",
    category:EventCategory.SundayService,
    images: ungWorship,
    description:
      "Engelsk simultanöversättning finns tillgänglig för gudstjänsterna på söndagar. Tankeväckande och engagerande budskap baserade på Bibeln från vår pastor, David Byman. Varje gudstjänst varar i cirka 90 minuter.\nLive English simultaneous translation is available for the Sunday services.",
      buttonText:"Läs mer",
      links:[
          
          {
              label: "Läs mer om schemat",
              url: "/schedules",
            }, 
      
  ]
      
  };


  export const prayerService:ImageInforSectionModel = {
    inforSectionId:"",
    id:'12',
  title: "Vi vill be för dig!",
  subtitle: "We want to pray for you!",
  images: Prayer,
  description:
    "Känner du att du behöver förbön? Tveka inte att kontakta oss eller skicka in din bönelista. Vi vill gärna be för dig och stå tillsammans med dig i bön. Vi tror på Guds kraft att förändra liv och svara på böner.\nVår bön är att du ska uppleva Guds närvaro och styrka i varje situation. Skicka gärna din bön till oss, vi ser fram emot att lyfta dig och dina behov i våra böner.",
    buttonText:"Läs mer",
    links:[
        
        {
            label: "Skicka in din bön",
            url: "/contact",
          }, 
    
]
};

  export const baptismService:ImageInforSectionModel = {
    inforSectionId:"",
    id:"102",
    title: "Vill du bli döpt?",
    subtitle:"Want to be baptized?",
    linkSubtitle: "Register Here",
    description:"Vi erbjuder dopservice för alla som känner ett kall att bli döpta. Dopet är ett viktigt steg i den kristna tron och ett offentligt uttryck för din tro på Jesus Kristus. Om du känner att du vill ta detta steg, tveka inte att kontakta oss. Vi hjälper gärna till att ordna en dopgudstjänst för dig och stöder dig på din resa i tron.\nKontakta oss för mer information och för att planera din dopceremoni. Vi ser fram emot att vara en del av denna speciella händelse i ditt liv!",
   
    images: Mission,
    buttonText:"Läs mer",
    links:[
        
        {
            label: "Kontakta oss här",
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
      title:"Söndagsskola",
      subtitle: "Lets kids come to the Lord",
      description:"Vår söndagsskola erbjuder en trygg och inspirerande plats för barnen att lära känna Gud och växa i sin tro. Vi tror på att varje barn har en speciell plats i Guds hjärta, och vi vill ge dem verktygen att förstå Bibeln på ett roligt och engagerande sätt.\nSöndagsskolan är en plats där barnen får lära sig om Guds kärlek genom lek, sång, berättelser och praktiska aktiviteter. Vi välkomnar alla barn, oavsett ålder, att vara med och upptäcka den kristna tron på sitt eget sätt.\nOm du vill veta mer om vår söndagsskola eller anmäla ditt barn, tveka inte att kontakta oss. Vi ser fram emot att ge ditt barn en trygg och lärorik upplevelse varje söndag! ", 
      start: new Date(2024, 9, 30, 12, ),
      end:new Date(2024, 9, 30, 13, 30),
   location:"BKC",  
   buttonText:"Läs mer",
   links: [
    {
      label: "Borås Kristna Skola",
      url: "https://bkskola.org/",
    },
    {
      label: "BKC Ung",
      url: "#youth",
    },
    
  ]    
  }
  
export const BKCkYouth:CardTextSectionModel = {
    id:"youth",
    title:"Ungdomsgrupp",
    subtitle: "",
    description:" Vår ungdomsgrupp är en plats för unga människor att växa i sin tro, bygga vänskap och hitta stöd i en gemenskap som värdesätter både individuell och kollektiv utveckling. Vi erbjuder en trygg och öppen miljö där ungdomar kan diskutera tro, livsfrågor och framtidsdrömmar.\nGenom bibliska studier, aktiviteter, evenemang och sociala sammankomster får ungdomarna möjlighet att upptäcka och fördjupa sin relation med Gud, samtidigt som de stärker banden med andra unga i församlingen.\n Om du är ung och vill vara en del av vår ungdomsgrupp eller har frågor, tveka inte att kontakta oss. Vi ser fram emot att välkomna dig till gemenskapen och resan i tron! ", 
    start: new Date(2024, 9, 30, 19, 30),
    end: new Date(2024, 9, 30, 21, 30),

 location:"BKC", 
 buttonText:"Läs mer", 
}

export const homeGroup:ImageInforSectionModel= {
    id:"hemgrupper",
    title:"Hemgrupper",
    inforSectionId:"Huvud Pastor",
    subtitle:"",
    description: "Välkommen till vår Hemgrupp – en plats där gemenskap, tro och vardagsliv möts!\nI en värld som ofta känns stressig och isolerande vill vi erbjuda en varm och inbjudande gemenskap där vi kan dela livet tillsammans. Våra hemgrupper är smågrupper som träffas regelbundet i hem eller andra mysiga miljöer för att samtala om tro, be tillsammans och uppmuntra varandra i vardagen.\nOavsett var du befinner dig i din tro är du välkommen att vara en del av vår gemenskap. Här får du möjlighet att lära känna nya vänner, ställa frågor om livet och tron samt växa i din relation med Gud. Vi ser fram emot att träffa dig! ",
    images:HomeGroup,
    buttonText:"Läs mer" 
    }
    export const seniorgroup:ImageInforSectionModel= {
        id:"seniorgrupper",
        title:"Seniorgrupp",
        inforSectionId:"senior",
        subtitle:"",
        description: "Välkommen till vår Seniorgrupp – en gemenskap för dig som vill dela livet, tron och glädjen tillsammans med andra i samma livsskede!\nI vår seniorgrupp träffas vi regelbundet för att umgås, samtala om tron, be tillsammans och stötta varandra i vardagen. Här finns utrymme för både djupa samtal och skratt, och vi vill skapa en varm och inkluderande miljö där alla känner sig välkomna.\nOavsett om du har varit troende länge eller är nyfiken på kristen tro, finns det en plats för dig i vår gemenskap. Kom och upplev vänskap, inspiration och meningsfulla stunder tillsammans med oss! ",
        images:SeniorGroup,
        buttonText:"Läs mer" 
        }
        export const womangroup:ImageInforSectionModel= {
            id:"woman",
            title:"Kvinnogrupp",
            inforSectionId:"woman",
            subtitle:" ",
            description: "Välkommen till vår Kvinnogrupp – en plats för gemenskap, styrka och andlig tillväxt! \nHär samlas vi kvinnor för att dela livet, stötta varandra och inspireras i vår tro. Genom samtal, bön och gemensamma aktiviteter vill vi uppmuntra varandra att växa både andligt och personligt. Det är en trygg och varm gemenskap där vi kan dela våra erfarenheter, glädjeämnen och utmaningar.\nOavsett var du befinner dig i livet är du välkommen att vara en del av vår systergemenskap. Tillsammans stärker vi varandra och bygger relationer som bär genom livets alla säsonger! ",
            images:WomanGroup,
            buttonText:"Läs mer" 
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
   
   
    "Vi svarar så snart som möjlight.",
  
    "Du kan också ringa eller skicka SMS till oss.",
  
    "Varmt välkommen att höra av dig.",
  
  ];