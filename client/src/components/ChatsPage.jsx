import {MultiChatWindow,MultiChatSocket,useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "bc82c1b9-cfa3-42f9-9473-11995fc824eb",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};
export default ChatsPage;
