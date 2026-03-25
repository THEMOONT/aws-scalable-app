exports.handler = async (event) => {
    console.log("Lambda triggered:", event);
    return {
        statusCode: 200,
        body: JSON.stringify("Hello from Lambda 🚀")
    };
};
