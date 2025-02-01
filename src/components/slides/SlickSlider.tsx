import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import EventDetailsModal from "../forms/EventDetailModel";
import { CalendarEvent } from "../../models/CalendarEvent";
import { useEvents } from "../../context/EventContext";
function SlickSlider( ) {
  const [selectedEvent, setSelectedEvent] = useState<
  CalendarEvent | undefined
  >(undefined);
  const { events } = useEvents();
  const newsEvents = events.filter((event) => event.showOnNews === true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      (sliderRef.current as any).slickPrev();
    }
  };
  const handleSlideClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(undefined);
  };
 
  const displayImages = newsEvents.map((event, i) => (
    <div key={i} className="slide" onClick={() => handleSlideClick(event)}>
      <div
        className="image-container"
        style={{ backgroundImage: `url(/images/${event.imgUrl})`}}
      >
          <img
        src={`/images/${event.imgUrl}`} // Use the same URL logic for image
        alt={event.title}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
        <div className="text-overlay">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          {/*  {event.startTime && (

          <p>{formatDateTime(event.startTime)}</p>
          )} */}

          <p>{event.start}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="slider-container">
      <section className="slick-container">
        <Slider ref={sliderRef} {...settings}>
          {displayImages}
        </Slider>
        <div className="slick-arrows">
          <button onClick={previous}>
            <IoIosArrowBack />
          </button>
          <button onClick={next}>
            <IoIosArrowForward />
          </button>
        </div>
      </section>
      <EventDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
      />
    </div>
  );
}

export default SlickSlider;


// function SlickSlider({ events }: { events: HighlightEvent[] }) {
//     const [selectedEvent, setSelectedEvent] = useState<
//       HighlightEvent | undefined
//     >(undefined);
//     const [isModalOpen, setIsModalOpen] = useState(false);
  
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       pauseOnHover: true,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1,
//           },
//         },
//       ],
//     };
  
//     let sliderRef = useRef<Slider>(null);
  
//     const next = () => {
//       if (sliderRef.current) {
//         (sliderRef.current as any).slickNext();
//       }
//     };
  
//     const previous = () => {
//       if (sliderRef.current) {
//         (sliderRef.current as any).slickPrev();
//       }
//     };
//     const handleSlideClick = (event: HighlightEvent) => {
//       setSelectedEvent(event);
//       setIsModalOpen(true);
//     };
  
//     const handleCloseModal = () => {
//       setIsModalOpen(false);
//       setSelectedEvent(undefined);
//     };
  
//     const displayImages = events.map((event, i) => (
//       <div key={i} className="slide" onClick={() => handleSlideClick(event)}>
//         <div
//           className="image-container"
//           style={{ backgroundImage: `url(${event.image})` }}
//         >
//           <div className="text-overlay">
//             <h2>{event.title}</h2>
//             <p>{event.description}</p>
//             {/*  {event.startTime && (
  
//             <p>{formatDateTime(event.startTime)}</p>
//             )} */}
  
//             <p>{event.startTime}</p>
//           </div>
//         </div>
//       </div>
//     ));
  
//     return (
//       <div className="slider-container">
//         <section className="slick-container">
//           <Slider ref={sliderRef} {...settings}>
//             {displayImages}
//           </Slider>
//           <div className="slick-arrows">
//             <button onClick={previous}>
//               <IoIosArrowBack />
//             </button>
//             <button onClick={next}>
//               <IoIosArrowForward />
//             </button>
//           </div>
//         </section>
//         <EventDetailsModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           event={selectedEvent}
//         />
//       </div>
//     );
//   }
  
//   export default SlickSlider;
  