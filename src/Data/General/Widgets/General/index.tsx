import { ImagePath } from "@/Constants";
import { ApexOptions } from "apexcharts";

export const ActiveProjectsSubTitle = [
  {
    text: "Projects this month",
  },
];
export const GeneralCardData = [
  {
    icon: "crown",
    title: "UserProfile",
    description: "Consectetur adipiscing",
    color: "primary",
  },
  {
    icon: "flash",
    title: "Latest Trends",
    description: "Minim veniam",
    color: "success",
  },
  {
    icon: "blend-2",
    title: "New Arrivals",
    description: "Excepteur sint",
    color: "warning",
  },
  {
    icon: "color-filter",
    title: "Best Referrals",
    description: "Quis nostrud exercitation",
    color: "secondary",
  },
];

export const ActivitiesData = [
  {
    id: 1,
    dotColor: "primary",
    message: "Optimize resource allocation for cost savings.",
    timestamp: "00:32",
  },
  {
    id: 2,
    dotColor: "warning",
    message: "Products Meetings",
    timestamp: "12:34",
    h6: true,
  },
  {
    id: 3,
    dotColor: "success",
    message: "New Order placed ",
    code: '#xl-9087',
    timestamp: "13:59",
    h6: true,
  },
  {
    id: 4,
    dotColor: "secondary",
    message: "Enhance productivity with advanced features",
    timestamp: "17:34",
  },
  {
    id: 5,
    dotColor: "primary",
    message: "New Order placed ",
    code: '#xl-9090',
    timestamp: "19:40",
    h6: true,
  },
  {
    id: 6,
    dotColor: "secondary",
    message: "All Order delivered ",
    code: '#xl-7801',
    timestamp: "22:05",
    h6: true,
  },
  {
    id: 7,
    dotColor: "success",
    message: "Increase sales and revenue with targeted marketing.",
    timestamp: "02:24",
  },
  {
    id: 8,
    dotColor: "primary",
    message: "New Order placed ",
    code: '#xl-9088',
    timestamp: "15:35",
    h6: true,
    text: "Projects this month",
  },
];

export const ProductDeliveryData = [
  {
    id: 1,
    productImage: `${ImagePath}/dashboard/product/2.png`,
    productName: "Branded T-Shirts",
    recipient: "To : Jaksion Raio",
    status: "Delivered",
    color: "primary",
  },
  {
    id: 2,
    productImage: `${ImagePath}/dashboard-2/product/helmet.png`,
    productName: "Stillbirth Helmet",
    recipient: "To : Jaksion Jawade",
    status: "Shipping",
    color: "success",
  },
  {
    id: 3,
    productImage: `${ImagePath}/dashboard-2/product/chair.png`,
    productName: "Bentwood Chair",
    recipient: "To : Trushita Rai",
    status: "Delivered",
    color: "primary",
  },
  {
    id: 4,
    productImage: `${ImagePath}/dashboard-2/product/headphone.png`,
    productName: "Wireless Headphone",
    recipient: "To : Jushkita Shrama",
    status: "Confirmed",
    color: "warning",
  },
  {
    id: 5,
    productImage: `${ImagePath}/dashboard-2/product/tube.png`,
    productName: "Makeup Tube",
    recipient: "To : Sheezan Mahmed",
    status: "Delivered",
    color: "primary",
  },
];
export const ProjectEarningOptions: ApexOptions = {
  chart: {
    height: 100,
    type: "bar",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 10,
      left: 0,
      blur: 3,
      color: "var(--theme-default)",
      opacity: 0.25,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      borderRadiusApplication: "around",
      borderRadiusWhenStacked: "last",
      columnWidth: "25%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["S", "M", "T", "W", "T", "F", "S", "s", "m", "t", "w", "t"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  colors: ["var(--theme-default)"],
};

export const ProjectEarningSeries = [
  {
    name: "Earning",
    data: [4, 3, 3, 3, 4, 3, 3, 4, 5, 3.5, 2.5, 2.5],
  },
];

export const ClientChartOptions: ApexOptions = {
  chart: {
    type: "area",
    height: 145,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    type: "category",
    categories: ["jan", "feb", "mar", "apr", "may", "jun", "july", "aug", "sep", "oct"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  grid: {
    show: false,
    padding: {
      left: -60,
    },
  },
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  colors: ["#F99B0D"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.1,
      inverseColors: true,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
};

export const ClientChartSeries = [
  {
    data: [0, 15, 15, 10, 10, 20, 20, 25, 25, 25],
  },
];

export const PipelineChartOptions: ApexOptions = {
  series: [10, 60, 30],
  labels: ["Store", "Ad", "Search"],
  chart: {
    width: 270,
    height: 270,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
      donut: {
        labels: {
          show: true,
          name: {
            offsetY: 4,
          },
          total: {
            show: true,
            fontSize: "12px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            label: "88%",
            color: "#000",
          },
        },
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#f99b0d", "#009DB5", "#7fbe71"],
  fill: {
    type: "gradient",
  },
  legend: {
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
    {
      breakpoint: 680,
      options: {
        chart: {
          width: "100%",
          height: 155,
        },
        legend: {
          show: false,
        },
      },
    },
    {
      breakpoint: 735,
      options: {
        chart: {
          width: 165,
          height: 165,
        },
        legend: {
          show: false,
        },
      },
    },
    {
      breakpoint: 1263,
      options: {
        chart: {
          offsetX: 10,
          width: 150,
          height: 150,
        },
        legend: {
          show: false,
        },
      },
    },
    {
      breakpoint: 1466,
      options: {
        chart: {
          offsetX: 10,
          width: 140,
          height: 140,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

export const RevenueChartOptions: ApexOptions = {
  series: [
    {
      name: "Sales",
      data: [5, 25, 3, 20, 15],
    },
    {
      name: "Revenue",
      data: [5, 15, 3, 14, 15],
    },
  ],
  chart: {
    height: 140,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  xaxis: {
    type: "category",
    categories: ["Sat", "Sun", "Mon", "Tue", "Wed"],
    tickAmount: 6,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: ["var(--body-light-font-color)"],
      },
    },
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    strokeDashArray: 6,
    position: "back",
  },
  colors: ["#80be70", "#c8e7e5"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#029eb4"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    min: 0,
    max: 30,
    tickAmount: 3,
  },

  responsive: [
    {
      breakpoint: 1296,
      options: {
        chart: {
          width: "100%",
        },
        xaxis: {
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: "100%",
          height: 120,
        },
      },
    },
  ],
};

export const WeeklyVisitorChartOptions: ApexOptions = {
  series: [
    {
      name: "Male",
      type: "line",
      data: [70, 90, 70, 90, 100],
    },
    {
      name: "Female",
      type: "line",
      data: [90, 40, 100, 50, 40],
    },
  ],
  chart: {
    height: 110,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2],
    curve: "smooth",
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
    },
  },
  colors: ["#009DB5", "#83BF6E"],
  fill: {
    opacity: 1,
    type: "solid",
  },
  labels: ["1", "2", "3", "4", "5"],
  xaxis: {
    type: "category",
    tickAmount: 8,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      color: "var(--chart-border)",
    },
    axisTicks: {
      show: false,
    },
  },

  yaxis: {
    show: false,
  },

  legend: {
    show: false,
  },

  tooltip: {
    shared: false,
    intersect: false,
  },
  responsive: [
    {
      breakpoint: 1365,
      options: {
        chart: {
          height: 90,
          offsetY: 20,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 135,
          width: "100%",
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 125,
          width: "100%",
        },
      },
    },
  ],
};

export const EarningChartOptions: ApexOptions = {
  series: [
    {
      name: "Net Profit",
      data: [90, 40, 114, 56, 90, 80, 90],
    },
    {
      name: "Revenue",
      data: [60, 75, 90, 80, 61, 30, 70],
    },
  ],
  chart: {
    type: "bar",
    height: 220,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    },
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    width: 0,
  },
  xaxis: {
    categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  colors: ["#009DB5", "#F99B0D"],
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1531,
      options: {
        chart: {
          height: 255,
        },
      },
    },
    {
      breakpoint: 1401,
      options: {
        chart: {
          height: 230,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 308,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 265,
        },
      },
    },
    {
      breakpoint: 963,
      options: {
        chart: {
          height: 272,
        },
      },
    },
  ],
};

export const ProectOverviewChartOptions: ApexOptions = {
  series: [
    {
      name: "Revenue",
      data: [30, 40, 18, 25, 18, 10, 20, 35, 22, 40, 30, 38, 20, 35, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11],
    },
  ],
  chart: {
    type: "bar",
    height: 180,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
    },
  },
  colors: ["var(--chart-dashed-border)"],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    opacity: 0.7,
  },
  tooltip: {
    enabled: false,
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
  responsive: [
    {
      breakpoint: 405,
      options: {
        chart: {
          height: 150,
        },
      },
    },
  ],
};

export const ProjectOverviewChart2Options: ApexOptions = {
  series: [
    {
      name: "Earning",
      type: "line",
      data: [120, 250, 70, 330, 140, 230, 90, 280, 40, 150, 350, 150, 350],
    },
    {
      name: "Order",
      type: "line",
      data: [80, 200, 150, 200, 100, 150, 110, 200, 110, 200, 150, 80, 30],
    },
  ],
  chart: {
    height: 290,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth",
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  colors: ["#009DB5", "#83BF6E"],
  fill: {
    opacity: 1,
    type: "solid",
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  xaxis: {
    type: "category",
    tickAmount: 4,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      color: "var(--chart-border)",
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    min: 0,
    tickAmount: 4,
    labels: {
      formatter: function (val) {
        return val + "K";
      },
      offsetX: -5,
    },
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 1023,
      options: {
        chart: {
          height: 260,
        },
      },
    },
    {
      breakpoint: 1008,
      options: {
        chart: {
          height: 268,
        },
      },
    },
    {
      breakpoint: 1007,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 240,
        },
      },
    },
  ],
};

export const ProfitChartOptions: any = {
  series: [
    {
      name: "Income",
      type: "line",
      data: [60, 80, 30, 60, 30, 90],
    },
    {
      name: "Earnings",
      type: "line",
      data: [55, 65, 55, 80, 40, 65],
    },
    {
      name: "Profit",
      type: "line",
      data: [50, 40, 70, 40, 100, 70],
    },
  ],
  chart: {
    height: 300,
    type: "line",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 4,
      left: 0,
      blur: 2,
      colors: ["#009DB5", "#83BF6E", "#F99B0D"],
      opacity: 0.02,
    },
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    strokeDashArray: 6,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  colors: ["#009DB5", "#83BF6E", "#F99B0D"],
  stroke: {
    width: 3,
    curve: "smooth",
    opacity: 1,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 1,
        dataPointIndex: 3,
        fillColor: "#54BA4A",
        strokeColor: "var(--white)",
        size: 6,
      },
    ],
  },
  tooltip: {
    shared: false,
    intersect: false,
    marker: {
      width: 5,
      height: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: ["Jan 02", "Jan 05", "Jan 08", "Jan 11", "Jan 14", "Jan 17"],
    min: 0.9,
    max: undefined,
    crosshairs: {
      show: false,
    },
    labels: {
      style: {
        colors: "var(--chart-text-color)",
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        fontWeight: 400,
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  fill: {
    opacity: 1,
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 1,
      opacityFrom: 0.95,
      opacityTo: 1,
      stops: [0, 90, 100],
    },
  },
  yaxis: {
    tickAmount: 5,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 651,
      options: {
        chart: {
          height: 210,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 255,
        },
      },
    },
    {
      breakpoint: 1221,
      options: {
        chart: {
          height: 290,
        },
      },
    },
    {
      breakpoint: 1378,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1576,
      options: {
        chart: {
          height: 270,
        },
      },
    },
  ],
};
