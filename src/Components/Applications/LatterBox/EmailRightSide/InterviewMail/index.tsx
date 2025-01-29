import { Card } from "reactstrap";
import InterviewMailHeader from "./InterviewMailHeader";
import InterviewMailBody from "./InterviewMailBody";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useAppSelector } from "@/ReduxToolkit/Hooks";

const InterviewMail = () => {
  const {interviewEmail} = useAppSelector((state)=>state.letterBox)
   const contentRef = useRef<HTMLDivElement | null>(null);

   const handlePrint = useReactToPrint({
     contentRef,
   });
  
  return (
    <Card className={`email-body email-read ${interviewEmail ? "show" : "hide"}`}>
      <InterviewMailHeader />
      <InterviewMailBody ref={contentRef} handlePrintData={handlePrint} />
    </Card>
  );
};

export default InterviewMail;
