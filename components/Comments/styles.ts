import styled from 'styled-components';

export const CommentContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.152);
  padding-bottom: 12px;
  margin-bottom: 8px;
  padding: 8px;
`;

export const CommentTitle = styled.h3`
  font-size: large;
  margin-bottom: 8px;
  font-weight: bold;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
  padding-bottom: 4px;
`;

export const DisplayComment = styled.div`
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
  padding-bottom: 4px;

`;

export const DisplayCommentWrapper = styled.p`
  margin-bottom: 4px;
`;

export const UserName = styled.span`
  font-weight: bold;
`;

export const UserComment = styled.p`
  white-space: pre-line;
  color: rgba(128, 128, 128, 0.6);
  width: 100%;
`;
