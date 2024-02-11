import React, { Component } from "react";
import { ReactComponent as ConcreteCleaningIcon } from "../../../public/assets/images/icons/concrete.svg";
import { ReactComponent as HouseIcon } from "../../../public/assets/images/icons/house.svg";
import { ReactComponent as HoodIcon } from "../../../public/assets/images/icons/hood.svg";
import { ReactComponent as FanIcon } from "../../../public/assets/images/icons/fan.svg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/dist/styles.css";
import Video from "yet-another-react-lightbox/dist/plugins/video";
import Thumbnails from "yet-another-react-lightbox/dist/plugins/thumbnails";
import "yet-another-react-lightbox/dist/plugins/thumbnails/thumbnails.css";


const ServiceList = [
  {
    icon: <HoodIcon />,
    title: "Hood Cleaning",
    description:
      "Expert hood cleaning services ensuring kitchen efficiency and safety by maintaining a grease-free environment.",
    images: ["/assets/images/services/hood_cleaning.jpg"],

  },
  {
    icon: <HouseIcon />,
    title: "House Washing",
    description:
      "Professional house washing services to remove dirt and rejuvenate the exterior of your home.",
    images: ["/assets/images/services/house_cleaning_1.jpg", "assets/images/services/house_cleaning_2.jpg", "assets/images/services/house_cleaning_3.jpg"],
  },
  {
    icon: <ConcreteCleaningIcon />,
    title: "Concrete Cleaning",
    description:
      "Efficient concrete cleaning for everything from sidewalks to driveways, restoring the original look of your concrete surfaces.",
    images: ["assets/images/services/concrete_cleaning.jpg", "assets/images/services/concrete_cleaning_2.jpg", "assets/images/services/concrete_cleaning_3.jpg", "assets/images/services/concrete_cleaning_4.jpg", "assets/images/services/concrete_cleaning_5.jpg", "assets/images/services/concrete_cleaning_6.jpg", "assets/images/services/concrete_cleaning_7.jpg", "assets/images/services/concrete_cleaning_8.jpg", "assets/images/services/concrete_cleaning_9.jpg", "assets/images/services/concrete_cleaning_10.jpg", "assets/images/services/concrete_cleaning_11.jpg", "assets/images/services/concrete_cleaning_12.jpg", "assets/images/services/concrete_cleaning_13.jpg", "assets/images/services/concrete_cleaning_14.jpg", "assets/images/services/concrete_cleaning_15.jpg", "assets/images/services/concrete_cleaning_16.jpg"],
    video: "assets/images/services/concrete_cleaning.mp4",
    videoThumbnail: "assets/images/services/concrete_cleaning_thumbnail.png"

  },
  {
    icon: <FanIcon />,
    title: "Complete Exhaust System Cleaning",
    description:
      "Thorough cleaning services for your entire exhaust system, ensuring optimal performance and longevity by removing buildup and contaminants.",
    images: ["assets/images/services/exhaust_system_before.jpg", "assets/images/services/exhaust_system_after.jpg"],

  },
];

class ServiceThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightboxOpen: false,
      selectedService: null,
    };
  }

  openLightbox = (service) => {
    console.log("Opening lightbox for service:", service.title); // Check which service is clicked
    this.setState({
      isLightboxOpen: true,
      selectedService: service,
    });
  };

  closeLightbox = () => {
    this.setState({
      isLightboxOpen: false,
      selectedService: null,
    });
  };

  render() {
    const { isLightboxOpen, selectedService } = this.state;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    let slides = selectedService ? selectedService.images.map(src => ({ src })) : [];
    if (selectedService) {
      // Convert images to slide objects
      slides = selectedService.images.map(src => ({ src, type: "image" }));

      // Add video slide if it exists
      if (selectedService.video) {
        slides.push({
          type: "video",
          sources: [{ src: selectedService.video, type: "video/mp4" }], // Define video type here
          muted: true, // Ensuring the video is muted by default
          // Include additional video attributes if needed
          // poster: "URL_TO_POSTER_IMAGE", // Optional: if you have a poster image
          // width and height can be specified if known
        });
      }
    }
    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
              <div className="service service__style--2" onClick={() => this.openLightbox(val)}>
                <div className="icon">{val.icon}</div>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Lightbox Component - Make sure it's conditionally rendered */}
        {isLightboxOpen && (
          <Lightbox
            open={isLightboxOpen}
            close={this.closeLightbox}
            slides={slides}
            plugins={[Video, Thumbnails]}
            thumbnails={{
              position: "bottom", // can be "top", "bottom", "start", or "end"
              width: 120,
              height: 80,
              // other configurations...
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

export default ServiceThree;
