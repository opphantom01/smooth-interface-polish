import productFront from "@/assets/product-front.jpg";
import productBack from "@/assets/product-back.jpg";
import carouselModel1 from "@/assets/carousel-model1.jpg";
import carouselModel2 from "@/assets/carousel-model2.jpg";
import carouselLook from "@/assets/carousel-look.jpg";
import productFlaredDenim from "@/assets/product-flared-denim.jpg";
import productHenleyBlack from "@/assets/product-henley-black.jpg";
import productHenleyGrey from "@/assets/product-henley-grey.jpg";
import productHenleyBlue from "@/assets/product-henley-blue.jpg";
import productHenleyBlue2 from "@/assets/product-henley-blue2.jpg";
import productWidePants from "@/assets/product-wide-pants.jpg";
import productFlaredBlack from "@/assets/product-flared-black.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  sizes: string[];
  images: { src: string; alt: string }[];
  thumbnail: string;
  thumbnailAlt: string;
  measurements: {
    length: string;
    sizes: { label: string; details: string }[];
  };
}

export const products: Product[] = [
  {
    id: "vintage-flared-denim",
    name: "Vintage Flared Denim",
    price: 1299,
    priceLabel: "₹1299",
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: productFront, alt: "Front" },
      { src: productBack, alt: "Back" },
      { src: carouselModel1, alt: "Model 1" },
      { src: carouselModel2, alt: "Model 2" },
      { src: carouselLook, alt: "Look" },
    ],
    thumbnail: productFront,
    thumbnailAlt: productBack,
    measurements: {
      length: "43 across all sizes",
      sizes: [
        { label: "Size 28", details: "Thigh 10.5 | Leg Opening 18" },
        { label: "Size 30", details: "Thigh 11.0 | Leg Opening 18.5 (Model wears 30)" },
        { label: "Size 32", details: "Thigh 11.5 | Leg Opening 19" },
        { label: "Size 34", details: "Thigh 12.5 | Leg Opening 20" },
      ],
    },
  },
  {
    id: "flared-denim-jeans",
    name: "Flared Denim Jeans",
    price: 1299,
    priceLabel: "₹1299",
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: productFlaredDenim, alt: "Front" },
    ],
    thumbnail: productFlaredDenim,
    thumbnailAlt: productFlaredDenim,
    measurements: {
      length: "43 across all sizes",
      sizes: [
        { label: "Size 28", details: "Thigh 10.5 | Leg Opening 18" },
        { label: "Size 30", details: "Thigh 11.0 | Leg Opening 18.5 (Model wears 30)" },
        { label: "Size 32", details: "Thigh 11.5 | Leg Opening 19" },
        { label: "Size 34", details: "Thigh 12.5 | Leg Opening 20" },
      ],
    },
  },
  {
    id: "henley-long-sleeve-black",
    name: "Henley Long Sleeve - Black",
    price: 1299,
    priceLabel: "₹1299",
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: productHenleyBlack, alt: "Front" },
    ],
    thumbnail: productHenleyBlack,
    thumbnailAlt: productHenleyBlack,
    measurements: {
      length: "43 across all sizes",
      sizes: [
        { label: "Size 28", details: "Thigh 10.5 | Leg Opening 18" },
        { label: "Size 30", details: "Thigh 11.0 | Leg Opening 18.5 (Model wears 30)" },
        { label: "Size 32", details: "Thigh 11.5 | Leg Opening 19" },
        { label: "Size 34", details: "Thigh 12.5 | Leg Opening 20" },
      ],
    },
  },
  {
    id: "henley-long-sleeve-grey",
    name: "Henley Long Sleeve - Grey",
    price: 1299,
    priceLabel: "₹1299",
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: productHenleyGrey, alt: "Front" },
    ],
    thumbnail: productHenleyGrey,
    thumbnailAlt: productHenleyGrey,
    measurements: {
      length: "43 across all sizes",
      sizes: [
        { label: "Size 28", details: "Thigh 10.5 | Leg Opening 18" },
        { label: "Size 30", details: "Thigh 11.0 | Leg Opening 18.5 (Model wears 30)" },
        { label: "Size 32", details: "Thigh 11.5 | Leg Opening 19" },
        { label: "Size 34", details: "Thigh 12.5 | Leg Opening 20" },
      ],
    },
  },
  {
    id: "henley-long-sleeve-blue",
    name: "Henley Long Sleeve - Blue",
    price: 1299,
    priceLabel: "₹1299",
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: productHenleyBlue, alt: "Front" },
      { src: productHenleyBlue2, alt: "Back" },
    ],
    thumbnail: productHenleyBlue,
    thumbnailAlt: productHenleyBlue2,
    measurements: {
      length: "43 across all sizes",
      sizes: [
        { label: "Size 28", details: "Thigh 10.5 | Leg Opening 18" },
        { label: "Size 30", details: "Thigh 11.0 | Leg Opening 18.5 (Model wears 30)" },
        { label: "Size 32", details: "Thigh 11.5 | Leg Opening 19" },
        { label: "Size 34", details: "Thigh 12.5 | Leg Opening 20" },
      ],
    },
  },
  {
    id: "wide-leg-pants",
    name: "Wide Leg Pants",
    price: 1299,
    priceLabel: "₹1299",
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: productWidePants, alt: "Front" },
    ],
    thumbnail: productWidePants,
    thumbnailAlt: productWidePants,
    measurements: {
      length: "43 across all sizes",
      sizes: [
        { label: "Size 28", details: "Thigh 10.5 | Leg Opening 18" },
        { label: "Size 30", details: "Thigh 11.0 | Leg Opening 18.5 (Model wears 30)" },
        { label: "Size 32", details: "Thigh 11.5 | Leg Opening 19" },
        { label: "Size 34", details: "Thigh 12.5 | Leg Opening 20" },
      ],
    },
  },
  {
    id: "flared-pants-black",
    name: "Flared Pants - Black",
    price: 1299,
    priceLabel: "₹1299",
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: productFlaredBlack, alt: "Front" },
    ],
    thumbnail: productFlaredBlack,
    thumbnailAlt: productFlaredBlack,
    measurements: {
      length: "43 across all sizes",
      sizes: [
        { label: "Size 28", details: "Thigh 10.5 | Leg Opening 18" },
        { label: "Size 30", details: "Thigh 11.0 | Leg Opening 18.5 (Model wears 30)" },
        { label: "Size 32", details: "Thigh 11.5 | Leg Opening 19" },
        { label: "Size 34", details: "Thigh 12.5 | Leg Opening 20" },
      ],
    },
  },
];
