import { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-grid-system";
import {
  Header,
  Headline,
  Subtext,
  Input,
  Submit,
  Wrapper,
  Wave,
} from "./styles";
import Loader from "react-loader-spinner";
import { encodeBase62, getSerial } from './functions'

const Spacer = styled(Col)`
  @media (max-width: 1024px) {
    display: none;
  }
`;

function App() {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Wrapper>
      <Wave alt="background wave" src="./wave.svg"></Wave>
      <Header>
        <svg width="201" height="43" viewBox="0 0 201 43" fill="none">
          <g>
            <path
              d="M74.1177 14.9654L76.7341 9.34001C73.7317 7.36468 69.5068 6.07642 65.3034 6.07642C58.3334 6.07642 53.6582 9.51178 53.6582 14.9869C53.6582 25.658 69.6784 22.3514 69.6784 28.0198C69.6784 29.8663 68.0056 30.8969 65.2176 30.8969C62.0436 30.8969 57.6471 29.1363 54.5589 26.388L51.8567 31.9275C55.2452 34.8046 60.1992 36.6941 65.1318 36.6941C71.8015 36.6941 76.9057 33.5164 76.9057 27.6118C76.9486 16.769 60.9284 19.8608 60.9284 14.3213C60.9284 12.6895 62.4725 11.8736 64.7458 11.8736C67.1692 11.8736 70.9437 13.076 74.1177 14.9654Z"
              fill="#010E18"
            ></path>
            <path
              d="M78.7072 6.35547V12.1097H87.8646V36.4578H94.663V12.1312H103.863V6.35547H78.7072Z"
              fill="#010E18"
            ></path>
            <path
              d="M119.862 6.14087C110.662 6.14087 103.713 12.6466 103.713 21.4068C103.713 30.1454 110.683 36.7585 119.862 36.7585C129.041 36.7585 136.011 30.081 136.011 21.4068C136.011 12.6895 129.041 6.14087 119.862 6.14087ZM119.948 12.0883C124.966 12.0883 129.063 16.1249 129.063 21.4282C129.063 26.7316 124.988 30.854 119.948 30.854C114.908 30.854 110.662 26.7101 110.662 21.4068C110.662 16.1034 114.865 12.0883 119.948 12.0883Z"
              fill="#010E18"
            ></path>
            <path
              d="M166.636 36.4793L160.224 26.5382C163.87 24.8205 165.843 21.4711 165.843 16.8118C165.843 10.1344 161.382 6.35547 153.511 6.35547H140.472V36.4793H147.27V27.8694H154.197L158.958 36.4793H166.636ZM147.249 12.0023H153.533C157.264 12.0023 159.43 13.6771 159.43 17.0266C159.43 20.4619 157.286 22.1796 153.533 22.1796H147.249V12.0023Z"
              fill="#010E18"
            ></path>
            <path
              d="M184.329 6.35547H171.569V36.4793H184.072C193.572 36.4793 200.135 30.2742 200.135 21.4281C200.135 12.5176 193.637 6.35547 184.329 6.35547ZM184.501 30.7465H178.346V12.0668H184.179C189.326 12.0668 193.208 15.8886 193.208 21.4496C193.208 26.9676 189.519 30.7465 184.501 30.7465Z"
              fill="#010E18"
            ></path>
            <path d="M42.785 0H12.0957V9.08223H42.785V0Z" fill="#1463FF"></path>
            <path d="M9.07169 0H0V30.725H9.07169V0Z" fill="#1463FF"></path>
            <path
              d="M30.6893 33.7524H0V42.8347H30.6893V33.7524Z"
              fill="#1463FF"
            ></path>
            <path
              d="M42.7848 12.1096H33.7131V42.8346H42.7848V12.1096Z"
              fill="#1463FF"
            ></path>
          </g>
        </svg>
      </Header>
      <Row style={{ width: "80%" }}>
        <Col lg={8}>
          <Headline>Don't be like Notion, have short links</Headline>
          <Subtext>Paste your url, get a shortened link</Subtext>
          <br />
          <Row>
            <Col lg={10}>
              <Input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Paste link here"
              ></Input>
            </Col>
            <Col lg={2}>
              <Submit
                onClick={() => {
                  getSerial(link, setLoading).then((index) => {
                    if (index != null) {
                      setLink(
                        window.location.href + "v/" + encodeBase62(index)
                      );
                    } else {
                      setLink("");
                    }
                  });
                }}
              >
                {loading ? (
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={20}
                    width={20}
                  />
                ) : (
                  "Shorten"
                )}
              </Submit>
            </Col>
          </Row>
        </Col>
        <Spacer lg={4}></Spacer>
      </Row>
    </Wrapper>
  );
}

export default App;
