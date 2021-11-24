import { useParams } from "react-router";

interface RouteParams {
  coinID: string;
}

export default function Coin() {
  const params = useParams() as RouteParams;
  const coinID = params.coinID;
  console.log(params);
  console.log(params.coinID);
  return <div>coin:{coinID}</div>;
}
