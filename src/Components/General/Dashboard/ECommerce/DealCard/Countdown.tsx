import { useEffect, useState } from "react";
import Countdown from "react-countdown";

const CountdownData = () => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const isMounted = setTimeout(function () {
      setStyle({ style: { display: "none" } });
    }, 1000);
    return () => {
      clearTimeout(isMounted);
    };
  }, []);

  const CompletionList = () => <span>{"You are good to go!"}</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <CompletionList />;
    } else {
      return (
        <div>
          <ul className="timer deal-timer simple-list flex-row">
            <li>
              <h6 className={`f-20 f-w-600 txt-primary `}>{hours}</h6>
              <span className="f-12 f-w-500 f-light">Hours</span>
            </li>
            <li>
              <h6 className={`f-20 f-w-600 txt-primary `}>{minutes}</h6>
              <span className="f-12 f-w-500 f-light">Min</span>
            </li>
            <li>
              <h6 className={`f-20 f-w-600 txt-primary `}>{seconds}</h6>
              <span className="f-12 f-w-500 f-light">Sec</span>
            </li>
          </ul>
        </div>
      );
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var countdown = new Date(year, month, day + 15).getTime();

  return <Countdown date={countdown} renderer={renderer} />;
};

export default CountdownData;
