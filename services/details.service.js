const DetailModel = require("../models/details.model")

exports.createDetail = async (data) => {
    try {
        let detailData = new DetailModel(data);
        await detailData.save()
        return detailData;
    } catch (error) {
        throw (error)
    }
}

exports.getDetails = async (query) => {
    try {
        let detailData = await DetailModel.find(query)
        return detailData;
    } catch (error) {
        throw (error)
    }
}

exports.deleteDetail = async (query) => {
    try {
        let response = await DetailModel.findOneAndDelete(query).exec()
        return response;
    } catch (error) {
        throw (error)
    }
}