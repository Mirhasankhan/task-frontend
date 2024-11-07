export type TTask = {
  description: string;
  clientName: string;
  status: string;
  _id: string;
  task?: any;
  attachments?: any;
};

export type TAttachment = {
  mimetype: string;
  filename: string;
  path: string;
};
