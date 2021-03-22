import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIndex } from '../functions'

function Decode() {
  let { base62Str } = useParams();

  function navigate(url) {
    window.location.replace(url);
    return false;
  }

  useEffect(() => {
    getIndex(base62Str).then((res) => navigate(res));
  }, [base62Str]);

  return <></>;
}

export default Decode;
