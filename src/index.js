require("axios")


exports.handler = async (event) => {
    // TODO implement
    console.log(event)
      return {
        statusCode: 200,
        body: "<h1>Hello from digger!!</h1>"
      }
};