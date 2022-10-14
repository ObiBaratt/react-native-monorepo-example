import { Image, Text, View } from "react-native";
import styled from "styled-components";

export const MessageContainer = styled(View)`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    padding-left: 12px;
    padding-right: 12px;
`

export const ProfilePicture = styled(Image)`
  height: 56px;
  width: 56px;
  border-radius: 99px;
`;

export const MessageTextContainer = styled(View)`
  margin-left: 16px;
  width: 1px;
  flex-grow: 1;
`;

export const MessageHeaderContainer = styled(View)`
    display: flex;
    flex-direction: row;
`;

export const Username = styled(Text)`
  color: #3f3f40;
  font-size: 18px;
  margin-right: 12px;
  width: 1px;
  flex-grow: 1;
  font-weight: 500;
`;

export const DateString = styled(Text)`
  color: #86898c;
  width: 40%;
`;

export const MessageBodyContainer = styled(View)`
  margin-top: 6px;
`;

export const MessageContents = styled(Text)`
  font-size: 16px;
  color: #3f3f40;
  flex-shrink: 1;
`;