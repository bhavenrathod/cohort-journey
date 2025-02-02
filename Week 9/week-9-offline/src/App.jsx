import { useEffect, useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [currentTab, changeTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading("true");
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(
      async (res) => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      }
    );
  }, [currentTab]);

  return (
    <div>
      <button
        onClick={() => {
          changeTab(1);
        }}
        style={{ color: currentTab == 1 ? "red" : "black" }}
      >
        Todo 1
      </button>
      <button
        onClick={() => {
          changeTab(2);
        }}
        style={{ color: currentTab == 2 ? "red" : "black" }}
      >
        Todo 2
      </button>
      <button
        onClick={() => {
          changeTab(3);
        }}
        style={{ color: currentTab == 3 ? "red" : "black" }}
      >
        Todo 3
      </button>
      <button
        onClick={() => {
          changeTab(4);
        }}
        style={{ color: currentTab == 4 ? "red" : "black" }}
      >
        Todo 4
      </button>
      <br />
      {loading ? "Loading ..." : tabData.title}
    </div>
  );
}

export default App;

// -----------------------------------------------------------------------------------------------------------------------
// COUNT
// function App() {
//   return (
//     <div style={{ background: "#edede9", height: "100vh" }}>
//       <ToggleMessage />
//     </div>
//   );
// }

// const ToggleMessage = () => {
//   const [notificationCount, setNotificationCount] = useState(0); // new state defined
//   // when the value of the state variable changes then the compenents using them re-renders

//   function increment() {
//     setNotificationCount(notificationCount + 1);
//   }

//   return (
//     <div>
//       <button onClick={() => increment(notificationCount)}>
//         Increase Count
//       </button>
//       {notificationCount}{" "}
//     </div>
//   );
// };

// -----------------------------------------------------------------------------------------------------------------------
// ADD POST

// function App() {
//   const [posts, setPosts] = useState([]); // define state variable

//   const postComponents = posts.map(
//     (
//       post // convert the posts array state variable into array of components
//     ) => (
//       <PostComponent
//         name={post.name}
//         subtitle={post.subtitle}
//         time={post.time}
//         image={post.image}
//         description={post.description}
//       />
//     )
//   );

//   function addPost() {
//     setPosts([
//       ...posts, // spread the original array ie along with the original content push the existing one
//       {
//         name: "Bhaven",
//         subtitle: "99 followers",
//         time: "50min ago",
//         image:
//           "https://images.pexels.com/photos/30434990/pexels-photo-30434990/free-photo-of-portrait-of-a-fluffy-dog-against-blue-sky.jpeg",
//         description:
//           "Want to know how to be a better programmer? Check out the video",
//       },
//     ]);
//   }

//   return (
//     <div style={{ background: "#bbbbbb", height: "100vh" }}>
//       <button onClick={addPost}>Add Post</button>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div>{postComponents}</div> {/*render the array of components */}
//       </div>
//     </div>
//   );
// }
