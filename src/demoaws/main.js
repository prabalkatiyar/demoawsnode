const logger = require("../../loggers/loggers");

exports.getMethod = async (req, res, next) => {
    logger.info_demoAwsNodeLog(
        "Inside getMethod()"
    );
    logger.info_demoAwsNodeLog(
        "Project has deployed on AWS"
    );
            return res.send("Project has deployed on AWS");
};
exports.postMethod = async (req, res, next) => {
    logger.info_demoAwsNodeLog(
        "Inside postMethod()"
    );
    logger.info_demoAwsNodeLog(
        req.body.name
        );
    return res.send(req.body.name);
};