import { useEffect, useRef, useState } from "react";
import "./assets/css/App.css";
import bin from "./assets/images/2961751.png";
import empty from "./assets/images/empty.png";
import plus from "./assets/images/plus.png";
import recover from "./assets/images/recover.png";
import removeAll from "./assets/images/removeall.png";
import removeChecked from "./assets/images/removechecked.png";

function App() {
  const storageData = localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")) : [];
  const divRef = useRef(null);
  const [bool, setBool] = useState(false);
  const [modal, setModal] = useState({ open: false, target: "", image: "" });
  const [scroll, setScroll] = useState(false);
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState(storageData);
  localStorage.setItem("Tasks", JSON.stringify(tasks));
  useEffect(() => { divRef.current?.scrollIntoView({ block: "end", inline: "end", behavior: 'smooth' }); }, [scroll]);

  const catchTask = e => { setTask({ text: e.target.value, done: false }); setBool(false); };

  const handleKeyDown = e => { if (e.key === 'Enter') addBtn() };

  const addBtn = () => {
    if (tasks.find(item => item.text === task.text) || !task.text) setBool(true);
    else { setBool(false); setScroll(prev => !prev); setTask({}); setTasks([...tasks, task]); }
  }

  const doneChecker = e =>
    setTasks(tasks.map(item => item.text === e.target.nextElementSibling.value ? { text: item.text, done: e.target.checked } : item))

  const deleteAll = () => setTasks([]);

  const askModal = e =>
    tasks.length &&
    setModal({
      open: true,
      target: e.target.previousElementSibling.value,
      image: e.target.src.includes("removeall") ? "removeAll" : e.target.src.includes("removechecked") ? "removeChecked" : "Bu tapşırığı "
    });

  const tasksRemover = () => {
    if (modal.open && modal.target !== undefined && modal.image === "Bu tapşırığı ") {
      setTasks(tasks.filter(item => item.text === modal.target ? false : item)); offModal();
    } else if (modal.open && modal.image === "removeChecked") {
      tasks.length && setTasks(tasks.filter(item => item.done ? false : item)); offModal();
    } else deleteAll(); offModal();
  };

  const offModal = () => { modal.open && setModal({ open: false }); bool && setBool(false); };

  const clearChecked = () => {
    setTasks(tasks.map(item => item.done === true ? { ...item, done: false } : item));
  }

  const selectAll = () => tasks.length && setTasks(tasks.map(item => item.done === false ? { ...item, done: true } : item));

  return (
    <>
      <div className="modalCover" style={{ zIndex: modal.open && "1" }}>
        <div className="modal" style={{ transform: modal.open && "scale(1)" }}>
          <div>
            {
              modal.image === "removeAll"
                ?
                "Bütün tapşırıqları "
                :
                modal.image === "removeChecked" ? "Bütün hazır tapşırıqları " : modal.image
            }
            silmək istəyirsiniz?
          </div>
          <div className="btnWrapper">
            <button className="xeyir" onClick={offModal}>Xeyir</button>
            <button className="beli" onClick={tasksRemover}>Bəli</button>
          </div>
        </div>
      </div>
      <div className="img" onClick={offModal} style={{ opacity: modal.open && 0.2 }}>
        <h1 className="todo">TO-DO</h1>
        <span
          className="warning"
          style={{ transform: bool && "translateY(79px)" }}
        >Siyahıya boş sətir əlavə etmək mümkün deyil yada Qeyd etdiyiniz tapşırıq artıq siyahıda mövcuddur</span>
        <input
          value={task.text || ""}
          type="text"
          className="addInput"
          placeholder="Tapşırığı daxil edin..."
          onChange={catchTask}
          onKeyDown={handleKeyDown}
        />
        <img
          src={plus}
          alt="iconPlus"
          className="plusIcon"
          onClick={addBtn}
        />
        <div className="content" style={{ overflowY: tasks.length >= 6 && "scroll" }}>
          {
            tasks.length
              ?
              tasks.map((item) => {
                return (
                  <div className="task" key={Math.random()} ref={divRef}>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={item.done}
                      onChange={doneChecker}
                    />
                    <input
                      type="text"
                      className="theTask"
                      value={item?.text || " "}
                      readOnly
                    />
                    <img src={bin} alt="deleteButton" className="bin" onClick={askModal} />
                  </div>
                );
              })
              :
              <div className="emptyWrapper">
                <img src={empty} className="empty" alt="empty" />
                <p>Hal hazırda heç bir tapşırıq qeyd olunmayıb</p>
              </div>
          }
        </div>
        <div className="result">
          <div className="resultWrapper">
            <div className="taskCount">
              Ümumit tapşırıq sayı: <span className="stats">{tasks.length}</span> |
            </div>
            <div className="doneTask">
              Hazır tapşırıq sayı: <span className="stats">{tasks.filter((item, i, arr) => item.done && arr.length).length}</span>
            </div>
          </div>
          <img src={recover} alt="recover" onClick={clearChecked} onDoubleClick={selectAll} className="recover" />
          <img src={removeChecked} alt="removeChecked" onClick={askModal} className="removeChecked" />
          <img src={removeAll} alt="removeAll" onClick={askModal} className="removeAll" />
        </div>
      </div>
    </>
  );
}

export default App;
