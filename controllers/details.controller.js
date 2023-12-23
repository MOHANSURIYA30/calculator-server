const service = require('../services/details.service');

exports.createDetail = async (req, res, next) => {
  try {
    let { body } = req;
    const result = await service.createDetail(body);
    if (result) {
    res.status(200).json({response:result,message:"detail created successfully"})
    }
  } catch (error) {
    res.status(422).json(error)
  }
}

exports.getAllDetails = async (req, res, next) => {
    try {
      let { body } = req;
      const result = await service.getDetails(body);
      if (result) {
        res.status(200).json({data:result})
      }
    } catch (error) {
        res.status(422).json(error)
    }
  }

  exports.deleteDetail = async (req, res, next) => {
    try {
        const response = await service.deleteDetail({ _id: req.params.id })
        if (response) {
            res.status(200).json({message:"Deleted Successfully"})

        }
    } catch (error) {
        res.status(422).json(error)
    }
  }