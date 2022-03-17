import io from "socket.io-client";
import { SEVER_ENDPOINT } from "./config";

export let socket;

if (socket == null) {
  socket = io(SEVER_ENDPOINT);

  socket.emit("join", {}, (error) => {
    if (error) {
      alert(error);
      return;
    }
  });
}



// export function intializeSocket() {
//   socket = io(SEVER_ENDPOINT);
// }
