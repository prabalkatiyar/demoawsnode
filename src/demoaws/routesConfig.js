const express = require("express");
const commonApi = require("./main");
const router = express.Router();

router.get("/getMethod", [
    commonApi.getMethod
  ]
);

router.post("/postMethod", [
    commonApi.postMethod
  ]
);
module.exports = router;
