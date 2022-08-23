const express = require("express");
const sessionCrm = require("../src/demoaws/routesConfig")
const router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  return res.send({
    apiResponseCode: "200",
    apiResponeMessage: "success",
    apiResponseData: { responseCde: "200", responseMessage: "success" },
    apiResponseFrom: "Node Api",
    apiResponseTime: new Date().toLocaleString(),
  });
});

/***************************** add new routes here ****************************************/
router.use("/demoAwsNode",sessionCrm);

module.exports = router;
