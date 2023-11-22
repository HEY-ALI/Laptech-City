// src/components/Services.js
import React from 'react';
import ServiceCard from './ServiceCard';
import '../styles/Services.css'; 

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Laptop Repair Services',
      image: '/images/site/service1.jpg',
      content: "Unlock the full potential of your laptop with our All-Brands Laptop Repair services in Faridabad. At Laptech City, we go beyond just fixing laptops – we provide an entire experience. Our dedicated team is committed to delivering top-notch repair and upgrade services, ensuring your laptop runs like a dream. What sets us apart? It's not just the speedy repairs, but our commitment to outstanding service, unmatched quality, honesty, and a guarantee of your privacy. Because at Laptech City, we don't just fix laptops; we redefine what you should expect from a laptop repair service quick, reliable, and hassle-free.",
    },
    {
      id: 2,
      title: 'Desktop Repair services',
      image: '/images/site/service2.jpg',
      content: "Experience top-tier Desktop Repair Services at Laptech City. Is your trusty desktop feeling under the weather? Fret not! Our skilled technicians specialize in diagnosing and fixing a variety of desktop issues, from hardware hiccups to software snags. Whether it's a sluggish performance, mysterious error messages, or any other desktop dilemma, we're here to provide swift and reliable solutions. Trust us to breathe new life into your desktop, ensuring it runs smoothly and efficiently. At Laptech City, we're not just repairing desktops; we're restoring your digital hub to its optimal functionality. Say goodbye to desktop troubles and hello to a seamlessly running computer – because your digital experience matters to us.",
    },
    {
      id: 3,
      title: 'Chip level Services',
      image: '/images/site/service3.jpg',
      content: "Dive into precision with our Chip-Level Motherboard Repair Services. When it comes to intricate motherboard issues, trust the experts at Laptech City. Our skilled technicians possess the expertise to delve deep into the heart of your device, fixing complex chip-level problems that others may shy away from. Whether it's a faulty component, intricate soldering, or challenging chipset repairs, we've got the tools and know-how to bring your motherboard back to life. At Laptech City, we're not just repairing motherboards; we're conducting surgical precision to revive the very core of your device. Experience the difference – where expertise meets innovation in chip-level services.",
    },
    {
      id: 4,
      title: 'Costum Build PCs',
      image: '/images/site/service4.jpg',
      content: "Step into the world of tailor-made computing with our Custom-Built PC Service. At Laptech City, we understand that one size doesn't fit all when it comes to technology. Our expert team crafts personalized computing solutions designed to meet your specific needs. Whether you're a gamer seeking a powerhouse rig, a creative professional requiring high-performance specifications, or anyone desiring a unique computing experience, we've got you covered. Choose the components, set the specifications, and let us build a PC that perfectly aligns with your preferences. At Laptech City, we don't just assemble computers; we bring your digital dreams to life with bespoke, high-performance custom-built PCs.",
    },
    {
      id: 5,
      title: 'Refurbished Laptops',
      image: '/images/site/service5.jpg',
      content: 
      "Discover quality and affordability with our Refurbished Laptop Sale services. At Laptech City, we believe in offering reliable computing solutions without breaking the bank. Our range of refurbished laptops undergoes meticulous inspection and reconditioning, ensuring you get a like-new device at a fraction of the cost. Whether you're a student, professional, or someone seeking budget-friendly computing options, our refurbished laptops provide a perfect balance of performance and savings. Embrace sustainability and smart spending with our curated selection of high-quality, pre-loved laptops. At Laptech City, we don't just sell refurbished laptops; we redefine value by delivering cost-effective, reliable computing solutions to suit every need.",
    },
    {
      id: 6,
      title: 'Data Recovery Services',
      image: '/images/site/service6.jpg',
      content: "Experience the power of retrieval with our Data Recovery Services. At Laptech City, we understand the heartache that comes with lost data, whether it's cherished memories or critical business files. Our skilled technicians specialize in data recovery, employing advanced techniques to retrieve your valuable information from a variety of storage devices. From accidental deletions to complex data corruption issues, we're equipped to handle it all. Trust us to navigate through the intricacies of data recovery and reunite you with your digital treasures. At Laptech City, we don't just recover data; we restore peace of mind by salvaging what matters most to you.",
    }
  ];

  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <p>Explore top-notch laptop and MacBook repairs at Laptech City. Trust us for high-quality and affordable solutions. Contact us for reliable and budget-friendly services today!</p>
      <div className="service-card-container">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            image={service.image}
            content={service.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
