import { Href, ImagePath } from "@/Constants";
import { CustomComponentProps, RecentOrderTypes, StockReportTypes } from "@/Types/Dashboard";
import { ApexOptions } from "apexcharts";
import Image from "next/image";
import { TableColumn } from "react-data-table-component";
import { Badge } from "reactstrap";
const CustomOrderId = ({ span }: CustomComponentProps) => (
  <a className="f-w-500" href={Href}>
    {span}
  </a>
);
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
    timestamp: "13:59",
    code:'#xl-9087',
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
    message: "New Order placed",
    code:'#xl-9090',
    timestamp: "19:40",
    h6: true,
  },
  {
    id: 6,
    dotColor: "secondary",
    message: "All Order delivered",
    code:' #xl-7801',
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
    code:'#xl-9088',
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
const CustomImage = ({ src, name }: CustomComponentProps) => (
  <div className="recent-profile">
    <Image height={50} width={50} className="img-30 rounded-circle img-fluid" src={`${ImagePath}/${src}`} alt="user" />
    <span className="f-light f-w-500 f-14">{name}</span>
  </div>
);

const CustomProduct = ({ span, spanClass }: CustomComponentProps) => <span className={`f-light f-14 ${spanClass}`}>{span}</span>;

const CustomAmount = ({ span }: CustomComponentProps) => (
  <span className="txt-success f-w-500 f-14">
    {"$"}
    {span}
  </span>
);

const CustomVendor = ({ span }: CustomComponentProps) => <span className="f-light f-14">{span}</span>;

const CustomBadge = ({ span, color, spanClass }: CustomComponentProps) => (
  <Badge color={`light-${color}`} className={`txt-${color} ${spanClass}`}>
    {span}
  </Badge>
);

const CustomRating = ({ span, value }: CustomComponentProps) => (
  <span className="f-light f-w-600 f-14">
    {value}
    <span className="f-12 f-w-400 f-12">({span})</span>
  </span>
);

export const SalesOverviewData = [
  {

    id: 1,
    icon: "sales",
    amount: "24k USD",
    category: "Total Sales",
    trendIcon: "warning",
    trendPercentage: "+34%",
  },
  {
    id: 2,
    icon: "customer",
    amount: "9.453k",
    category: "Customer",
    trendIcon: "success",
    trendPercentage: "+27%",
  },
  {
    id: 3,
    icon: "orders",
    amount: "1.786k",
    category: "Orders",
    trendIcon: "primary",
    trendPercentage: "+45%",
  },
  {
    id: 4,
    icon: "transaction",
    amount: "24k USD",
    category: "Transaction",
    trendIcon: "secondary",
    trendPercentage: "+27%",
    colClass:'sales-transaction',

  },
];

export const RevenueAndOrderChartOptions:  any = {
  series: [
    {
      name: "Earning",
      type: "line",
      data: [330, 60, 370, 240, 250, 70, 280, 60, 185, 60],
    },
    {
      name: "Order",
      type: "line",
      data: [70, 330, 60, 200, 100, 250, 100, 350, 110, 300],
    },
  ],
  chart: {
    height: 225,
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
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
  ],
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

  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: "#009DB5",
        strokeColor: "var(--white)",
        size: 6,
        sizeOffset: 2,
      },
    ],
    hover: {
      size: 6,
      sizeOffset: 0,
    },
  },

  legend: {
    show: false,
  },
  yaxis: {
    min: 0,
    tickAmount: 4,
    tickPlacement: "between",
    labels: {
      offsetX: -5,
    },
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
          height: 140,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 225,
        },
      },
    },
    {
      breakpoint: 781,
      options: {
        chart: {
          height: 235,
        },
      },
    },
    {
      breakpoint: 400,
      options: {
        chart: {
          height: 170,
        },
      },
    },
  ],
};

export const GeneralCardsData = [
  {
    title: "Today Orders",
    heading: "120k Orders",
    percentage: "-10%",
    image: "1",
    color: "danger",
  },
  {
    title: "Delivery Successful",
    heading: "390k ",
    percentage: "+10%",
    image: "2",
    color: "success",
  },
  {
    title: "New Customers this month",
    heading: "10,987",
    percentage: "-10%",
    color: "danger",
  },
];

export const ExpectedEarningsOptions: ApexOptions = {
  series: [14, 23, 21, 19, 17, 14, 12, 10],
  chart: {
    type: "polarArea",
    height: 250,
  },
  stroke: {
    colors: ["#fff"],
  },
  colors: ["#009DB5", "#F99B0D", "#83BF6E"],
  fill: {
    opacity: 0.8,
  },
  legend: {
    show: false,
  },
};

export const DealTimerData = [
  {
    id: 1,
    class: "hours",
    text: "Hours",
  },
  {
    id: 2,
    class: "minutes",
    text: "Min",
  },
  {
    id: 3,
    class: "seconds",
    text: "Sec",
  },
];


export const RecentOrderData: RecentOrderTypes[] = [
  {
      id: 1,
      orderId: '#0918765',
      image: 'dashboard/user/1.jpg',
      name: 'Alex Smith',
      product: 'Jacket',
      amount: '109.00',
      vendor: 'Shmetic Fashion',
      statusColor: 'primary',
      statusText: 'In Progress',
      ratingValue: 4.9,
      ratingText: '34 votes',
  },
  {
      id: 2,
      orderId: '#109346',
      image: 'dashboard-3/user/4.png',
      name: 'Jansh Brown',
      product: 'Clothes',
      amount: '178.00',
      vendor: 'iTech Factory',
      statusColor: 'warning',
      statusText: 'Pending',
      ratingValue: 5.0,
      ratingText: '90 votes',
  },
  {
      id: 3,
      orderId: '#209813',
      image: 'dashboard-3/user/7.png',
      name: 'Prezy Mark',
      product: 'Wallets & Bag',
      amount: '210.00',
      vendor: 'Micro Design',
      statusColor: 'success',
      statusText: 'Paid',
      ratingValue: 4.5,
      ratingText: '43 votes',
  },
  {
      id: 4,
      orderId: '#306754',
      image: 'dashboard/user/7.jpg',
      name: 'Vihan Hudda',
      product: 'Furniture',
      amount: '330.00',
      vendor: 'Nesta Technology',
      statusColor: 'warning',
      statusText: 'Pending',
      ratingValue: 4.6,
      ratingText: '30 votes',
  },
  {
      id: 5,
      orderId: '#107654',
      image: 'avtar/7.jpg',
      name: 'Biraj Shah',
      product: 'Kitchen Stole',
      amount: '187.00',
      vendor: 'Syntcy solutions',
      statusColor: 'primary',
      statusText: 'In Progress',
      ratingValue: 4.3,
      ratingText: '87 votes',
  }
];

export const RecentOrderColumns: TableColumn<RecentOrderTypes>[] = [
  {
      name: "Order ID",
      selector: (row) => row.orderId,
      sortable: true,      
      cell: (row) => <CustomOrderId span={row.orderId} />,
  },
  {
      name: "Customer",
      selector: (row) => row.name,
      sortable: true,      
      cell: (row) => <CustomImage src={row.image} name={row.name} />,
  },
  {
      name: "Product",
      selector: (row) => row.product,
      sortable: true,      
      cell: (row) => <CustomProduct span={row.product} />,
  },
  {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,      
      cell: (row) => <CustomAmount span={row.amount} />,
  },
  {
      name: "Vendor",
      selector: (row) => row.vendor,
      sortable: true,      
      cell: (row) => <CustomVendor span={row.vendor} />,
  },
  {
      name: "Status",
      selector: (row) => row.statusText,
      sortable: true,      
      cell: (row) => <CustomBadge span={row.statusText} color={row.statusColor} />,
  },
  {
      name: "Rating",
      selector: (row) => row.ratingText,
      sortable: true,      
      cell: (row) => <CustomRating span={row.ratingText} value={row.ratingValue} />,
  },
];

export const WeeklyVisitorChart: ApexOptions = {
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
    height: 600,
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
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 135,
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
    {
      breakpoint: 733,
      options: {
        chart: {
          height: 125,
          width: 480,
        },
      },
    },
    {
      breakpoint: 714,
      options: {
        chart: {
          height: 125,
          width: 460,
        },
      },
    },
    {
      breakpoint: 685,
      options: {
        chart: {
          height: 125,
          width: 440,
        },
      },
    },
    {
      breakpoint: 650,
      options: {
        chart: {
          offsetX: -40,
          height: 125,
          width: 420,
        },
      },
    },
    {
      breakpoint: 628,
      options: {
        chart: {
          offsetX: -40,
          height: 125,
          width: 400,
        },
      },
    },
    {
      breakpoint: 600,
      options: {
        chart: {
          offsetX: -30,
          height: 125,
          width: 370,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          offsetX: -30,
          height: 125,
          width: 550,
        },
      },
    },
    {
      breakpoint: 565,
      options: {
        chart: {
          height: 125,
          width: 530,
        },
      },
    },
    {
      breakpoint: 550,
      options: {
        chart: {
          height: 125,
          width: 500,
        },
      },
    },
    {
      breakpoint: 520,
      options: {
        chart: {
          height: 125,
          width: 460,
        },
      },
    },
    {
      breakpoint: 485,
      options: {
        chart: {
          height: 125,
          width: 420,
        },
      },
    },
    {
      breakpoint: 445,
      options: {
        chart: {
          height: 125,
          width: 400,
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        chart: {
          offsetX: 0,
          height: 125,
          width: 340,
        },
      },
    },
    {
      breakpoint: 420,
      options: {
        chart: {
          offsetX: 0,
          height: 125,
          width: "100%",
        },
      },
    },
  ],
};



export const StockReportData: StockReportTypes[] = [
  {
      id: 1,
      orderId: '#109346',
      item: 'Laptop',
      amount: '121.00',
      date: 'Feb 21, 2024',
      statusColor: 'primary',
      statusText: 'In Stock',
      quantity: '1 PCS'
  },
  {
      id: 2,
      orderId: '#905071',
      item: 'Apple iPod',
      amount: '230.00',
      date: 'Feb 19, 2024',
      statusColor: 'success',
      statusText: 'Low Stock',
      quantity: '90 PCS'
  },
  {
      id: 3,
      orderId: '#899306',
      item: 'MacBook',
      amount: '409.00',
      date: 'Mar 13, 2024',
      statusColor: 'warning',
      statusText: 'Out of Stock',
      quantity: '123 PCS'
  },
  {
      id: 4,
      orderId: '#509346',
      item: 'Speakers',
      amount: '908.00',
      date: 'Jan 11, 2024',
      statusColor: 'primary',
      statusText: 'In Stock',
      quantity: '230 PCS'
  },
  {
      id: 5,
      orderId: '#109346',
      item: 'Dispatched',
      amount: '309.00',
      date: 'Aug 18, 2024',
      statusColor: 'success',
      statusText: 'Low Stock',
      quantity: '309 PCS'
  }
];

export const StockReportColumns: TableColumn<StockReportTypes>[] = [
  {
      name: "Item",
      selector: (row) => row.item,
      sortable: true,
      
      cell: (row) => <CustomProduct span={row.item} spanClass="f-w-500 f-14" />,
  },
  {
      name: "Id",
      selector: (row) => row.orderId,
      sortable: true,
      
      cell: (row) => <CustomOrderId span={row.orderId} />,
  },
  {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
      
      cell: (row) => <CustomAmount span={row.amount} />,
  },
  {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      
      cell: (row) => <CustomProduct span={row.date} spanClass="f-w-500" />,
  },
  {
      name: "Status",
      selector: (row) => row.statusText,
      sortable: true,
      
      cell: (row) => <CustomBadge span={row.statusText} color={row.statusColor} spanClass="f-w-500" />,
  },
  {
      name: "QLT",
      selector: (row) => row.quantity,
      sortable: true,
      
      cell: (row) => <CustomProduct span={row.quantity} spanClass="f-w-500" />,
  },
];