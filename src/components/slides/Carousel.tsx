import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slide.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { useState } from "react";
import EventDetailsModal from "../forms/EventDetailModel";
import { CalendarEvent } from "../../models/CalendarEvent";

const Carousel = ({ events }: { events: CalendarEvent[] }) => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent| undefined>(
    undefined
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSlideClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(undefined);
  };
  const displayEvents = events.map((event) => {
    let imageUrl: string | undefined;

    // Handle different cases for `event.image`
    if (typeof event.imgUrl === "string") {
      imageUrl = event.imgUrl;
    } else if (Array.isArray(event.imgUrl)) {
      imageUrl =
        typeof event.imgUrl  === "string" ? event.imgUrl : undefined;
    }

    return (
      <SwiperSlide
        className="single-slide"
        key={event.id}
        onClick={() => handleSlideClick(event)}
      >
        {imageUrl && <img src={imageUrl} alt={event.title} />}{" "}
        <h2>{event.title}</h2>
        {event.start && <h5>{event.start}</h5>}
        {event.location && <h5>{event.location}</h5>}
        {event.description && <p  className="description">{event.description}</p>}{" "}
      </SwiperSlide>
    );
  });

  return (
    <section className="swiper-slider">
      <EventDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
      />
      <Swiper
        effect={"coverflow"}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="swipe-content"
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.75": {
            slidesPerView: 1,
          },
          "@1.00": {
            slidesPerView: 3,
          },
          "@1.50": {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {displayEvents}
      </Swiper>
    </section>
  );
};

export default Carousel;
