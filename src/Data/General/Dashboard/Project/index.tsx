// @ts-nocheck
import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { Delete, Edit, ImagePath } from "@/Constants";
import { ApexOptions } from "apexcharts";
import Image from "next/image";
import { Badge, Progress } from "reactstrap";

export const ClientChartSeries = [
  {
    data: [0, 15, 15, 10, 10, 20, 20, 25, 25, 25],
  },
];
const CustomDate = ({ span }: CustomComponentProps) => <span className="f-light">{span}</span>;

const CommonProgress = ({ value, color }: CustomComponentProps) => (
  <div className="d-flex">
    <Progress animated striped className={`progress-stripe-${color}`} value={value} style={{ height: "5px", width: value }} />
    <span className="f-12 f-light"></span>
  </div>
);

const CustomBadge = ({ span, color, spanClass }: CustomComponentProps) => (
  <Badge color={`light-${color}`} className={`txt-${color} ${spanClass}`}>
    {span}
  </Badge>
);
const CustomTeam = ({ data, extra }: CustomTeamProps) => (
  <div className="customers">
    <ul className="simple-list flex-row">
      {data.map((item, index) => (
        <li className="d-inline-block" key={index}>
          <Image height={30} width={30} className="img-30 rounded-circle" src={`${ImagePath}/dashboard-3/user/${item}`} alt="user" />
        </li>
      ))}
      <li className="d-inline-block">
        <div className="light-card">
          <span className="f-w-500 f-light f-12">
            {"+"}
            {extra}
          </span>
        </div>
      </li>
    </ul>
  </div>
);

export const ProjectEarningChart: ApexOptions = {
  series: [
    {
      name: "Earning",
      data: [4, 3, 3, 3, 4, 3, 3, 4, 5, 3.5, 2.5, 2.5],
    },
  ],
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

export const ClientChartOptions: ApexOptions = {
  series: [
    {
      data: [0, 15, 15, 10, 10, 20, 20, 25, 25, 25],
    },
  ],
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

export const ProjectCalendarDates = [
  { day: "Mon", date: 14 },
  { day: "Tue", date: 15 },
  { day: "Wed", date: 16 },
  { day: "Thu", date: 17 },
  { day: "Fri", date: 18 },
  { day: "Sat", date: 19, isToday: true },
  { day: "Sun", date: 20 },
  { day: "Mon", date: 21 },
  { day: "Tue", date: 22 },
  { day: "Wed", date: 23 },
  { day: "Thu", date: 24 },
];

export const MeetingsData = [
  {
    id: 1,
    imagePath: `${ImagePath}/dashboard-3/client/1.png`,
    title: "Meeting with Client",
    leadBy: "Jaskion Raio",
  },
  {
    id: 2,
    imagePath: `${ImagePath}/dashboard-3/client/2.png`,
    title: "Deal with New Client",
    leadBy: "Ashkista Jain",
  },
];

export const ProjectStatusTableHead = ["Project", "Team", "Start Date", "Due Date", "Progress", "Status", "Action"];
export const ProjectStatusTableBody = [
  {
    project: "Development",
    team: [`${ImagePath}/dashboard-3/user/1.png`, `${ImagePath}/dashboard-3/user/2.png`, `${ImagePath}/dashboard-3/user/3.png`],
    startDate: "12 Jan 2024",
    dueDate: "15 Jan 2024",
    progress: { value: 40, style: "progress-stripe-primary" },
    status: "In Progress",
  },
  {
    project: "Web Landing",
    team: [`${ImagePath}/dashboard-3/user/4.png`, `${ImagePath}/dashboard-3/user/5.png`],
    startDate: "5 Feb 2024",
    dueDate: "25 Feb 2024",
    progress: { value: 25, style: "progress-stripe-warning" },
    status: "Pending",
  },
  {
    project: "Development",
    team: [`${ImagePath}/dashboard-3/user/6.png`, `${ImagePath}/dashboard-3/user/7.png`, `${ImagePath}/dashboard-3/user/8.png`],
    startDate: "12 Feb 2024",
    dueDate: "1 Mar 2024",
    progress: { value: 100, style: "progress-stripe-success" },
    status: "Done",
  },
  {
    project: "Marketing",
    team: [`${ImagePath}/dashboard-3/user/9.png`, `${ImagePath}/dashboard-3/user/10.png`, `${ImagePath}/dashboard-3/user/11.png`],
    startDate: "25 Feb 2024",
    dueDate: "10 Mar 2024",
    progress: { value: 40, style: "progress-stripe-warning" },
    status: "Pending",
  },
];

export const AverageEarningChartOptions: ApexOptions = {
  series: [
    {
      data: [20, 40, 60, 20, 100, 60, 20, 80, 40, 10, 80, 100, 100],
    },
  ],
  chart: {
    type: "line",
    height: 160,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 20,
      color: "var(--theme-default)",
      opacity: 0.5,
    },
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    strokeDashArray: 6,
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
  stroke: {
    curve: "stepline",
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
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
    labels: {
      show: false,
    },
    min: 0,
    tickAmount: 5,
    tickPlacement: "between",
  },
  markers: {
    size: 3,
    colors: "var(--white)",
    strokeColors: "#009DB5",
    strokeWidth: 2,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    shape: "circle",
    offsetX: 2,
    offsetY: 2,
    radius: 2,
    hover: {
      size: 3,
    },
  },
  colors: ["#009DB5"],

  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 122,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 160,
        },
      },
    },
  ],
};

export const DailyTaskData = [
  {
    id: 1,
    title: "iOS App UI/UX Meet..",
    time: "9:00 am",
    category: "primary",
  },
  {
    id: 2,
    title: "Start Web developing..",
    time: "10:00 am",
    category: "warning",
  },
  {
    id: 3,
    title: "IOS App ui",
    time: "10:00 am",
    category: "success",
  },
];

export interface ProjectDataTypes {
  id: number;
  project: string;
  team: string[];
  extraTeam: number;
  startDate: string;
  dueDate: string;
  progressValue: number;
  progressColor: string;
  status: string;
  action: boolean;
}

export const projectsStatusData: ProjectDataTypes[] = [
  {
    id: 1,
    project: "Development",
    team: ["1.png", "2.png", "3.png"],
    extraTeam: 3,
    startDate: "12 Jan 2024",
    dueDate: "15 Jan 2024",
    progressValue: 70,
    progressColor: "primary",
    status: "In Progress",
    action: true,
  },
  {
    id: 2,
    project: "Web Landing",
    team: ["4.png", "5.png"],
    extraTeam: 9,
    startDate: "5 Feb 2024",
    dueDate: "25 Feb 2024",
    progressValue: 25,
    progressColor: "warning",
    status: "Pending",
    action: true,
  },
  {
    id: 3,
    project: "Development",
    team: ["6.png", "7.png", "8.png"],
    extraTeam: 3,
    startDate: "12 Feb 2024",
    dueDate: "1 Mar 2024",
    progressValue: 100,
    progressColor: "success",
    status: "Done",
    action: true,
  },
  {
    id: 4,
    project: "Marketing",
    team: ["9.png", "10.png", "11.png"],
    extraTeam: 4,
    startDate: "25 Feb 2024",
    dueDate: "10 Mar 2024",
    progressValue: 40,
    progressColor: "warning",
    status: "Pending",
    action: true,
  },
];

const actionDropdownList = ["Edit", "Delete"];

export const projectsStatusColumn: TableColumn<ProjectDataTypes>[] = [
  {
    name: "Project",
    selector: (row) => row.project,
    sortable: true,
    center: false,
  },
  {
    name: "Team",
    selector: (row) => row.extraTeam,
    sortable: true,
    center: false,
    cell: (row) => <CustomTeam data={row.team} extra={row.extraTeam} />,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
    center: false,
    cell: (row) => <CustomDate span={row.startDate} />,
  },
  {
    name: "Due Date",
    selector: (row) => row.dueDate,
    sortable: true,
    center: false,
    cell: (row) => <CustomDate span={row.dueDate} />,
  },
  {
    name: "Progress",
    selector: (row) => row.progressValue,
    sortable: true,
    center: false,
    cell: (row) => <CommonProgress value={row.progressValue} color={row.progressColor} />,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    center: false,
    cell: (row) => <CustomBadge span={row.status} color={row.progressColor} spanClass="" />,
  },
  {
    name: "Action",
    selector: (row) => row.action,
    sortable: true,
    center: false,
    cell: () => {
      return <CommonDropdown dropDownList={actionDropdownList} dropDownClass="icon-dropdown text-center" dropDownIcon end />;
    },
  },
];

export const ProjectStatusTableData: any = [
  {
    category: "Development",
    customers: [`${ImagePath}/dashboard-3/user/1.png`, `${ImagePath}/dashboard-3/user/2.png`, `${ImagePath}/dashboard-3/user/3.png`],
    dateStart: "12 Jan 2024",
    dateEnd: "15 Jan 2024",
    progress: 40,
    status: "In Progress",
  },
  {
    category: "Web Landing",
    customers: [`${ImagePath}/dashboard-3/user/4.png`, `${ImagePath}/dashboard-3/user/5.png`],
    dateStart: "5 Feb 2024",
    dateEnd: "25 Feb 2024",
    progress: 25,
    status: "Pending",
  },
  {
    category: "Development",
    customers: [`${ImagePath}/dashboard-3/user/6.png`, `${ImagePath}/dashboard-3/user/7.png`, `${ImagePath}/dashboard-3/user/8.png`],
    dateStart: "12 Feb 2024",
    dateEnd: "1 Mar 2024",
    progress: 100,
    status: "Done",
  },
  {
    category: "Marketing",
    customers: [`${ImagePath}/dashboard-3/user/9.png`, `${ImagePath}/dashboard-3/user/10.png`, `${ImagePath}/dashboard-3/user/11.png`],
    dateStart: "25 Feb 2024",
    dateEnd: "10 Mar 2024",
    progress: 40,
    status: "Pending",
  },
];

export const ProjectStatusColumns: any = [
  {
    name: "Category",
    selector: "category",
    sortable: true,
  },
  {
    name: "Customers",
    cell: (row) => (
      <div className="customers">
        <ul>
          {row.customers.map((customer, i) => (
            <li key={i} className="d-inline-block">
              <Image height={26} width={26} className="img-30 rounded-circle" src={customer} alt={`user-${i + 1}`} />
            </li>
          ))}
          <li className="d-inline-block">
            <div className="light-card">
              <span className="f-w-500 f-light f-12">+{row.customers.length}</span>
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: "Date Start",
    selector: "dateStart",
    sortable: true,
  },
  {
    name: "Date End",
    selector: "dateEnd",
    sortable: true,
  },
  {
    name: "Progress",
    cell: (row) => (
      <div className="d-flex">
        <div className="progress progress-stripe-primary" style={{ height: 5 }}>
          <div className="progress-bar-animated progress-bar-striped" role="progressbar" style={{ width: `${row.progress}%` }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
        </div>
        <span className="f-12 f-light">{row.progress}%</span>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
    cell: (row) => <span className={` badge ${row.status === "Done" ? "badge-light-success" : "btn-lighten-primary"}`}>{row.status}</span>,
  },
  {
    name: "Actions",
    cell: () => <CommonDropdown dropdownItems={[Edit, Delete]} />,
  },
];

export const RecentSliderData = [
  {
    id: 1,
    color: "primary",
    icon: "game-icon",
    title: "Marketing",
    customers: [
      {
        id: 1,
        image: "avtar/4.jpg",
      },
      {
        id: 2,
        image: "dashboard-3/user/12.png",
      },
      {
        id: 3,
        number: 2,
      },
    ],
    progress: 45,
  },
  {
    id: 2,
    color: "success",
    icon: "pen-scale",
    title: "NFT Design",
    customers: [
      {
        id: 1,
        image: "dashboard-3/user/14.png",
      },
      {
        id: 2,
        image: "dashboard-3/user/15.png",
      },
      {
        id: 3,
        number: 6,
      },
    ],
    progress: 70,
  },
  {
    id: 3,
    color: "secondary",
    icon: "programming",
    title: "Development",
    customers: [
      {
        id: 1,
        image: "dashboard-3/user/16.png",
      },
      {
        id: 2,
        image: "dashboard-3/user/17.png",
      },
      {
        id: 3,
        number: 1,
      },
    ],
    progress: 80,
  },
  {
    id: 4,
    color: "warning",
    icon: "apple-ios",
    title: "iOS App UI",
    customers: [
      {
        id: 1,
        image: "dashboard-3/user/18.png",
      },
      {
        id: 2,
        image: "dashboard-3/user/19.png",
      },
      {
        id: 3,
        number: 1,
      },
    ],
    progress: 30,
  },
  {
    id: 5,
    color: "secondary",
    icon: "programming",
    title: "Development",
    customers: [
      {
        id: 1,
        image: "dashboard-3/user/16.png",
      },
      {
        id: 2,
        image: "dashboard-3/user/17.png",
      },
      {
        id: 3,
        number: 1,
      },
    ],
    progress: 80,
  },
  {
    id: 6,
    color: "primary",
    icon: "game-icon",
    title: "Marketing",
    customers: [
      {
        id: 1,
        image: "avtar/4.jpg",
      },
      {
        id: 2,
        image: "dashboard-3/user/12.png",
      },
      {
        id: 3,
        number: 2,
      },
    ],
    progress: 45,
  },
  {
    id: 7,
    color: "secondary",
    icon: "programming",
    title: "Development",
    customers: [
      {
        id: 1,
        image: "dashboard-3/user/16.png",
      },
      {
        id: 2,
        image: "dashboard-3/user/17.png",
      },
      {
        id: 3,
        number: 1,
      },
    ],
    progress: 80,
  },
];
