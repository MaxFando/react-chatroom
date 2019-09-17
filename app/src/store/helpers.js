export const mapStateToProps = state => {
  return state;
};

export const getChatroomIdFromUrl = location => location.pathname.split("/")[2];
