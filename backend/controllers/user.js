exports.f1 = (req, res) => {
  res.status(404).json({
    messsage: "aofjeoijeo",
    error: "irjfefi",
  });
};
//200 means all good
//status 204 means you won't get body, but the request was successful
//404 means not found
//400, bad request or error
//403, means forbidden, cannot be authenticated
