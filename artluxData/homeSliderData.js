export const homeSliderData = [
  {
    id: 0,
    title: "K1ngZMadox",
    featuredImageUrl:
      "https://images.unsplash.com/photo-1656381620321-bddff61435c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    floorPrice: "5",
    path: "/collection/help_center",
  },
  {
    id: 1,
    title: "1Help Center",
    featuredImageUrl:
      "https://images.unsplash.com/photo-1617255227693-44738e832383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    floorPrice: "12",
    path: "/collection/help_center",
  },
  {
    id: 2,
    title: "2Help Center",
    featuredImageUrl:
      "https://images.unsplash.com/photo-1542488586-13e4ad0330a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=539&q=80",
    floorPrice: "23",
    path: "/collection/help_center",
  },
  {
    id: 3,
    title: "3Help Center",
    featuredImageUrl:
      "https://images.unsplash.com/photo-1656761185428-951b06621492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    floorPrice: "55",
    path: "/collection/help_center",
  },
];

const SlickArrowLeft = ({ onClick }) => (
  <i className="slick-arrow prev fa fa-arrow-left" onClick={onClick}></i>
);

const SlickArrowRight = ({ onClick }) => (
  <i className="slick-arrow next fa fa-arrow-right" onClick={onClick}></i>
);

export const settings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
  dots: false,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,

  centerMode: true,
  centerPadding: "200px",
  responsive: [
    {
      breakpoint: 1445,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
        centerPadding: "50px",
      },
    },
  ],
  className: "banner-sliders",
};
