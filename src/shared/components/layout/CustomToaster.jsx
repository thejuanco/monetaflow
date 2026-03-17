import { toast } from "sonner";
import NewToaster from "./NewToaster";

export default function CustomToaster(props) {
  return toast.custom((id) => (
    <NewToaster
      id={id}
      title={props.title}
      description={props.description}
      button={props.button}
    />
  ));
}