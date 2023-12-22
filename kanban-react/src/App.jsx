import Aside from "./component/Aside";
import Header from "./component/Header";
import Kanban from "./component/Kanban";
function App() {
  return (
    <>
      <div className="  ">
        <div className="d-flex">
          <div className="w-15 d-none d-md-block ">
            <Aside />
          </div>
          <div className="w-100 w-md-85 ">
            <div className="d-flex flex-column ">
              <Header />
              <div className="shadow-sm p-3 mb-3  bg-body-tertiary ">Title</div>
              <Kanban />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
