import client from "../assets/client.png";
import { FaLayerGroup } from "react-icons/fa";
import { PiNotepadLight } from "react-icons/pi";
import TaskModal from "./Modal";
import { TTask } from "../types/type";

const Card = (task: TTask) => {
  const { description, clientName, _id, attachments } = task.task;

  return (
    <div
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#3b82f6 #f1f1f1",
        WebkitScrollbarWidth: "8px",
        WebkitScrollbarTrack: "#f1f1f1",
        WebkitScrollbarThumb: "#3b82f6",
        WebkitScrollbarThumbHover: "#2563eb",
      }}
      className="bg-gray-200 p-1"
    >
      <div>
        <div className="bg-white rounded-md p-2 my-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <img className="h-6 w-6 rounded-full" src={client} alt="" />
              <p className="font-medium">Client Name</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="h-6 w-6 rounded-full" src={client} alt="" />
              <p className="font-medium">{clientName}</p>
            </div>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-1">
              <FaLayerGroup />
              <p>
                {description.length > 15
                  ? `${description.slice(0, 15)}...`
                  : description}
              </p>
            </div>
            <div className="flex items-center gap-1 bg-gray-300 p-1 rounded-md">
              <PiNotepadLight />
              <p className="font-medium">1/2</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <img className="h-6 w-6 rounded-full" src={client} alt="" />
            <img className="h-6 w-6 rounded-full" src={client} alt="" />
            <p className="px-1 rounded-full bg-gray-100 font-medium">12+</p>
            <div className="flex items-center gap-1">
              <TaskModal id={_id}></TaskModal>
              <p>{attachments.length}</p>
            </div>
            <p>11-07-2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
