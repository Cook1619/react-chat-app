import React from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window,
} from "stream-chat-react";
import { MessageList, MessageInput } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";

const chatClient = new StreamChat("gx5a64bj4ptz");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicGxhaW4tc2NlbmUtMSJ9.UEnu-IOmEQmXD35n3m8Dj2lgFxk4n2KSoA25aNkECew";

chatClient.setUser(
  {
    id: "plain-scene-1",
    name: "Plain scene",
    image: "https://getstream.io/random_png/?id=plain-scene-1&name=Plain+scene",
  },
  userToken
);

const channel = chatClient.channel("messaging", "godevs", {
  // add as many custom fields as you'd like
  image:
    "https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png",
  name: "Talk about Go",
});

const App = () => (
  <Chat client={chatClient} theme={"messaging light"}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
