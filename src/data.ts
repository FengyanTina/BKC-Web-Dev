import PrayerBible from "./assets/spiritual-prayer-hands-holding-bible.jpg";
import worshipHands from "./assets/worshipHands.jpg";
import edward from "./assets/edward.jpg";
import BethelWorship from "./assets/BethelWorship.jpg";
import Worship from "./assets/Worship.jpeg";
import Conference from "./assets/Conference.jpg";
import Mission from "./assets/Mission.png";
import Prayer from "./assets/Prayer.jpg";
import Bible from "./assets/Bible.jpg";
import welcome2 from "./assets/welcome2.jpg"
import Varhistoria from "./assets/Varhistoria.jpg"
import DavidB from "./assets/DavidB.jpg"
import { EventCategory,Event } from "./models/Event";
import { ActivitySocialMediaScetionCardModel } from "./models/ActivitySocialMediaSectionModel";
import { ImageInforSectionModel } from "./models/ImageInforSection";
import { User, UserCategory } from "./models/User";


  
const initialUsers: User[] = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      userId: "johndoe123",
      userName: "johndoe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      category:UserCategory.Member // Replace with appropriate UserCategory type
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      userId: "janesmith456",
      userName: "janesmith",
      email: "jane.smith@example.com",
      phoneNumber: "234-567-8901",
      category:UserCategory.Member // Replace with appropriate UserCategory type
    },
    {
      id: "3",
      firstName: "Alice",
      lastName: "Johnson",
      userId: "alicejohnson789",
      userName: "alicej",
      email: "alice.johnson@example.com",
      phoneNumber: "345-678-9012",
      category:UserCategory.Member
    },
    {
      id: "4",
      firstName: "Bob",
      lastName: "Williams",
      userId: "bobwilliams101",
      userName: "bobw",
      email: "bob.williams@example.com",
      phoneNumber: "456-789-0123",
      category:UserCategory.Member
    },
    {
      id: "5",
      firstName: "Charlie",
      lastName: "Brown",
      userId: "charliebrown202",
      userName: "charlieb",
      email: "charlie.brown@example.com",
      phoneNumber: "567-890-1234",
      category:UserCategory.TeamLeader
    },
    {
      id: "6",
      firstName: "Emily",
      lastName: "Davis",
      userId: "emilydavis303",
      userName: "emilyd",
      email: "emily.davis@example.com",
      phoneNumber: "678-901-2345",
      category:UserCategory.TeamLeader// Replace with appropriate UserCategory type
    },
  ];
  
  export default initialUsers;
  
  export const newHere:ImageInforSectionModel ={
    id:'23',
    inforSectionId:"",
    title:"New Here? ",
    subtitle:"can't wait to meet you!",
    description:"You may find information you need in below links or feel free to contact us. ",
    images:welcome2,
  }

  export const comingEvents:Event[] = [
    {
      id: "1",
      title: "Sunday Worship",
      category:EventCategory.Event,
      startTime: new Date("2024-09-22T10:00:00"),
      description: "Join us for a special Sunday worship service.",
      image: worshipHands, // Use actual image URL
      location:"BKC"
    },
    {
      id: "2",
      title: "Community Outreach",
      category:EventCategory.Event,
      startTime: new Date("2024-09-25T14:00:00"),
      description: "Participate in our community outreach program.",
      image: edward, // Use actual image URL
       location:"BKC"
    },
    {
      id: "3",
      title: "Bible Study Group",
      category:EventCategory.Event,
      startTime: new Date("2024-09-27T19:00:00"),
      description: "Deep dive into the scriptures with our study group.",
      image: BethelWorship, // Use actual image URL
       location:"BKC"
    },
    {
      id: "4",
      title: "Prayer Meeting",
      category:EventCategory.Event,
      startTime: new Date("2024-09-30T08:00:00"),
      description: "Come together for our weekly prayer meeting.",
      image: Worship, // Use actual image URL
       location:"BKC"
    },
  ];
  export const sundayServiceSection  = {
    id: "1",
    time: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
    title: "Welcom to our Sunday Service! ",
    subTitle: "  Come as you are !",
    category:EventCategory.SundayService,
    images: Conference,
    description:
      "Live English simultaneous translation is available for theSunday services. Thought-provoking and engaging messages based on the Bible from our senior pastor, Tim Dilena. Each service lasts around 90 minutes. Engaging worship music. Come as you are. There is no dress code.",
  };
  
  export const sundayServiceCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "For Congregation",
    subtitle:"välkommen till vår kyrka nu på söndag!",
    startTime:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.SundayService,
    description:"Veckans höjdpunkt i kyrkan är våra gudstjänster! Varje söndag klockan 11 träffas vi i Borås Kristna Center och firar gudstjänst. Syftet är att upphöja och ära Gud tillsammans. Våra gudstjänster är öppna för alla och vi vill vara tydliga med allt vi gör, så att alla kan förstå.Våra gudstjänster innehåller bön och lovsång, predikan och förbön. Givetvis avslutar vi med ett fantastiskt kyrkfika. För dig som besöker oss för första gången är fikat dessutom helt gratis!",
    images: Worship 
  }
  export const sundaySchoolActivityCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "For Small Kids",
    subtitle:"BKC-KIDS",
    startTime:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.SundaySchoole,
    description:"BKC-Kids är för barn mellan 2-12 år. Barnens egen gudstjänst där vi tillsammans får möta spännande bibelpersoner, lyssna på Guds ord, lekar och tävlingar, vi äter korv och pysslar tillsammans. Kom med du också!",
    images: edward ,
  }
 
  export const youthActivityCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "For Young Adult",
    subtitle:"Bkc Ungdom",
    startTime:new Date(2024, 9, 22, 14, 30),
    category: EventCategory.YouthService,
    description:"Vi kommer att leva, sova och äta på sommargården Solviken som ligger 5 km utanför Fristad precis vid sjön Ärtingen. Det finns tillgång till ca 20 sängplatser så för att alla säkert ska på plats kommer vi även att ställa upp husvagnar eller erbjuda möjlighet att tälta för er som är riktigt äventyrliga! Vill du inte övernatta utan bara vara med dagtid går detta också bra, skriv då detta i anmälan!",
    images: worshipHands ,
  }
  export const homeGroupActivityCardInfor:ImageInforSectionModel={
    id: "1",
    inforSectionId:"",
    title: "Your Small Community",
    subtitle:"Together,Stronger!",
    startTime:new Date(2024, 9, 22, 14, 30),
    category:EventCategory.HomeGroup,
    description:"Bibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa. Jesus säger att han är vägen, sanningen och livet och var och en som längtar efter livets mening, efter tillvarons själva pulserande centrum, är välkommen in i hans stora famn.",
    images:Varhistoria 
  }
  
export const imageGallarytemData = [
    {
      img: Bible,
      title: "Bible Study",
     
      featured: true,
    },
    {
      img: Worship,
      title: "Juesus Conference",
     
    },
    {
      img: Prayer,
      title: "Praying for Borås",
     
    },
    {
      img: Conference,
      title: "Comminity Prayer",
 
    },
    {
      img: Mission,
      title: "Youth Camp",
      
    },
    {
      img: BethelWorship,
      title: "Togather Worship",
     
      featured: true,
    },
    {
      img: worshipHands,
      title: "Worship Conference",
    
    },
    {
      img: PrayerBible,
      title: "Study the words",
    
    },
  ];
  
  
  export const socialMediaActivityCardInfor:ActivitySocialMediaScetionCardModel={
    id: "1",
    inforSectionId:"",
    title: "All activities on Social media",
    subtitle:"Together,Stronger!",
    category: EventCategory.SocialMedia,
    description:"Under höstens tre första veckor (36-38) kommer vi uppmuntra till bön och fasta.Under höstens tre Under höstens tre Under höstens tre Under höstens tre tre Under höstens tre - auto updating activies from our social media",
    images:imageGallarytemData ,
  }
  export const news:Event[] = [
    {
      id: "1",
      startTime: new Date(2024, 9, 22, 14, 30), // October 22, 2024, 2:30 PM
      endTime:new Date(2024, 9, 22, 15, 30),
      title: "Reaching out ",
      image: PrayerBible,
      category:EventCategory.News,
      description:
        "An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.An exhibition featuring contemporary art pieces from local artists.",
    },
    {
      id: "2",
      startTime: new Date(2024, 9, 25, 19, 0), // October 25, 2024, 7:00 PM
      endTime:new Date(2024, 9, 25, 20, 0),
      title: "Easter camp",
      category:EventCategory.News,
      image: edward,
      description:
        "Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.Join the biggest technology conference of the year with keynote speakers.",
    },
    {
      id: "3",
      startTime: new Date(2024, 9, 27, 9, 0), // October 27, 2024, 9:00 AM
      endTime:new Date(2024, 9, 27, 10, 0), 
      title: "Charity Run",
      category:EventCategory.News,
      image: Worship,
      description:
        "Participate in the annual charity run to support a good cause.",
    },
    {
      id: "4",
      startTime: new Date(2024, 9, 30, 17, 30), // October 30, 2024, 5:30 PM
     endTime: new Date(2024, 9, 30, 19, 30), 
      title: "Food Festival",
      image: BethelWorship,
      category:EventCategory.News,
      description:
        "Savor delicious dishes from a variety of food vendors and enjoy live entertainment.",
    },
  ];
  export const Pastor= {
    title:"David B",
    subTitle:"Main Pastor",
    content: "BKC pastor, Blog,\n\nThe relationship between Tim Dilena and Times Square Church is a close one. Tim’s father, Paul Dilena, was the police captain in David Wilkerson’s bestselling book The Cross and the Switchblade and was the treasurer of the first Teen Challenge.\n\nPrior to the senior pastorate, he had been a frequent and well-loved speaker at Times Square Church for over 25 years.\n\nThe relationship between Tim Dilena and Times Square Church is a close one. Tim’s father, Paul Dilena, was the police captain in David Wilkerson’s bestselling book The Cross and the Switchblade and was the treasurer of the first Teen Challenge.\n\nPrior to the senior pastorate, he had been a frequent and well-loved speaker at Times Square Church for over 25 years.\n\nThe relationship between Tim Dilena and Times Square Church is a close one. Tim’s father, Paul Dilena, was the police captain in David Wilkerson’s bestselling book The Cross and the Switchblade and was the treasurer of the first Teen Challenge.",
    image: DavidB   
    }