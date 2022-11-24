import React, { useState } from "react";
import { client } from "../../utils/client";
import { v4 as uuidv4 } from "uuid";
import {
  CFContainer,
  CFTitle,
  InputWrapper,
  Input,
  TextArea,
  ButtonContainer,
  Button,
  Success,
  Save,
  Form,
} from "./styles";

const CommentsForm = ({ id }: { id: string }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [name, setName] = useState(window.localStorage.getItem("name") || "");
  const [email, setEmail] = useState(
    window.localStorage.getItem("email") || ""
  );

  const handleComment = (e: any) => {
    e.preventDefault();
    const comment = e.target[0].value;
    const storeData = e.target[3].checked;

    const commentObj = { name, comment, email };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }

    submitComment(commentObj);
  };

  const submitComment = async ({ name, email, comment }: any) => {
    await client
      .patch(id)
      .setIfMissing({ comments: [] })
      .insert("after", "comments[-1]", [
        {
          comment,
          _key: uuidv4(),
          name,
          email,
        },
      ])
      .commit()
      .then(() => {
        setShowSuccessMessage(true);

        setTimeout(() => setShowSuccessMessage(false), 3000);
      });
  };

  return (
    <CFContainer>
      <CFTitle>Leave a Reply</CFTitle>
      <Form onSubmit={handleComment}>
        <InputWrapper>
          <TextArea rows={4} name="Comment" placeholder="Comment" required />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Name"
            required
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <div>
            <input
              type="checkbox"
              name="storeData"
              value="true"
              id="storeData"
            />
            <Save htmlFor="storeData">
              Save my email for the next time I comment.
            </Save>
          </div>
        </InputWrapper>
        <ButtonContainer>
          <Button type="submit">Post</Button>
        </ButtonContainer>
      </Form>
      {showSuccessMessage && <Success>Comment Submitted for review</Success>}
    </CFContainer>
  );
};

export default CommentsForm;
