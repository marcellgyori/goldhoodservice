import React, { Component } from "react";
import { ReactComponent as ConcreteCleaningIcon } from "../../../public/assets/images/icons/concrete.svg";
import { ReactComponent as HouseIcon } from "../../../public/assets/images/icons/house.svg";
import { ReactComponent as HoodIcon } from "../../../public/assets/images/icons/hood.svg";
import { ReactComponent as FanIcon } from "../../../public/assets/images/icons/fan.svg";
import Modal from './Modal'; // Import the modal component

const ServiceList = [
  {
    icon: <HouseIcon />,
    title: "House Washing",
    description:
      "Professional house washing services to remove dirt and rejuvenate the exterior of your home.",
    images: ["/assets/images/services/house_cleaning_1.jpg", "assets/images/services/house_cleaning_2.jpg", "assets/images/services/house_cleaning_3.jpg"],
  },
  {
    icon: <HoodIcon />,
    title: "Hood Cleaning",
    description:
      "Expert hood cleaning services ensuring kitchen efficiency and safety by maintaining a grease-free environment.",
    images: ["/assets/images/services/hood_cleaning.jpg"],

  },
  {
    icon: <ConcreteCleaningIcon />,
    title: "Concrete Cleaning",
    description:
      "Efficient concrete cleaning for everything from sidewalks to driveways, restoring the original look of your concrete surfaces.",
    images: ["assets/images/services/concrete_cleaning.jpg"],
    video: "assets/images/services/concrete_cleaning.mp4",
    videoThumbnail: "assets/images/services/concrete_cleaning_thumbnail.png"

  },
  {
    icon: <FanIcon Users />,
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
      isModalOpen: false,
      selectedService: null,
      selectedIndex: 0,
    };
  }

  openModal = (service) => {
    this.setState({
      isModalOpen: true,
      selectedService: service,
      modalSize: service.images.length + (service.video ? 1 : 0)
    });
  };


  closeModal = () => {
    this.setState({
      isModalOpen: false,
      selectedService: null,
      selectedIndex: 0 // Reset selectedIndex to 0
    });
  };

  selectMedia = (index) => {
    this.setState({ selectedIndex: index });
  };
  render() {
    const { isModalOpen, selectedService } = this.state;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
              <div className="service service__style--2" onClick={() => this.openModal(val)}>
                <div className="icon">{val.icon}</div>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          service={selectedService}
          size={this.state.modalSize} // Pass the size or class name based on the content
          selectedIndex={this.state.selectedIndex}
          selectMedia={this.selectMedia}
        />
      </React.Fragment>
    );
  }
}

export default ServiceThree;
