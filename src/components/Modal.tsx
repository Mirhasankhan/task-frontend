import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { RiAttachment2 } from "react-icons/ri";
import UploadFile from "./UploadFile";
import { TAttachment, TTask } from "../types/type";

const TaskModal = (id: any) => {
  const [task, setTask] = useState<TTask[]>([]);
  console.log(task);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/task/${id.id}`).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setTask(data);
      })
    );
  }, []);

  return (
    <>
      <Button className="bg-gray-100" onClick={showModal}>
        <RiAttachment2 className="text-xl" />
      </Button>
      <Modal
        title="Attachments"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <UploadFile id={id}></UploadFile>
        <div>
          {task?.map((t) => (
            <div>
              <div className="mt-6">
                {t.attachments.map((file: TAttachment, index: number) => (
                  <div key={index} className="flex gap-1 my-2">
                    <p>{index + 1}.</p>
                    {file.mimetype.startsWith("image/") ? (
                      <img
                        src={`http://localhost:5000/${file.path}`}
                        alt={file.filename}
                        style={{ width: "200px", height: "auto" }}
                      />
                    ) : (
                      <a>{file.filename}</a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default TaskModal;
