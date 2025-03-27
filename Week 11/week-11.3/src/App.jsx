import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagesAtom,
  networkAtom,
  notificationAtom,
  totalnotificationSelector,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const jobCount = useRecoilValue(jobsAtom);
  const meesagesCount = useRecoilValue(messagesAtom);
  const totalnotificationCount = useRecoilValue(totalnotificationSelector);

  return (
    <div>
      <button>Home</button>

      <button>
        My Network(
        {networkCount >= "100" ? "99+" : networkCount})
      </button>
      <button>Notifications({notificationCount})</button>
      <button>Jobs({jobCount})</button>
      <button>Messages({meesagesCount})</button>

      <button>Me({totalnotificationCount})</button>
    </div>
  );
}

export default App;
