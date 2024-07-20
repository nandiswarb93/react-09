import ProgressBar from "react-bootstrap/ProgressBar";
export function Progressbar(prop) {
  const { scale } = prop;
  return <ProgressBar now={scale} />;
}
