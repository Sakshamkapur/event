import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Title,
  Upload,
} from "../shared/styles";
import { useStore } from "../store";

const Create = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [hostName, setHostName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const fileInputRef = useRef(null);
  const { events, setEvents } = useStore((state) => ({
    events: state.events,
    setEvents: state.setEvents,
  }));
  const router = useRouter();

  const fileUpload = (e) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setImage(objectUrl);
  };

  const handleFileUpload = () => {
    const fileInput = fileInputRef.current;
    fileInput.click();
  };

  const handleSubmit = () => {
    const id = Object.keys(events).length + 1;
    setEvents(id, {
      id,
      name,
      hostName,
      image,
      startDate,
      endDate,
    });
    router.push(`/event/${id}`);
  };

  return (
    <div>
      <Title>
        Create an <span>Event</span>
      </Title>
      <Form>
        <Upload onClick={handleFileUpload}>
          {image && <img src={image} />}
        </Upload>
        <Input
          type="text"
          placeholder="Event Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Host Name"
          onChange={(e) => setHostName(e.target.value)}
        />
        <Input
          type="datetime-local"
          placeholder="Start Date/Time"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Input
          type="datetime-local"
          placeholder="End Date/Time"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Button onClick={handleSubmit}>Next</Button>
      </Form>
      <input
        type="file"
        ref={fileInputRef}
        onChange={fileUpload}
        accept="image/*"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Create;
