<>
  <h1>Hello</h1>
  {message.length > 0 && !isLogin ? (
    <h1> you have {messages.length} unread messages.</h1>
  ) : (
    <h1> you don't have any messages</h1>
  )}
</>;
