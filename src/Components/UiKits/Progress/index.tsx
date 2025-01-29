"use client";
import { Container, Row } from "reactstrap";
import AnimatedProgress from "./AnimatedProgress";
import BasicProgress from "./BasicProgress";
import CustomHeightProgress from "./CustomHeightProgress";
import CustomProgress from "./CustomProgress";
import LargeProgress from "./LargeProgress";
import MultiBars from "./MultipleBars";
import SmallProgress from "./SmallProgress";
import StripedProgress from "./StripedProgress";
import WithNumberProgress from "./WithNumberProgress";

const ProgressContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicProgress />
        <Row>
          <StripedProgress />
          <AnimatedProgress />
        </Row>
        <Row>
          <MultiBars />
          <WithNumberProgress />
        </Row>
        <CustomProgress />
        <Row>
          <SmallProgress />
          <LargeProgress />
        </Row>
        <CustomHeightProgress />
      </Row>
    </Container>
  );
};

export default ProgressContainer;
