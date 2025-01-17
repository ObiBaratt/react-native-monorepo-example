import dayjs from "dayjs";
// Needed for TS typing
import "dayjs/plugin/relativeTime";
import React, { useMemo } from "react";
import { UserMessage } from "../../types/message";
import {
  DateString,
  MessageBodyContainer,
  MessageContainer,
  MessageContents,
  MessageHeaderContainer,
  MessageTextContainer,
  ProfilePicture,
  Username,
} from "./message.styles";

interface MessageProps {
  message: UserMessage;
}

export const Message = ({ message }: MessageProps) => {
  const displayedDate = useMemo(() => {
    const dayJsDay = dayjs(message.date);
    // broken
    // const relativeDate = dayJsDay.fromNow();
    // const time = dayJsDay.format("H:mm A");
    return `IDK, sometime at sometime`;
  }, [message]);

  return (
    <MessageContainer>
      <ProfilePicture
        source={
          typeof message.profilePicture === "string"
            ? { uri: message.profilePicture }
            : message.profilePicture
        }
      />
      <MessageTextContainer>
        <MessageHeaderContainer>
          <Username numberOfLines={1}>{message.username}</Username>
          <DateString numberOfLines={1}>{displayedDate}</DateString>
        </MessageHeaderContainer>
        <MessageBodyContainer>
          <MessageContents>{message.message}</MessageContents>
        </MessageBodyContainer>
      </MessageTextContainer>
    </MessageContainer>
  );
};
