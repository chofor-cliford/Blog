import { NextPage } from "next";
import React from "react";
import { CommentContainer, CommentTitle, DisplayComment, DisplayCommentWrapper, UserComment, UserName } from "./styles";
import parse  from "html-react-parser";

type Text = {
  _key: string;
  name: string;
  comment: string;
};

interface IProps {
  comment: Text[];
}

const Comments: NextPage<IProps> = ({ comment }) => {
  return (
    <>
      {comment?.length > 0 && (
        <CommentContainer>
          <CommentTitle>
            {comment.length}
            {" "}
            Comments
          </CommentTitle>
          {comment.map((item) => (
            <DisplayComment key={item._key}>
              <DisplayCommentWrapper>
                <UserName>{item.name}</UserName>
                {" "}
              </DisplayCommentWrapper>
              <UserComment>{parse(item.comment)}</UserComment>
            </DisplayComment>
          ))}
        </CommentContainer>
      )}
    </>
  );
};

export default Comments;
