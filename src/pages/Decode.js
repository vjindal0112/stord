import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIndex } from "../functions";
import Loader from "react-loader-spinner";
import { Wrapper } from "../styles";

function Decode() {
  let { base62Str } = useParams();

  function navigate(url) {
    window.location.replace(url);
    return false;
  }

  useEffect(() => {
    getIndex(base62Str).then((res) => navigate(res));
  }, [base62Str]);

  return (
    <Wrapper>
      <Loader type="ThreeDots" color="#009FFF" height={80} width={80} />
    </Wrapper>
  );
}

export default Decode;
