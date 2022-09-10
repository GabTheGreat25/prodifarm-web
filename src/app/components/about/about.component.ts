import { Component, OnInit } from "@angular/core";
import { environment as env } from "src/environments/environment";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor() {}
  aboutImage = `${env.ASSETS_URL}images/svg/promdi-about-1.svg`;
  aboutImage3 = `${env.ASSETS_URL}images/png/about-3.png`;
  startedImage = `${env.ASSETS_URL}images/png/about-2.png`;
  farmerArt = `${env.ASSETS_URL}images/svg/farmer-art.svg`;
  consumerArt = `${env.ASSETS_URL}images/svg/consumer-art.svg`;
  riderArt = `${env.ASSETS_URL}images/svg/rider-art.svg`;
  articles = [
    {
      articleName: "about",
      headings: ["About", "PromdiFarm"],
      isCenterHeading: true,
      isGreenHeading: true,
      paragraphs: [
        {
          content: `We are an <strong>Agri-Tech Company</strong> that aims to help farmers by providing them a platform to sell their products and
          increase their profits. We want to enhance the farmer’s growth and capability in selling their product by matching them directly
          to the customer. We help them distribute their own products by eliminating the participation of third-party middlemen and giving
          them the freedom to set their own prices.`,
        },
        {
          content: `We are closely working to provide sustainable supplies of food for the country. We also build communities that help farmers to
          embrace new technologies to connect their own products to a much wider audience. We provide healthy foods to our customers by
          serving them freshly harvested goods directly from the farms.`,
        },
        {
          content: `We are also giving our part to help the economy by providing income for our minimum-wage earners by partnering with them. This
          partnership includes setting up location-based outlets as a household business as well as additional stores where farmers can sell
          their own products. We also partner with people to become our partner riders. With all the locations in place and acts as pick-up
          points where riders can pick up their orders. This approach is a closed-loop system that benefits and compliments each other.`,
        },
        {
          content: `"We believe and envision that <strong>Agriculture is the future.</strong> That is why we strive to create a product to serve the
          <strong>farmers, consumers, and riders.</strong>"`,
        },
      ],
      image: {
        name: this.aboutImage,
        alt: "Farmer-Rider-Outlet-Consumer Interaction",
        isBg: false,
      },
    },
    {
      articleName: "how-promdi-started",
      headings: ["How", "PromdiFarm", "Started"],
      isCenterHeading: false,
      isGreenHeading: false,
      paragraphs: [
        {
          content: `<strong>PromdiFarm</strong> was conceptualized and founded in 2018 by <strong>Mark Anthony Ignacio</strong> and his friends as
          Co-founders but later on, Mark is the only one left in the project and slowly developing it alone.`,
        },
        {
          content: `Mark was born and raised in Nueva Ecija (Rice Capital of the Philippines) by his parents who are farmers. He grew up seeing the
          hardship that his parents had doing agricultural farming in the province. As he grew up, He promise himself to help his parents in
          the future.`,
        },
        {
          content: `He saw that the problem with agricultural farming is in the price of products being sold at a lower price to the middleman. These
          middlemen then sold these products for much higher prices. To solve such problems, we need to minimize the middleman. He realized
          there is no outlet available where farmers can post their own products and set their own prices. He then took these matters in his
          own hands to create this platform.`,
        },
        {
          content: `He started creating a website where farmers can post their own products. Some of his friends helped him to create the mobile
          application. The development came to a stop because he needed to focus on supporting his family.`,
        },
        {
          content: `In the midst of the pandemic, the passion came back to Mark to continue the development of PromdiFarm. In August of 2021, He
          assembled a group of like-minded individuals to materialize the project. Now, Farmers all over the country are being served using
          our platform. There are warehouses scattered all over NCR and there are future expansions in Cavite, Cebu, and Davao.`,
        },
      ],
      image: {
        name: this.startedImage,
        alt: undefined,
        isBg: true,
      },
    },
    {
      articleName: "how-promdi-works",
      headings: ["How", "PromdiFarm", "Works?"],
      isGreenHeading: true,
      paragraphs: [
        {
          content: `<strong>Our platform</strong> directly connects farmers and customers.
          Farmers have the ability to post their own products and set their own price. Customers then purchase these products directly from the farmer using our web application. After the purchases are established, the farmer will then send the product to our nearest warehouse facilities within their vicinity. These warehouses will process the product for packaging and transport it to our main hub. The riders will then pickup the products specified on their purchase order assigned by our system and deliver it directly to the customer. After the customer received the product, the transaction is now completed and the farmer will receive the payment for his product. 
          `,
        },
      ],
      image: {
        name: this.aboutImage3,
        alt: "ProdiFarm Workflow Diagram",
        isBg: false,
      },
    },
  ];
  cards = [
    {
      image: this.farmerArt,
      darkText: "Helping the growth",
      greenText: "of our Farmers",
    },
    {
      image: this.consumerArt,
      darkText: "Healthy foods",
      greenText: "for our Consumers",
    },
    {
      image: this.riderArt,
      darkText: "Fast deliveries",
      greenText: "with our Riders",
    },
  ];
  missionVision = [
    {
      headingStart: "Our",
      headingEnd: "Mission",
      content:
        "To empower farmers by providing them the necessary platform for their product by providing End-to-End support services for farmers and consumers.",
    },
    {
      headingStart: "Our",
      headingEnd: "Vision",
      content:
        "To be the number one Agri-Tech Company that provides a platform to connect farmers, producers directly to the client for locally produced products without a middleman.",
    },
  ];
  coreValues = [
    {
      headingStart: "P",
      headingEnd: "roactive",
      content: "We don't wait for instructions before we make any actions.",
    },
    {
      headingStart: "R",
      headingEnd: "esilient",
      content: "We don’t stop when we are tired. We stop when we are done.",
    },
    {
      headingStart: "O",
      headingEnd: "pen-Minded",
      content: "We are open to suggestions but respect each other’s decision.",
    },
    {
      headingStart: "M",
      headingEnd: "indful",
      content: "We are sensitive to our surroundings and to each other's feelings.",
    },
    {
      headingStart: "D",
      headingEnd: "ynamic",
      content: "We adapt to changes but we do it carefully.",
    },
    {
      headingStart: "I",
      headingEnd: "nnovative",
      content: "We are always thinking outside the box.",
    },
  ];
  ngOnInit(): void {}
}
